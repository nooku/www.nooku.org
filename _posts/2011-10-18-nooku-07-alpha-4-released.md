---
title: Nooku 0.7 Alpha 4 released
author: Johan
layout: post
permalink: /2011/10/nooku-07-alpha-4-released/
dsq_thread_id:
  - 446358535
categories:
  - Project
tags:
  - release
---
It has been a busy summer in the Nooku Project ! We have been working very hard on to get Nooku 0.7 Alpha 4 ready for release. Sticking to our 12 week release cycle I’m both proud and excited to announce that Alpha 4 has been officially tagged in all our repositories on the [Nooku Developer Portal][1].

<h3 dir="ltr">
  Nooku community rocking !
</h3>

This fourth alpha follows in the footsteps of alpha 3 with more then **2000 commits** made by not less then **[10 rockstar developers][2]** from all over the world. Thanks everyone!

For Nooku Server specifically we made more then 1000 commits, surpassing the** 3000 commit mark**, while Nooku Framework surpassed the **4000 commit mark**. Divided by 12 weeks that’s an average of** 165 commits/week, or 25 commits a day**! Simply amazing!

<h3 dir="ltr">
  Overview of the changes
</h3>

The progress made in this release is mind blowing. This release packs a wealth of changes to make your live easier and coding more fun. We closed more then** 75 tickets** spread over the different spaces. That’s almost **2x more then Alpha 3**. It’s impossible to fit all the changes in one blog post. I’ll give you some of my personal highlights:

<!--more-->

**1. Code refactoring**

We added a new unified settings manager, refactored the installer and extension components, added a new debug and groups components. Little sidenote : the groups component is a first step towards implementing a new permission system.

All these components expose a complete re-usable API. Want to get a list of all the enabled plugins? No problem :

<pre class="brush: php; toolbar: false;">$this-&gt;getService(‘com://admin/extensions.model.plugins’)
        -&gt;enabled(1)
        -&gt;getList();</pre>

does that for you!

On top of that each component also implements a complete REST interface. Try : <a><em>http://site.com/administrator/extensions/plugins.json?enabled=1</em></a> to get a list of all enabled plugins. An instant webservice right at your fingertips!

<h4 dir="ltr">
  2. REST
</h4>

As you can see from the above example we implemented a router for the administrator. With humanly readable URL’s and htaccess support turned on you now have beautifully and RESTful URL’s also in the backend. Personal note : waited 4 years for this!

We are taking the first steps towards a [ROA (Resource Oriented Architecture) of level 3][3]. The JSON output has been improved, adding paging information and we introduced initial discoverability with basic [URI templates][4].

<h4 dir="ltr">
  3. Performance
</h4>

Performance matters! Alpha 4 comes with more caching improvements. We implemented a very fast caching solution for KServiceIdentifier and KLoader through [APC.][5] Initial tests show a **30% performance improvement** when using **APC caching** in Nooku Server. If you are serious about performance install APC and turn it on!

We also added a new **mod_expire** plugin, this little nifty plugin appends a timestamp based on the modified date to media url’s (css, js, images, …). When mod_expires is installed in apache  this speeds up page loading, a lot! Example, on a request to /administrator/articles we go from 22 to 1 requests and page render time goes from 1.4sec to 700msec, or **2x times faster**!

<h4 dir="ltr">
  4. Javascript
</h4>

Nooku Framework Alpha 4 comes packed with a bunch of javascript goodies. Too many to list, but here are my two favorites :

- **Autocomplete behavior.** Create autocomplete input fields with just one line of code. And the cool part, it works with every Nooku component out of the box!

- **Interactive overlays**. Overlays are now interactive meaning that if you trigger a post or get request in an overlay only the overlay will be re-drawn. Widgets here we come!

Oh, almost forgot. We also added **mod_widget**. This little module implements interactive overlays and allows you to turn any view(url) into a widget. One module to rule them all. Yes please!

<h4 dir="ltr">
  5. Hidden secrets
</h4>

It’s the little things that have the biggest impact. Nooku Framework Alpha 4 packs two little gems that could just do that. The ‘[Dynamic module injector][6]’ and the ‘Transparent Module Chrome’.

With the transparent module chrome you can programmatically render modules and tell them what module chrome to use. Example :

<pre class="brush: php; toolbar: false;">&lt;?= @service('mod://admin/foo.html’)-&gt;styles(array(‘rounded’, ‘blue’’)-&gt;display(); ?&gt;</pre>

This will render the foo module using the rounded and blue styles. Neat huh !

Full list of changes can be found here:

*   [Nooku Server Alpha 4 milestone][7][][8]
*   [Nooku Framework Alpha 4 milestone][9][][10]
*   [Nooku Components Alpha 4 milestone][11]

<h3 dir="ltr">
  What’s happening next?
</h3>

The good news : we  are almost there ! Bad news : we need at least one more alpha to get there. In Nooku Server only the menu manager component still needs refactoring, while in Nooku Framework there are a few improvements (database, parameter/form, cli, rest, validation, … ) that are still on our wishlist.

Our contributors did an amazing job for alpha 4 and we want to keep this up for alpha 5. I have already [created a list of tickets][12] for alpha 5 that we definitely want to tackle.

If you want to contribute you can take one of the tickets that is still open or you can collaborate on one of the tickets that is in progress. If you have an idea on something not in the list get in touch! We love crazy ideas!

Finally I want to thank everyone who has contributed in any way to make this alpha happen. It&#8217;s a real pleasure to be able to work with so many very talented people!

Happy coding!

 [1]: http://code.nooku.org/
 [2]: http://www.ohloh.net/p/nooku/contributors
 [3]: http://martinfowler.com/articles/richardsonMaturityModel.html#level3
 [4]: http://tools.ietf.org/html/draft-gregorio-uritemplate-07
 [5]: http://php.net/manual/en/book.apc.php
 [6]: http://blog.nooku.org/2011/08/say-hello-to-the-dynamic-module-injector/
 [7]: https://nooku.assembla.com/spaces/nooku-server/milestones/418984-0-7-alpha-4
 [8]: https://nooku.assembla.com/spaces/nooku-server/milestones/331383-0-7-alpha-3
 [9]: https://nooku.assembla.com/spaces/nooku-framework/milestones/418982-0-7-alpha-4
 [10]: https://nooku.assembla.com/spaces/nooku-framework/milestones/377677-0-7-alpha-3
 [11]: https://nooku.assembla.com/spaces/nooku-components/milestones/418978-0-7-alpha-4
 [12]: https://nooku.assembla.com/spaces/nooku-server/tickets