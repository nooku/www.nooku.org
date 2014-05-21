---
title: Split Views using Nooku Framework
author: Stian
layout: post
permalink: /2010/12/split-views-using-nooku-framework/
dsq_thread_id:
  - 198831172
categories:
  - Framework
  - Tutorial
tags:
  - code snippet
  - harbour
---
<div class="wp-caption alignnone" style="width: 490px">
  <a title="Harbour with SplitView by Nooku, on Flickr" href="http://www.flickr.com/photos/nooku/5285180568/"><img src="http://farm6.static.flickr.com/5124/5285180568_5c74163287.jpg" alt="Harbour with SplitView" width="480" /></a><p class="wp-caption-text">
    Split View showing the boats list in Harbour, our example component
  </p>
</div>

A month ago Martin asked a very interesting [question on Twitter][1].

> Possible to load a detail view & it&#8217;s related list view besides each other in the tab of a third view with the &#8220;H&#8221; of HMVC?

Short answer, [yes offcourse !][2] Luckily our blog doesn’t have a 140 char limit so I can also show you how. In this tutorial I will explain:

1.  How to create a Ajaxed Split View.
2.  How to render that Split View from a module.

We will use the overlays [we learned about in my previous blog post][3], and apply this to create the Split View.  
<!--more-->

### What’s a Split View?

Split Views are a common [UI pattern][4] that involves subviews that relate to one another. Usually that means a list to the left that loads data into the right hand view when you select an item.

The code used in this tutorial is from the Split View implementation in [Harbour][5], describing how I did it and how you can accomplish it in your own extension.

### Step 1 &#8211; HTML and CSS

There are many different Split View layouts, the kind we’ll be making is usually called “split” as it’s a 25/75 layout with a list to the left and details to the right.

#### Boats view

So we’ll create a new layout in our plural view here:  
[/com_harbour/views/boats/tmpl/split.php][6]

In this layout we essentially need to load our assets, create an unordered list of links and have a `<div>` container as a placeholder for the details view.

<pre name="code" class="php:nocontrols">&lt;ul class="mod-harbour-boats"&gt;
	&lt;? foreach ($boats as $boat) : ?&gt;
	&lt;li&gt;
		&lt;a title="&lt;?= @escape($boat-&gt;title) ?&gt;" href="&lt;?= @route('view=boat&layout=split&slug='.@escape($boat-&gt;slug)); ?&gt;#boat-overlay"&gt;
			&lt;img alt="" src="media://com_harbour/images/flags/&lt;?= @escape($boat-&gt;flag);?&gt;" /&gt;
			&lt;?= @escape($boat-&gt;title) ?&gt;
		&lt;/a&gt;
	&lt;/li&gt;
	&lt;? endforeach; ?&gt;
&lt;/ul&gt;
&lt;div id="boat-overlay"&gt;
	&lt;?= KFactory::tmp('site::com.harbour.controller.boat')-&gt;read() ?&gt;
&lt;/div&gt;</pre>

#### Boat view, details of a boat

Next we need the boat view, which will contain the details of a boat and will be loaded when you click on a link in the unordered list of links we just created. [/com_harbour/views/boat/tmpl/split.php][7]

<pre name="code" class="php:nocontrols">&lt;div id="boat-overlay"&gt;
	&lt;?= @template('simple') ?&gt;
&lt;/div&gt;</pre>

As you can see it’s just a div wrap around the **“simple”** layout, with the id **“boat-overlay”**.

It’s important to note that each link got a **#boat-overlay** hash. KOverlay use that to know what part of the html in the Ajax response that you want in your details view. For more details on how this works see [my previous post][3]. 

That’s why our second layout got a div wrapper with a matching id.

#### Let&#8217;s make it look good

To make it look more like a real Split View, create a CSS file here:  
[/media/com_harbour/css/split.css][8]

<pre name="code" class="css:nocontrols">.mod-harbour-boats, #boat-overlay {
	float: left;
	height: 400px;
	margin: 0;
}
.mod-harbour-boats {
	width: 25%;
}
#boat-overlay {
	width: 75%;
	overflow: hidden;
}
#boat-overlay #boat {
	float: none;
}
.mod-harbour-boats {
	padding: 0;
	overflow-x: hidden;
}
.mod-harbour-boats li {
	background: none;
	display: block;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.mod-harbour-boats li a {
	display: block;
	height: 32px;
	font-size: 12px;
	font-weight: bold;
	line-height: 32px;
	text-indent: 15px;
}
</pre>

### Step 2 &#8211; KOverlay and a little bit of MooTools

Start off by creating the following js file:  
[ /media/com_harbour/js/split.js][9]

<pre name="code" class="js:nocontrols">$$('.mod-harbour-boats').each(function(list){
	list.getElements('a').addEvent('click', function(event){
		new Event(event).stop();

		list.getElements('li.active').removeClass('active');
		this.getParent().addClass('active');

		var overlay = $('boat-overlay');
		//KOverlay reads the href value when making the request
		overlay.setProperty('href', this.getProperty('href'));
		//Instantiate KOverlay with evalScripts false to prevent duplicated events
		new KOverlay(overlay, "{evalScripts: false}");
	});
});</pre>

The javascript is super simple. We get the `<div id=”boat-overlay”>` from our first layout, since this is were we want the ajax to be outputted. Then we give the overlay the same href value as the link we just clicked.

<div id="”boat-overlay”">
  <p>
    And finally we initialize KOverlay, passing it our overlay div and letting KOverlay do all the work. That’s a wrap! At this point we got a fully working Split View powered by ajax.
  </p>
  
  <h3>
    Step 3 &#8211; Reusing the Split View elsewhere
  </h3>
  
  <p>
    How do I render this from another view or from a module? Thanks to Nooku strict naming conventions and out of the box HMVC, we can guess our way to it easily.
  </p>
  
  <p>
    We know that the view is <strong>“boats”</strong> and the layout is <strong>“split”</strong>. The controller action that’s called when you go to <strong>&view=boats</strong> is called “<strong>browse”</strong> since you’re browsing a list of items.
  </p>
  
  <p>
    So by that we can assume that we only have to use the factory to get the <strong>“boat”</strong> controller, override its default layout to <strong>“split”</strong> and execute <strong>“browse”</strong>.
  </p>
  
  <p>
    All that is done with just a few words:
  </p>
  
  <pre name="code" class="php:nocontrols">echo KFactory::tmp('site::com.harbour.controller.boat')
-&gt;layout('split')
-&gt;browse();</pre>
  
  <p>
    You can see it in use in the current mod_harbour module in the Harbour trunk:<br /> <a href="http://www.assembla.com/code/nooku-examples/subversion/nodes/trunk/harbour/code/site/modules/mod_harbour">/trunk/harbour/code/site/modules/mod_harbour</a>
  </p>
  
  <p>
    If you’ve heard about HMVC before but still not quite sure what it is, then I can tell you that what you’re looking at is one practical example of how HMVC works.<br /> Not only does it help reduce the amount of code, but more importantly it makes all your code predictable for yourself as much as others.
  </p>
  
  <h3>
    Conclusion
  </h3>
  
  <p>
    Split Views is just one example on how strict conventions and design patterns really helps you focus on what matters the most when creating great software that people enjoy using.
  </p>
  
  <p>
    Now, go have fun coding in the Disneyland of code already!
  </p>
</div>

 [1]: http://twitter.com/#!/mblodau/status/6990026000826368
 [2]: http://twitter.com/#!/nooku/status/7011271765397504
 [3]: http://blog.nooku.org/2010/12/ajax-widgets-with-nooku-framework/
 [4]: http://developer.apple.com/library/safari/documentation/UserExperience/Conceptual/MobileHIG/UIElementGuidelines/UIElementGuidelines.html#//apple_ref/doc/uid/TP40006556-CH13-SW51
 [5]: http://www.assembla.com/wiki/show/nooku-examples/com_harbour
 [6]: https://nooku.assembla.com/code/nooku-examples/subversion/nodes/trunk/harbour/code/site/components/com_harbour/views/boats/tmpl/split.php
 [7]: https://nooku.assembla.com/code/nooku-examples/subversion/nodes/trunk/harbour/code/site/components/com_harbour/views/boat/tmpl/split.php
 [8]: https://nooku.assembla.com/code/nooku-examples/subversion/nodes/trunk/harbour/code/media/com_harbour/css/split.css
 [9]: https://nooku.assembla.com/code/nooku-examples/subversion/nodes/trunk/harbour/code/media/com_harbour/js/split.js