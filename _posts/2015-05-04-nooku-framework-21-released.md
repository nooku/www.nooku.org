---
title: Nooku Framework 2.1 released
author: Ercan Özkaya
layout: post
image: /images/blog/2015/nooku21released.jpg
image-alt: Nooku Framework 2.1 released
description: Nooku Framework 2.1 announcement 
---

Nooku framework 2.1 has just been released! In this release, we focused on fixing reported issues and stabilizing the core. We also dropped support for PHP 5.2 making way for a more modern codebase.

<!--more-->

Upgrading your code from 2.0 should not require any changes. Here is the full changelog of the release:

* Add UserInterface::hasRole method
* Get request format from URL path when possible
* Removed PHP 5.2 support
* Fields that start with an underscore are hidden in JSON layouts by default
* Better handling of empty request payloads
* DatabaseTableAbstract select modes were not properly working
* Grid search would filter selected rows only
* Automatically add [] to multiple select input boxes
* Proper normalization of dates sent in different formats
* Minor frontend display issues

See the [changelog on Github.](https://github.com/nooku/nooku-framework/releases/tag/v2.1.0)

## What's next?

In the next release we are going to focus on splitting the framework into two parts, framework core and a Joomla adapter. This will pave the way for making code written for Nooku a breeze to port into different applications, be it Wordpress, Joomla, or standalone.

As always, upgrading is as simple as modifying your composer.json file and running ```composer update```

You can also install it from scratch by running:

```composer require nooku/nooku-framework:2.*```

Feel free to fork it, break it, improve it, or build upon it!

