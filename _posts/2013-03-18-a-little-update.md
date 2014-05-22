---
title: A little update
author: Johan
layout: post
permalink: /blog/2013/03/a-little-update/
dsq_thread_id:
  - 1147270800
categories:
  - Framework
  - Server
---
It has been a little bit quiet in the past months on the blog. Some rumoured that Nooku is death, others claimed we moved to Mars, &#8230; in good Nooku tradition no news is good news! Stick to the code, right?!

Those of you who followed us closely have noticed the [constant stream of progress at lightning speed][1]. Anything slower, is simply not fast enough.

Here is a little big update right from the coding frontline. Make yourself a coffee, get a beer, sit back relax. Here we go!

## &#8216;Git&#8217;-ting it

The Nooku code base has been moved to [Git][2] at the beginning of the year. The SVN repositories are abandoned. They are probably invested with vermin, bugs, and other little unwanted creatures. Lights have been turned off, go there on your own accord. You have been warned!

The Nooku codebase has been brought back to onto 2 spaces on Assembla: [Nooku Framework][3] & [Nooku Server][4].  
<!--more-->

### Nooku Framework

The Nooku Framework space now combines the Nooku Framework, Nooku Components & Nooku Server codebases.

The [Nooku Components][5] repository is closed down and will be removed later this year.

All development is now being done in the Nooku Framework space and its [Git repository][6]. If you want to keep up, this is the place to be. Development is happening in the [develop branch][7]. This will become the 13.1 release later this year.

Manual installation instructions for Nooku Framework can be found in the [README][8]. Not for the faint of hearted.

<http://nooku.assembla.com/spaces/nooku-framework>

### Nooku Server

The Nooku Server space now hosts a little-big-side-project we have been working on for quite some time. Drumroll! A LNMP (Linux, Nginx, Mysql and PHP) [Vagrant][9] box. Nooku Server is a now a lightweight, reproducible, and portable development environment for Nooku Framework projects. Hurray!

Setup is [death easy][10]! What you get is a fully working multi-PHP (5.3 and 5.4) server for all your local Nooku development. Fully provisioned using [Puppet][11], with lot&#8217;s of other goodies : [PHPUnit][12], [Composer][13], [XDebug][14], [LESS][15], [PHPAnalyser][16], [Percona][17], &#8230;

Advantage of using Nooku Server is that everyone is running the exact same setup. In a next step we will make the Puppet provisioning scripts available so you can easily boot up your own servers on [AWS][18], [Rackspace][19] etc.

The Nooku Server repository is not related to Nooku Framework. The Nooku Server master branch is currently configured to work with the Nooku Framework develop branch.

<http://nooku.assembla.com/spaces/nooku-server>

## Release pivot

In 2012 we [set out with the idea to release 3 versions][20] 12.1, 12.2 and 12.3. And so, we did. Well kinda. We learned that doing 3 releases a year is possible but hard with all the changes going on. Change of plans for 2013, or in startup terms, let&#8217;s pivot (just a tiny bit).

*   We are not tagging the 12.2 and 12.3 releases. The 12.2 release can be found in the Git master branch and is ready but not properly tested, probably will have smaller bugs. Use at your own risk.
*   We are jumping straight to the 13.1 release. This will be the only major release for 2013, targeting April for a merge to the master branch to stabilise and bug fix. We might (probably will) have a 13.2 release but this will be a bug fix release only.

## Sparking Joomla

Our 12.1 release was the last release that is compatible with Joomla. Time has come to stand on our own two feet. With the 13.1 release our refactoring effort will be completed. Three packages are left to be sparked: JCache, JParameter and JLanguage. Forward we go!

## Everything is a Component

After &#8220;Stick to the Code&#8221;, a new rule is born with 13.1: &#8220;Everything is a Component&#8221;! No more plugins, modules, &#8230; or any other lower order extension types, everything is now refactored to be or be part of a component!

Components will contain re-usable code, either base functionality which can be extended upon, or as part of an application package.

However, component refactoring is not completed yet. Re-usable component code still needs to be moved and namespaces need to be added. As of writing of this post we are 90% done with this.

As you can already guess having all the component code inside one folder opens up a lot of exciting possibilities: will make installing components using Composor easy, allows for using git submodules, and allow for distributing components as PHAR packages. Oh yes that too!

## Enough talk

I hear y&#8217;all thinking, all fine and dandy but just show me the goods already. We got that covered! Our demo site has been updated to run from the develop branch. Refreshed hourly and updated daily with new and fresh code.

Go to: <http://demo.nooku.org> (frontend login is not yet working), you can login to <http://demo.nooku.org/administrator> (admin@localhost.home::admin). Enjoy!

Warning, Nooku is about cutting edge technologies. Our administrator interface is built on top of the webkit rendering engine. Non-webkit browsers are not supported, [Chrome][21] is advised.

## Pirates code

&#8220;The code is more what you&#8217;d call &#8220;guidelines&#8221; than actual rules&#8221;. So to help sail you pirates along Captain Oli has started &#8220;Nooku Guides&#8221; and is writing some code guides for Nooku developers. We are hosting this on our Github account, fork away!

[http://github.com/nooku/nooku-guides][22]

 [1]: https://www.ohloh.net/p/nooku
 [2]: http://git-scm.com/
 [3]: http://nooku.assembla.com/spaces/nooku-framework
 [4]: http://nooku.assembla.com/spaces/nooku-server
 [5]: https://www.assembla.com/spaces/nooku-components
 [6]: https://nooku.assembla.com/code/nooku-framework/git/nodes
 [7]: https://nooku.assembla.com/code/nooku-framework/git/nodes/develop
 [8]: https://nooku.assembla.com/code/nooku-framework/git/nodes/develop/README.md
 [9]: http://www.vagrantup.com/
 [10]: https://nooku.assembla.com/code/nooku-server/git/nodes/master/README.md
 [11]: https://puppetlabs.com/
 [12]: http://www.phpunit.de/
 [13]: http://getcomposer.org/
 [14]: http://xdebug.org/
 [15]: http://lesscss.org/
 [16]: https://scrutinizer-ci.com/docs/tools/php/php-analyzer/
 [17]: http://www.percona.com/
 [18]: http://aws.amazon.com/
 [19]: http://rackspace.com/
 [20]: http://blog.nooku.org/2012/01/onward-to-2012/#more-2136
 [21]: www.google.com/chrome
 [22]: https://github.com/nooku/nooku-guides