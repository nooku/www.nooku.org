---
title: Nooku Server, Joomla on steroids
author: Johan
layout: post
permalink: /blog/2010/12/nooku-server-joomla-on-steroids/
dsq_thread_id:
  - 184077795
categories:
  - Server
tags:
  - joomla
  - molajo
  - police
---
[<img class="alignright" src="http://farm6.static.flickr.com/5202/5239521140_1b96d214b9_m.jpg" alt="Nooku Server, Joomla on Steroids" width="196" height="240" />][1] Our [partners][2], from the first participants to latest newcomers, each have played a role in the growth of Nooku. Not only have they contributed to build our project; they embody the philosophy of Joomla and Open Source: to choose collaboration over competition, to choose innovation over commerce, and to contribute to the benefit of everyone.

Over the past 3 years the combined efforts of our partners allowed us to build innovative Open Source technology: First [Nooku Content][3], for multilingual management, and later [Nooku Framework][4], a new brain for Joomla. Today, together with the [Belgian Police][5] we are taking a next step.

### The Belgian Police and Joomla

Belgium being the small country it is counts no less then 190 police zones. Each of those 190 police zones has it&#8217;s own website, running different (proprietary) systems. After the release of Joomla 1.5 in 2008 most zones took the plunge and migrated their sites to Joomla 1.5. At the moment 130 zones are using Joomla.

Until recently all of those installations where hosted separately on one dedicated server. To increase the usability, ease of maintenance and continued growth, the Belgian Police asked us to help them to build a multi-site platform. And off course we said yes !

<!--more-->

### Going multi-site with Joomla

Work on this platform started last April. People that attended the Joomladay 2010 in the Netherlands will remember the presentation I gave together with Marc Alen, Adjunct Secretaris, Vaste Commissie of the Local Belgium Police on the 5 year history behind the project. If you missed it and you understand Dutch you can [watch the video here][6].

Two weeks ago I gave a presentation about the progress we made in the past 8 months at the [Joomladay in Thailand][7] and also did a small demo of the multi-site platform in action.

<p style="text-align: center;">
</p>

When we started this project we made one request : We asked the Belgian Police if we could open source the technology. The Belgian Police being big supporters of FOSS loved the idea !

At first we tried to approach the problem by implementing the multi-site through custom extensions. Very early on we figured out that this wasn&#8217;t possible. Changes to the Joomla core code where necessary to be able to make Joomla 1.5 run in a multi-site context. The good news is that we have been able to do this with almost 99% backwards compatibility.

Just this week we did the final tests. The platform is done. Technology is ready and the migration of the 130 sites to a new server is underway. It is time to give back !

### Nooku Server, a multi-site distro of Joomla 1.5

Following in the footsteps of our friends of the [Molajo Project][8] we are happy to announce Nooku Server, a multi-site distribution based on Joomla 1.5. Nooku Server will be 99% compatible with all Joomla 1.5 extensions. We are also including [Nooku Framework][9] to make it easy for developers to get started building Nooku powered extensions.

The name of the Nooku game is called innovation, so we have decided to increase the minimal requirements a bit. Nooku Server will require :

*   PHP v5.2.6+ with MySQLi support
*   MySQL 5.0.4+
*   Mootools 1.2 with compatibility layer

That&#8217;s all right ? Not by far. Together with our community contributors we are working on a new administrator template and a new site template. And finaly we are also adding caching and performance improvements that are geared towards running high traffic sites. With Nooku Server you get Joomla on steroids !

For now, the Nooku Server Space on our [developer portal][10] will only be accessible to [contributors][11]. Once we have an installable package ready we will open the space for everyone. Interested in helping out don&#8217;t hesitate to [send us a mail][12] or post on [our mailing list][13].

We will blog regulary on the progress we are making. So keep a close eye on [twitter][14], [facebook][15] or subscribe to our [RSS feed][16]. Exciting times ahead !

 [1]: http://www.flickr.com/photos/nooku/5239521140/ "Nooku Server, Joomla on Steroids by Nooku, on Flickr"
 [2]: http://www.nooku.org/partners.html
 [3]: http://www.nooku.org/content
 [4]: http://www.nooku.org/framework
 [5]: http://www.nooku.org/partners/belgian-police.html
 [6]: http://www.joomladagen.nl/2010/terugblik/380-video-joomla-bij-de-belgische-politie
 [7]: http://www.joomladay.in.th/en.html
 [8]: http://molajo.org/
 [9]: https://www.nooku.org/framework
 [10]: http://code.nooku.org
 [11]: http://blog.nooku.org/2010/11/nooku-contributor-agreement/
 [12]: http://www.nooku.org/about/contact.html
 [13]: http://groups.google.com/group/nooku-framework
 [14]: http://www.twitter.com/nooku
 [15]: http://www.facebook.com/nooku.org
 [16]: http://feeds.nooku.org/blog