---
title: Belgian Police Web Platform uses Nooku
author: Tom
layout: post
image: /images/blog/2014/banner-leuven.jpg
---

If you have been following our blog or attended one of our [Nooku Jams](http://www.nooku.org/events/) in the past years you probably already heard us talking about the "Belgian Police Web Platform".

Nooku is being [used by the Belgian Police](http://www.openpolice.be) to create an **open government internet platform**. The platform is entirely built using an [open source software stack](https://github.com/belgianpolice/internet-platform#built-on-open-source-software) and makes intensive use of Nooku.

<!--more-->

<script async class="speakerdeck-embed" data-id="4a919470ee5c0131f5bc2ac9976b5d88" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

## Brief history

Belgium being the small country it is counts no less then 194 police zones, each of those have their own website. After the release of Joomla 1.5 in 2008 most zones took the plunge and migrated their site to Joomla 1.5.

In 2010 the Belgian Police asked us, [Timble](http://www.timble.net), to help them build a multi-site platform to increase usability, ease of maintenance and continued growth. This is [how Nooku Server was born](http://www.nooku.org/blog/2010/12/nooku-server-joomla-on-steroids/) at the end of 2010.

The first version of the platform was built using Joomla 1.5 and aimed to create a [leaner](http://www.nooku.org/blog/2011/01/creating-a-diet-for-nooku-server/) and [meaner](http://www.nooku.org/blog/2011/01/nooku-server-loses-40-weight/) multi-site and multi-lingual distro of [Joomla](http://www.joomla.org/). Compatibility with Joomla was dropped soon after Joomla 1.5 reached end of life in 2012.

In 2013 Nooku Server was renamed to [Nooku Platform](http://www.nooku.org/platform). At the moment Nooku Platform is at version 0.9 and work is ongoing to remove the last bits of Joomla legacy code.

Just over 10 months ago the [first website](http://www.timble.net/blog/2013/09/06/belgian-police-internet-platform.html) on the newly developed, Nooku powered, platform was released. Today, 12 Police zones are running the new platform, and 40+ are in the pipeline to be added in the months to come.

## No core features

The biggest difference between Joomla and Nooku Platform is that Nooku Platform doesn’t have any core content editing functionality. Instead functionality is customly build using **reusable components**.

This is possible because Nooku makes use an [HMVC architecture](http://guides.nooku.org/request-response/HMVC.html) which allows multiple components to easily extend each other and work together.

In case of the Belgian Police, the solution we are building for them only contains functionality they explicitly require. We do not store the content in one centralised ‘content’ component. Instead every content type (news, questions, traffic, about us, contact, ...) is implemented as a separate component which exposes a custom tailored interface and workflow.

## Open Police

We strongly believe that an **open development model** is the only way to foster badly-needed government standards, remove the fear of proprietary lock-in for government agencies, and create a large ecosystem that spans the government as a whole.

The Belgian Police Web Platform is a great example of how governments can innovate using open source and open standards.

Wanna know more? Check  [www.openpolice.be](http://www.openpolice.be), a product website about developing and iterating the Belgian Police Web Platform.

Subscribe to the [RSS feed](http://www.openpolice.be/blog.xml) or [newsletter](http://campaign.lokalepolitie.be/h/r/84411A2D1434384D) if you wanna stay informed.