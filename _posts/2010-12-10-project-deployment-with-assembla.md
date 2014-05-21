---
title: Project Deployment with Assembla
author: Shayne
layout: post
permalink: /2010/12/project-deployment-with-assembla/
dsq_thread_id:
  - 188264632
categories:
  - Tutorial
tags:
  - assembla
  - developer portal
  - development
---
<div class="wp-caption alignleft" style="width: 217px">
  <a title="Assembla Server Configuration by Nooku, on Flickr" href="http://www.flickr.com/photos/nooku/5248212107/"><img class=" " title="Assembla FTP build configuration" src="http://farm6.static.flickr.com/5289/5248212107_7d0d4a1052.jpg" alt="Assembla Server Configuration" width="207" height="280" /></a><p class="wp-caption-text">
    Assembla FTP build configuration
  </p>
</div>

For the best part of a year we have been using [Assembla][1] for all of our Nooku development. The first public example being the [Nooku Developer Portal][2]. Assembla is not only a great tool for our Nooku developer portal, we also use it for all our client projects. Assembla itself has a plethora of features, two of which are methods of deployment, a Build Tool and a FTP Tool.

The build tool utilises [Capistrano][3] and boasts some rather heavy duty capabilities. I have been testing this with Nooku Server, deploying to my own cloud server and whilst the setup is far more complex than a simple FTP deployment I can immediately see the advantages. For example the ability to run server side scripts allows for database updates to be run.

<!--more-->

The FTP Tool is far simpler and is currently what we use on our [Belgium Police][4] project. For this project SSH is the only method of access to the staging and production servers. The FTP Tool provides for SFTP so this fits the restriction perfectly.

For this project we are also running a full development environment, that means Development, Staging and Production servers. For the development server the FTP Tool performs a deployment upon subversion commits, effectively providing a continuous build. For the Staging and Production servers we run manual deployments as required.

With this setup our developers are free to do what they need to without effecting the clients ability to test changes. When the time comes to apply changes to the Production server we will be able to do it quickly, with little or no downtime depending on the nature of the changes. The deployment configurations are all saved in Assembla so the process is a simple cost effective alternative to manual updates.

 [1]: http://www.assembla.com
 [2]: http://code.nooku.org/
 [3]: https://github.com/capistrano/capistrano/wiki/Documentation-v2.x
 [4]: http://blog.nooku.org/2010/12/nooku-server-joomla-on-steroids/