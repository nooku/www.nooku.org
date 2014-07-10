---
title: Announcing Nooku Server v3.0
author: Steven
layout: post
categories:
  - Server
tags:
  - vagrant
  - release
---
As you've most likely found out by now, we are all big fans of [Vagrant][2] at Nooku HQ. Vagrant is the tool that powers our Nooku development environment and makes sure you can start coding right away by managing this virtual environment for you.

We've launched the first Nooku Server box little more than a year ago. In good Nooku tradition, we have revised our approach more than once over the past year.

<!--more-->

The [v1.0 version][3] was a separate repository that required additional configuration before you could use it. You had to tell it where to find your Nooku Framework code first and then build the box yourself. 

To try and improve this workflow, we moved the Vagrant configuration into Nooku Framework itself and tagged it [v2.0][4]. Better, but not quite there yet: each time you clone the framework repository, you still had to build the box at first run. A time consuming process! 

Not to mention the fact that an updated version of PHP or MySQL could break our configuration, throw build errors all over the place and prevent you from getting a working box at all! 
 
<img src="http://www.hashicorp.com/images/blog/vagrant-cloud-5-weeks-in/logo-side-a35e4189.png" title="Vagrant Cloud" width="220" style="float: right; margin: 6px" />

With the recent release of [Vagrant Cloud][1], however, all these issues are now a thing of the past. [Vagrant Cloud][1] is a hosted service for finding and sharing Vagrant boxes, managing Vagrant Share, and much more.  For a complete introduction, head over to their original [release announcement][5].

We moved the Vagrant configuration back into the separate Nooku Server repository and tagged it [v3.0][6]. We now build the box once after each new release and publish it as [nooku/box][7] on Vagrant Cloud. 

When you clone the Nooku Framework repository and run the `vagrant up` command, it will automatically download the latest build and you'll be up and coding in no time! 

Once you have downloaded the latest version, you'll never have to redownload again. All your new Nooku Framework projects will _just work_ out of the box! 

And best of all: as soon as we release a new version, Vagrant will tell you about it the next time you fire up one of your projects. It doesn’t get any easier than this!

All that’s left for you to do is to [dive in][8] the code headfirst and have fun!


 [1]: https://vagrantcloud.com/
 [2]: https://www.vagrantup.com
 [3]: https://github.com/nooku/nooku-server/releases/tag/v1.0.0
 [4]: https://github.com/nooku/nooku-server/releases/tag/v2.0.0
 [5]: https://www.vagrantup.com/blog/vagrant-1-5-and-vagrant-cloud.html
 [6]: https://github.com/nooku/nooku-server/releases/tag/v3.0.0
 [7]: https://vagrantcloud.com/nooku/box
 [8]: https://github.com/nooku/nooku-framework#installation