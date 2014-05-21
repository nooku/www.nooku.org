---
title: Joomla vs Nooku Programming Economics
author: Johan
layout: post
permalink: /2009/08/joomla-vs-nooku-programming-economics/
dsq_thread_id:
  - 85785039
categories:
  - Framework
tags:
  - development
---
<img style="margin-left: 10px;" src="http://farm3.static.flickr.com/2482/3647835536_0fea0069b2_m.jpg" border="0" alt="" width="240" height="178" align="right" />Since we released the <a title="nooku framework on subversion" href="en/buzz/106-sourceforge.html" target="_blank">Sourceforge Subversion repository</a> for Nooku Framework, we&#8217;ve been getting some great feedback, not in the least from early adopters &#8212; developers who are already using the framework to build better Joomla extensions.

One of them, Danny Buytaert from <a title="freakout joomla development" href="http://www.freakout.be/" target="_blank">Freakout.be</a>, published a <a title="compare nooku framework vs joomla framework" href="http://code.google.com/p/bibliotekoo/wiki/helloworld" target="_blank">comparison between the Joomla Framework and Nooku Framework</a>. If you&#8217;ve build Joomla extensions before, you&#8217;ll know how much repetitive work is involved. As you can see, Nooku reduces that to almost nothing. <a title="hello world tutorial joomla nooku" href="http://code.google.com/p/bibliotekoo/wiki/helloworld" target="_blank">Danny&#8217;s Hello World extension</a> has only a fragment of the line count of the original, Joomla-only version.

<!--more-->

### Creating DRY extensions

Rafael Diaz-Tushman at <a title="dioscouri" href="http://www.dioscouri.com/index.php?option=com_content&view=article&id=678:the-nooku-framework&catid=51:general-thoughts&Itemid=209" target="_blank">Dioscouri</a>, a well-known Joomla extension development company, and long-time Nooku partner, took it one step further. Instead of doing a small Hello World app, they built a complete Affiliate Extension for Joomla &#8212; and they did it twice: once using Joomla, once with Nooku added to the mix!

In a <a title="nooku framework affiliate extension joomla" href="http://www.dioscouri.com/index.php?option=com_content&view=article&id=678:the-nooku-framework&catid=51:general-thoughts&Itemid=209" target="_blank">blog post</a>, Rafael wrote:

> Writing for Nooku Framework is simpler and faster than writing for Joomla. We simultaneously wrote the AMIGOS Affiliate extension for both Joomla and Nooku, and the difference in the amount of code necessary was startling. (&#8230;)

Roger Perren <a title="das erweiterte joomla framework namens nooku framework" href="http://blog.blueforce.ch/2009/08/das-erweiterte-joomla-framework-namens-nooku-framework/" target="_blank">wrote on his blog</a>:

> The structure of the Nooku Framework is much simpler and more flexible than Joomla&#8217;s own framework. Nooku Framework reduces code redundancy with 30 to 50%, compared to Joomla, by applying the DRY-principle (Don&#8217;t Repeat Yourself).  
> *(Translated from German)*

### Mash up Joomla extensions

The Dioscouri blog post also touches on another great feature of Nooku: it makes your code easily reusable, even across different extensions, or across the front- and the backend.

<a href="http://www.dioscouri.com/index.php?option=com_content&view=article&id=678:the-nooku-framework&catid=51:general-thoughts&Itemid=209" target="_blank">Rafael wrote</a>:

> It encourages developers to write their Models and Views such that they can be used by other applications.

Rastin from RMDStudio, in <a title="nooku api vs native joomla api" href="http://blog.rmdstudio.com/2009/08/25/nooku-framework-is-now-publicly-available/" target="_blank">yet another blog post about Nooku</a>, said:

> Surprisingly the Nooku Framework API is also a lot simpler to learn than the Joomla’s native API. You get to access all the classes and objects across extensions using factory classes. That is anywhere, anytime.

This for example makes it possible to mashup different extensions, from different developers, into one superextension that perfectly fits the need of your customer. And as the original developers publish bugfixes, your code keeps working

### Getting started

The best way to get started, is by <a title="nooku framework documentation, api, mailing list, discussion group, chat" href="en/framework/request.html" target="_blank">spending a few minutes filling out a form</a>. You&#8217;ll get access to all relevant resources.

Worried about migrating your existing code to Nooku Framework? There&#8217;s no need: you can simply mix and match the Joomla Framework with Nooku Framework API&#8217;s, and gradually replace parts of your code.

Twitter user &#8216;<a title="nooku economics" href="http://twitter.com/kproductivity/status/3553673640" target="_blank">kproductivity</a>&#8216; (what&#8217;s in a name?) summed it up nicely:

> Nooku, Simply programming economics!