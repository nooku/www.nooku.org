---
title: 'Nginx for the world&#8230; and Joomla'
author: Shayne
layout: post
permalink: /blog/2011/02/nginx-for-the-world-and-joomla/
dsq_thread_id:
  - 241999766
categories:
  - Tutorial
tags:
  - cloud
  - code snippet
  - deployment
---
After months of discussion on the virtues of cloud servers and Nginx, I was recently tasked with moving all the Nooku sites over to [Rackspace Cloud][1]. With that in mind, I have documented the basic install process for the benefit of all.

For our install, we will be using [Ubuntu][2] 10.04 and installing/configuring:

<div>
  <ul>
    <li>
      PHP 5.3.x (using <a href="http://php-fpm.org/">fpm-php</a> which is included)
    </li>
    <li>
      MySQL 5.x
    </li>
    <li>
      <a href="http://nginx.org/">Nginx</a> 8.x
    </li>
  </ul>
</div>

<div>
  In this tutorial I will take you through the install and the outline how I have set things up to gain maximum performance.
</div>

<div>
  <!--more-->
  
  <strong></strong>
</div>

### Install PHP

First, we update the repositories so we get the right version of PHP.

<pre class="brush:bash">aptitude install python-software-properties
add-apt-repository ppa:brianmercer/php
aptitude -y update</pre>

We can now install everything we need.

<pre class="brush:bash">aptitude install php5-cli php5-common php5-mysql
aptitude install php5-fpm php5-cgi php-pear php5-memcache php-apc
service php5-fpm start</pre>

You may notice I have included memcache. Whilst I’m not configuring it in this install, I have been exploring Nooku Server’s ability to use memcache and Nginx’s inherent ability to serve memcached pages directly, hence no php process&#8230; ergo increased speed and less resource usage.

Configure FPM by switching pm to dynamic (it is static by default). Then set up the following with values appropriate to your server specification. I use vi but you can use your preferred editor.

<pre class="brush:bash">vi /etc/php5/fpm/php5-fpm.conf</pre>

Then set

<pre class="brush:bash">pm = dynamic</pre>

and set values for

<pre class="brush:bash">pm.max_children=
pm.start_servers=
pm.min_spare_servers=
pm.max_spare_servers=
pm.max_requests=</pre>

Once you are done, save and exit then restart FPM.

<pre class="brush:bash">service php5-fpm restart</pre>

### Install mySQL

Nothing too special here, perform the normal installation. Remember to note the password you set during the install process.

<pre class="brush:bash">aptitude install mysql-server</pre>

Next, configure Query Cache. Bring up the msql prompt (entering the password you created earlier).

<pre class="brush:bash">mysql -p -u root</pre>

Then set the query\_cache\_size. I have found 56MB to be sufficient for most Joomla! installs.

<pre class="brush:bash">set global query_cache_size= 5600000;</pre>

When you installed mySQL,  it created a root user and password. This user has full privileges on all DB’s so it is best to create a unique user for your Nooku Server or Joomla! installation.

<pre class="brush:bash">CREATE USER ‘username’@‘localhost’ IDENTIFIED BY ‘password’;</pre>

Since we are already here, we might as well create the database itself.

<pre class="brush:bash">CREATE DATABASE databasename ;</pre>

Do not forget  to grant the new user access to the new database.

<pre class="brush:bash">GRANT ALL PRIVILEGES ON databasename.* to ‘username’@‘localhost’</pre>

That is about it for mySQL.  We can then exit.

<pre class="brush:bash">exit;</pre>

If you prefer using a GUI, and assuming you have SSH access, you will be able to access mySQL via SSH using Sequal Pro, Navicat or any similar software. Avoid the temptation to provide wildcard access to mySQL.

### Install Nginx

Next up, we install Nginx. The following will ensure you get version 8 rather than version 7,  which is what you would otherwise install.

<pre class="brush:bash">echo "deb http://ppa.launchpad.net/nginx/stable/ubuntu lucid main" &gt;&gt; /etc/apt/sources.list
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C300EE8C
apt-get update</pre>

Then install with the command below:

<pre class="brush:bash">apt-get install nginx</pre>

### Setting up a site

This will get you started with a fresh Joomla! install. We will first set up a folder structure for the site, then create a database for use on the site. We then finally download and extract the Joomla! source code into the site root folder.

Start by creating a root folder for your site (this could be in an alternative location).

<pre class="brush:bash">mkdir -p /var/www/sitename/public
mkdir -p /var/www/sitename/logs</pre>

We can now grab the latest Joomla! or [Nooku Server][3] release.

<pre class="brush:bash">wget http://joomlacode.org/gf/download/frsrelease/13105/57239/Joomla_1.5.22-Stable-Full_Package.tar.gz</pre>

Then unpack it.

<pre class="brush:bash">tar xzvf Joomla_1.5.22-Stable-Full_Package.tar.gz</pre>

Then set permissions just to be safe.

<pre class="brush:bash">chown -fR www-data:www-data /var/www/sitename/public
find /var/www/sitename/public -type f -exec chmod 644 {} \;
find /var/www/sitename/public -type d -exec chmod 755 {} \;</pre>

We now need to set up a configuration file (conf) for the site. Nginx supplies a default site conf in /etc/nginx/sites-available called default. To start with your conf file, I would suggest copying the default.

<pre class="brush:bash">cp /etc/nginx/sites-available/default /etc/nginx/sites-available/sitename</pre>

We can then edit the copied conf file.

<pre class="brush:bash">vi /etc/nginx/sites-available/sitename</pre>

I’m only going to show the basics here, but for 90% of sites, this is all you need in your conf file.

<pre class="brush:bash">server {
    # The port number (80 for http)
    listen       80;</pre>

<pre class="brush:bash"># The domain name
    server_name  domainname.com www.domainname.com;</pre>

<pre class="brush:bash"># The public root folder of the site
    root   /var/www/domainname.com/public;</pre>

<pre class="brush:bash"># The default index file.
    index  index.php;</pre>

<pre class="brush:bash"># Where to write the site access log
    access_log  /var/www/domainname.com/logs/site.access.log  main;
# File uploads
client_max_body_size 10M;
client_body_buffer_size 128k;
# Add www to all urls
if ($host ~* ^([a-z0-9\-]+\.(be|fr|nl|de))$) {
rewrite ^(.*)$ http://www.$host$1 permanent;
}
    location / {
        expires 1d;
        # Note that nginx does not use .htaccess.
        # This will allow for SEF URL’s
        try_files $uri $uri/ /index.php?$args;
    }

    # Here we set up static files access and caching
    location ~* ^.+\.(jpg|jpeg|gif|png|ico|css|zip|tgz|gz|rar|bz2|doc|xls|exe|pdf|ppt|txt|tar|mid|midi|wav|bmp|rtf|js)	$ {
        access_log off;
        expires 30d;
    }

    error_page  404              /404.html;
    location = /404.html {
        root   /usr/share/nginx/html;
    }

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    proxy_cache_key "$host$request_uri$cookie_sessioncookie";

    # Send PHP scripts to FPM on 127.0.0.1:9000
    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME /var/www/public$fastcgi_script_name;
        include        fastcgi_params;
        expires 0d;
    }
}</pre>

Save your conf file. Next up, we need to symlink the site’s conf file into /etc/nginx/sites-enabled.

<pre class="brush:bash">ln -s /etc/nginx/sites-available/sitename /etc/nginx/sites-enabled/sitename</pre>

Finally restart the Nginx service so that the new settings are applied.

<pre class="brush:bash">service nginx restart</pre>

Assuming you have created the appropriate DNS records you should now be able to get to your site. If you downloaded and extracted Joomla! correctly, you should be seeing the install screen.

From there you should be on your way. Enjoy!

 [1]: https://timble.assembla.com/spaces/nooku-desktop/admin/general
 [2]: http://www.ubuntu.com/
 [3]: https://nooku.assembla.com/code/nooku-server/subversion/nodes