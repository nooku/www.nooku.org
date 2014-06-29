---
title: Meet com_files, Joomla file management 2.0
author: ercan
layout: post
permalink: /blog/2011/08/meet-com_files-joomla-file-management-2-0/
dsq_thread_id:
  - 383902704
categories:
  - Components
  - Tutorial
tags:
  - development
---
The Joomla Media Manager is currently a hermetically sealed black box which has been around since the Mambo days. It neither allows extending it, nor can it be easily re-used by developers. Over the past few weeks we have been giving it some much needed love and re-build it from the ground up. Meet : com_files !

For the diehards, in Joomla this component is called com\_media. We gave it a new name to better reflect its use and to allow you to also install it in Joomla site. In good Nooku tradition com\_files is fully re-usable and extend-able.

[<img src="http://farm6.static.flickr.com/5106/5859545823_0c90031377.jpg" alt="Nooku Server - Files" width="500" height="227" />][1]

If you check out our [Nooku Server demo][2] you will notice that the user interface looks very similar to that of Joomla. Don’t let yourself be fooled by the looks. Under the hood this baby has a completely new and shiny engine.

In this blog I’ll walk you over the key points of the refactor and at the end I’ll show you how you can easily integrate this component in your own solutions.

<!--more-->

### AJAXified for extendibility

Joomla’s com_media is using iframes and server side rendered HTML. This works but doesn’t give a great amount of flexibility and extendibility.

So we put Mootools to good work and AJAXified it. File listings, thumbnail generation (more about this in a bit), deletes, uploads, … are now all done via AJAX.

These changes not only make the code very flexible and extendible they also make the user experience a lot more snappy, did we say a lot lot more!

### RESTful out of the box

Nooku Framework implements a [ROA (Resource Oriented Architecture) of level 2][3]. Every component build on Nooku Framework is auto-magically ROA level 2 and so is com\_files! In fact, com\_files UI is an AJAX client that consumes this REST service.

By exposing a REST API we allow developers to integrate the desktop and the web. For example, you could write a mobile app that would immediately upload the pictures you take with your camera to your site.****

### HTML5 support built in

Thanks to the folks at [http://www.plupload.com][4] we now have a multi file uploader that supports all HTML5 file upload features of your browser of choice (even in mobile). You can select multiple files, rename them as you wish, hit upload and be done.

You (or your customers) still don&#8217;t have a modern browser? Flash is also supported as a fallback for those stuck in 2010. So you still get AJAX multi-uploads. Need to upload 30 images at once, no problem we have it covered.

### Speedy thumbnails

When you have hundreds of images in a folder, com_media loads all of them one by one. Resulting in your CPU fans going crazy and pages loading slow. We solved this by paginating results just like any other component and we also created a thumbnail cache using [Data URI][5]’s.

When you navigate to a folder, a subsequent AJAX request will be issued to fetch all thumbnails on the current page. This means you will get all your thumbnails in one HTTP request which gives a great speed boost. Combined with the view cache that is coming in Nooku Framework Alpha 4 file browsing will be super fast! Did we say, super super fast!  
****

### Re-use and remix

In Joomla the com_media manager is tied to a single folder and the code is not re-usable. As a result a lot of Joomla extensions have their own build in upload and file management code. We like to keep our code DRY !

Our Nooku files component solves all that! It’s not tied to a single folder anymore, instead it implements ‘containers’. Containers can be linked to the local file system, and in future also to cloud file systems (S3, Dropbox, &#8230; )

To add your own custom container all you need to do is:

<pre class="brush: php; toolbar: false;">KFactory::tmp('admin::com.files.controller.container')-&gt;add(array(
'id' =&gt; 'com_mycomponent.myview', /*unique container id*/
'path' =&gt; 'pathtomyfiles' /*folder starting from the site root*/
));</pre>

To create your own instance of com_files and displaying it is as simple as making one HMVC call:

<pre class="brush: php; toolbar: false;">&lt;?= KFactory::tmp('admin::com.files.controller.file')
-&gt;container('com_mycomponent.myview')
-&gt;types(array('file', 'image')) /*optional*/
-&gt;layout('default') /*compact for modal view*/
-&gt;display(); ?&gt;</pre>

The AJAX implementation is fully customizable and exposes numerous JavaScript events for you to hook to customize the workflow. For example to catch folder navigations you can hook into afterNavigate event of the application.

<pre class="brush: js; toolbar: false;">&lt;script&gt;
window.addEvent('domready', function() {
/* Files.app is the current running instance
* It holds the references to all components
*/
Files.app.addEvent('afterNavigate', function(path) {
alert('You just navigated to '+path);
});
})</pre>

These are just a few simple code examples to show you the immense power of this component and how to leverage it. Time to dive in yourself!

### Show me the code

The com_files component can be found in our[ Nooku Components space][6]. Give it a spin and let us know how you like it!

Happy coding !

 [1]: http://www.flickr.com/photos/nooku/5859545823/ "Nooku Server - Files by Nooku, on Flickr"
 [2]: http://demo.nooku.org/administrator/index.php?option=com_files&view=files#/
 [3]: http://martinfowler.com/articles/richardsonMaturityModel.html#level2
 [4]: http://www.plupload.com/
 [5]: http://en.wikipedia.org/wiki/Data_URI_scheme
 [6]: https://nooku.assembla.com/spaces/nooku-components