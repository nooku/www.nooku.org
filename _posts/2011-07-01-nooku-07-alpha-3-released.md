---
title: Nooku 0.7 Alpha 3 released
author: Johan
layout: post
permalink: /blog/2011/07/nooku-07-alpha-3-released/
dsq_thread_id:
  - 347053309
categories:
  - Project
tags:
  - release
---
It&#8217;s has been a bit quiet on our Nooku blog in the past weeks. We have been working very hard to get Nooku 0.7 Alpha 3 ready for release. Today I&#8217;m both proud and excited to let you know that **Alpha 3** has been officially tagged in all our repositories on the [Nooku Developer Portal][1].

### Celebrating 2000 commits

This third alpha is our biggest release so far. In only **12 weeks** **2000 commits** where made by not less then **13 developers** from all over the world.

For Nooku Server specifically we made more then 1200 commits, surpassing the 2000 commit mark. That&#8217;s **3x more** then the previous two alpha&#8217;s who had a total of 400 commits each. Divided by 12 weeks that&#8217;s an average of **100 commits/week, or 15 commits a day**! Simply amazing!  
<!--more-->

### Overview of the changes

The progress made in this release is mind blowing. We closed more then **40 tickets** spread over the different spaces. It&#8217;s impossible to fit all the changes in one blog post. I&#8217;ll give you some of my personal highlights:

#### 1. Code refactoring

We added a **new ajax driven file manager**, called com_files. Build from the ground-up and fully re-usable. Use it to add file management to your own Nooku powered extensions with just a few lines of code! On top of that the file manager exposes a REST API. Need to build your own Amazon S3, Rackspace Files, Dropbox? No problem we got it covered.

#### 2. User interface

We gave the administrator template a complete overhaul. Implemented [CSS3 Flexbox][2], added smart toolbars, client side form validation, improved pagination and inline table scrolling. And that&#8217;s not all. Most components now have a sidebar to easily select categories, groups, &#8230; and a filter bar to easily filter the items in the table. You don&#8217;t have to believe my words, [check it yourself][3].

#### 3. REST

Nooku Framework now implements a [ROA (Resource Oriented Architecture) of level 2][4]. Every component build on Nooku Framework is auto-magically ROA level 2. Extra lines of code needed : zero, zip, none! It just works. We improved the authentication and implemented proper 401 status code handling. You want to build a web service? Check!

#### 4. Performance

We added language, template and database schema caching and worked on an intelligent (still experimental) component output cache behavior. Initial tests show a 300% performance increase if we turn it on.

#### 5. Compatibility

We made compatibility improvements for Mootools 1.3 and for Joomla 1.6 and 1.7. Components build on Nooku Framework Alpha 3 will work with Joomla versions 1.5 &#8211; 1.7. Neat huh!

Full list of changes can be found here:

*   [ Nooku Server Alpha 3 milestone][5]
*   [Nooku Framework Alpha 3 milestone][6]
*   [Nooku Components Alpha 3 milestone][7]

### What&#8217;s happening next?

We need at least one more alpha to completely refactor all the components in Nooku Server to Nooku Framework. There are also a number of outstanding issues (query handling, factory performance, &#8230;) that need to be dealt within Nooku Framework.

Our contributors did an amazing job for alpha 3 and we want to keep this up for alpha 4. I have already <a rel="nofollow" href="http://www.google.com/url?sa=D&q=https://nooku.assembla.com/spaces/nooku-server/tickets">created a list of tickets</a> for alpha 4 that we definitely want to tackle.

If you want to contribute you can take one of the tickets that is still open or you can collaborate on one of the tickets that is in progress. If you have an idea on something not in the list get in touch! We love crazy ideas!

Happy coding!

 [1]: http://code.nooku.org
 [2]: http://www.html5rocks.com/en/tutorials/flexbox/quick/
 [3]: http://www.flickr.com/photos/nooku/sets/72157627021171180/
 [4]: http://martinfowler.com/articles/richardsonMaturityModel.html#level2
 [5]: https://nooku.assembla.com/spaces/nooku-server/milestones/331383-0-7-alpha-3
 [6]: https://nooku.assembla.com/spaces/nooku-framework/milestones/377677-0-7-alpha-3
 [7]: https://nooku.assembla.com/spaces/nooku-components/milestones/377685-0-7-alpha-3