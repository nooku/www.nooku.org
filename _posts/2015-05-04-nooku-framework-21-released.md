---
title: Nooku Framework 2.1 released
author: Ercan Özkaya
layout: post
image: /images/blog/2015/nooku21released.jpg
image-alt: Nooku Framework 2.1 released
description: Nooku Framework 2.1 announcement 
---

Nooku framework 2.1 has just been released! In this release, we focused on fixing reported issues and further stabilizing the codebase. Support for PHP 5.2 has been dropped making way for a more modern codebase with the introduction of namespaces for the 3.0 release.

<!--more-->

Upgrading your Joomla extensions from 2.0 should not require any changes. Here is the full changelog of the release:

* Removed PHP 5.2 support
* Add UserInterface::hasRole method ([code](https://github.com/nooku/nooku-framework/blob/master/code/libraries/koowa/libraries/user/abstract.php#L135))
* Get request format from URL path when possible ([code](https://github.com/nooku/nooku-framework/blob/master/code/libraries/koowa/libraries/dispatcher/request/abstract.php#L731))
* Fields that start with an underscore are hidden in JSON layouts by default ([code](https://github.com/nooku/nooku-framework/blob/master/code/libraries/koowa/libraries/model/entity/abstract.php#L455))
* Better handling of empty request payloads
* DatabaseTableAbstract select modes were not properly working
* Grid search would filter selected rows only
* Automatically add [] to multiple select input boxes
* Proper normalization of dates sent in different formats
* Minor frontend display issues

See the [changelog on Github.](https://github.com/nooku/nooku-framework/releases/tag/v2.1.0)

## What's next?

In the next release we are going to focus on splitting the framework into two parts, framework core and a Joomla adapter. This will pave the way to run Nooku Framework standalone or even port it to different applications, like Wordpress for example which is high on our own wishlist!

As always, upgrading is as simple as modifying your composer.json file and running:
 
{% highlight bash %}
composer update
{% endhighlight %}

You can also install it from scratch by running:

{% highlight bash %}
composer require nooku/nooku-framework:2.*
{% endhighlight %}

Feel free to fork it, break it, improve it, or build upon it!
