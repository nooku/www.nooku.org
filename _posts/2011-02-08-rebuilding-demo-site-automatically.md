---
title: Rebuilding a demo site automatically
author: Shayne
layout: post
permalink: /blog/2011/02/rebuilding-demo-site-automatically/
dsq_thread_id:
  - 225055952
categories:
  - Tutorial
tags:
  - code snippet
  - demo
  - deployment
---
Recently I have been working on the demo server that will house our various demo sites.

One of the common issues with a demo site is that to preserve its integrity you may need to either restrict access or have a periodic rebuild. Restricting access may work sometimes but it&#8217;s likely to inhibit people trying out anything that is administrative in nature. Hence rebuilding the site is a far more appealing alternative.

The idea is basically delete everything and replace with a fresh copy, but to do so with minimum downtime. The result should be  a quick and secure rebuild. With that in mind we set about creating bash script that would rebuild the site as often as required (run as a cron job).

To get started I mapped out the process.

[<img src="http://farm5.static.flickr.com/4145/5415925562_26ff253fa1.jpg" width="376" height="500" alt="Site rebuilt workflow" />][1]

As you can see we do everything using version control which in this case happened to be [subversion][2].

By updating then exporting into a temp folder, the longest part of the process is done prior to any impact on the site. I threw in the checkout logic so that the same script could be used to build a brand new site (as in, one that does not already exist).

The first impact on the public site is the dropping of the database unless there have been changes to the repository that required database modifications.

For a typical site the whole process takes 13 seconds when no changes have been committed to subversion, with less than 2 seconds of downtime.  
<!--more-->

### Let&#8217;s speak code

For those that might find such a script useful, here it is:

<pre class="brush:bash">#! /bin/bash
# A script to build and rebuild a demo site from a svn repository
# -------------------------------------------------------------------------
# Copyright (c) 2010 - 2011 Timble CVBA &lt;http://www.timble.net&gt;
# This script is licensed under GNU GPL version 3.0
# -------------------------------------------------------------------------

# Setup Paramaters
ROOTPATH=/path/to/site
SVNUSER="svn_username"
SVNPASS="svn_password"
SVNURL="https://some.sv.url"
DBUSER="database_username"
DBPASS='database_password'
DB="database_name"
DBSCRIPT=relative/path/to/sql
LOG=/path/to/rebuild.log

# -------------------------------------------------------------------------
# DO NOT CHANGE ANYTHING BELOW UNLESS YOU REALLY KNOW WHAT YOU'RE DOING
# -------------------------------------------------------------------------

START=$(date +%s)

echo " " &gt;&gt; $ROOTPATH/scripts/rebuild.log
echo "Rebuild Started at `date`" &gt;&gt; $LOG

# Checkout the site if its not already there
if [ !  -d $ROOTPATH/svn ]
 then
 echo "Creating svn folder" &gt;&gt; $LOG
 mkdir $ROOTPATH/svn &gt;&gt; $LOG
 echo "Checking out working copy" &gt;&gt; $LOG
 svn co --username $SVNUSER --password $SVNPASS --non-interactive --no-auth-cache $SVNURL $ROOTPATH/svn &gt;&gt; $LOG
fi

# Update SVN (Currently from trunk but a tag might be better)
echo "- Update the working copy" &gt;&gt; $LOG
svn update --username $SVNUSER --password $SVNPASS --non-interactive --no-auth-cache $ROOTPATH/svn &gt;&gt; $LOG

# Export filebase
echo "- Export to public_tmp"  &gt;&gt; $LOG
svn export $ROOTPATH/svn $ROOTPATH/public_tmp &gt;&gt; $LOG

# Delete the current public folder
echo "- Delete the current public folder" &gt;&gt; $LOG
rm -fr $ROOTPATH/public &gt;&gt; $LOG

# Rename the checkout folder to public making it live
echo "- Rename public_tmp to public" &gt;&gt; $LOG
mv $ROOTPATH/public_tmp $ROOTPATH/public &gt;&gt; $LOG

# Set permissions on new public folder
echo "- Set permissions to public folder" &gt;&gt; $LOG
chown -Rf www-data:www-data $ROOTPATH/public &gt;&gt; $LOG
find $ROOTPATH/public -type f -exec chmod 644 {} \; &gt;&gt; $LOG
find $ROOTPATH/public -type d -exec chmod 755 {} \; &gt;&gt; $LOG

# Drop the db
echo "- Drop the database" &gt;&gt; $LOG
mysqladmin -u $DBUSER --password=$DBPASS --force DROP $DB &lt; $ROOTPATH/$DBSCRIPT &gt;&gt; $LOG

# Create the db
echo "- Create the database" &gt;&gt; $ROOTPATH/scripts/rebuild.log
mysqladmin -u $DBUSER --password=$DBPASS CREATE $DB &lt; $ROOTPATH/$DBSCRIPT &gt;&gt; $LOG

# Reload the sql
echo "- Recreate the database" &gt;&gt; $LOG
mysql -u $DBUSER --password=$DBPASS $DB &lt; $ROOTPATH/$DBSCRIPT &gt;&gt; $LOG

# Delete th sql script
echo "- Remove the SQL script" &gt;&gt; $LOG
rm -rf $ROOTPATH/$DBSCRIPT &gt;&gt; $LOG

END=$(date +%s)
DIFF=$(( $END - $START ))
echo "Rebuild completed in $DIFF seconds" &gt;&gt; $LOG
echo " " &gt;&gt; $LOG</pre>

Before running the script you need to configure the parameters. Once that&#8217;s done you can run the script from command line using:

<pre class="brush:bash">sh rebuild.sh</pre>

### Logging, always nice-to-have

Initially, just to debug, I added very rudimentary logging. But I then got carried away and decided to leave it there. Viewing the log you will see what has been happening. Log file will have entries similar to this:

<pre class="brush:bash">Rebuild Started at Fri Feb  4 08:40:27 UTC 2011
- Update the working copy
At revision 71.
- Export to public_tmp
Export complete.
- Delete the current public folder
- Rename public_tmp to public
- Set permissions to public folder
- Drop the database
Database "demo_database" dropped
- Create the database
- Recreate the database
- Remove the SQL script
Rebuild completed in 13 seconds</pre>

Note that this file will get bigger each time the script is run so especially if you’re going to use a cron job either remove the logging or periodically delete the log file.

### Let&#8217;s automate the script

Lastly create a cron job to run the script and your rebuild is fully automated. Start by invoking Crontab editor with:

<pre class="brush:bash">crontab -e</pre>

You may be prompted to select an editor. You can then set the time and the path to the script. For example to run an hourly script on the hour you would add:

<pre class="brush:bash">0 * * * * /path/to/rebuild.sh</pre>

Save and your done. Your rebuild script should run every hour on the hour. Check if it is running by viewing the log.

That&#8217;s it, you now have an automatically rebuilt site. Enjoy!

 [1]: http://www.flickr.com/photos/nooku/5415925562/ "Site rebuilt workflow by Nooku, on Flickr"
 [2]: http://en.wikipedia.org/wiki/Apache_Subversion