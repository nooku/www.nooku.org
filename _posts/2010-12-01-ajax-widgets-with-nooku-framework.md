---
title: AJAX Widgets with Nooku Framework
author: Stian
layout: post
permalink: /2010/12/ajax-widgets-with-nooku-framework/
dsq_thread_id:
  - 182430666
categories:
  - Framework
  - Tutorial
tags:
  - code snippet
  - harbour
---
We have been claiming for quite a while now that Nooku Framework helps you to write less code. A lot less! So time to put our money where our mouth is and show you a little example.

[<img src="http://farm6.static.flickr.com/5010/5221979616_c96473e5fa.jpg" alt="Part of the Harbour Dashboard" width="500" height="286" />][1]

Today&#8217;s topic: Building an AJAX widget with just a few lines of code, actually just one line. We will be using a new simple technique called overlays. You don’t believe me? Watch and learn!  
<!--more-->

### What are Overlays?

Before we dive into the one line of code, let me explain a little bit about overlays. The term “Overlay” comes from the [Mozilla XUL][2]. In Nooku Framework we have implemented our own inspired version that allows you to turn any view into a widget. Yes, you are reading that right: ANY view, not such your own, any view of any component can be &#8216;widgetised&#8217;.

To create an overlay in Nooku Framework you only need two things:

*   the URL of the view your are &#8216;widgetising&#8217;;
*   the ID of the HTML element to overlay.

It’s really simple, let&#8217;s look at a little example using our beloved [Harbour][3] component.

### Overlays in the Harbour dashboard

Harbour’s dashboard has two tabs in the right sidebar to show boats and ports that are in draft (not all information has been added yet). Currently both are loaded using a PHP call. We’re going to &#8216;widgetise&#8217; this by using an overlay.

Here’s the PHP code rendering the unfinished boats tab contents:

<pre name="code" class="php:nocontrols">&lt;?= KFactory::get('admin::com.harbour.controller.boats')
     -&gt;sort('modified_on')
     -&gt;draft(1)
     -&gt;limit(50)
     -&gt;layout('widget')
     -&gt;browse() ?&gt;</pre>

And here’s what it looks like as an overlay:

<pre name="code" class="php:nocontrols">&lt;?= @overlay(array('uri' =&gt; @route('option=com_harbour&view=ports&layout=widget&draft=1&limit=5#draft-ports'))) ?&gt;</pre>

That&#8217;s it! How does work?

*   The o*ption=com_harbour&view=ports&layout=widget* defines the component and view we are rendering, in this case we are rendering a list of ports.
*   The *draft=1&limit=5* defines the state of the view. In this case we are getting all the port drafts and we only retrieve the first 5
*   The *#draft-ports* fragment defines the ID of the HTML element that we’re fetching from the ajax request. Nooku Framework does this behind the scenes for you. This allows you to &#8216;widgetise&#8217; only a part of the page your are fetching.

Now you have learned how “Port drafts” is transformed into an ajax widget, the code is so tiny you already know how to do the same thing to “Boat drafts”.

That’s it, simple right? You see, we are serious when we say Nooku Framework really makes you write less code. Why are you still reading? Go play with it already!

 [1]: http://www.flickr.com/photos/nooku/5221979616/ "Part of the Harbour Dashboard by Nooku, on Flickr"
 [2]: https://developer.mozilla.org/en/xul_overlays
 [3]: http://www.assembla.com/wiki/show/nooku-examples/com_harbour