---
title: The magic of file uploads with com_files
author: ercan
layout: post
permalink: /2011/10/the-magic-of-file-uploads-with-com_files/
dsq_thread_id:
  - 452293371
categories:
  - Components
  - Tutorial
tags:
  - development
---
In my last blog post, I wrote about the [awesome new file manager][1] that made its way into Nooku Server Alpha 3. In this blog post we are going to dive a little deeper into how to re-use com_files in your own components. Meet my new friend : [com_uploads][2]!

This is a proof of concept component that demonstrates two distinct features:

1. A custom file upload controller that handles file uploads  
2. A full featured interface for managing files in your special container

[<img src="http://farm7.static.flickr.com/6224/6278348004_06cd5c7d30.jpg" alt="Nooku Server - Files" width="500" height="402" />][3]  
<!--more-->

<h3 dir="ltr">
  Containers
</h3>

The files component is not tied to a single folder anymore, instead it implements ‘containers’. Containers are like root folders and they contain parameters and access rules. This gives you the ability to use the component with different folders from completely unrelated paths.

With this abstraction, it will also be possible in the future to create &#8220;container types&#8221; which can gather their data from different cloud files systems (S3, [Dropbox][4], Flickr, …)

<h3 dir="ltr">
  Setting up
</h3>

To start using com_files in your component all you need to do is create your own container. In the [install file][5] you see an example of how to create your container programmatically. The slug of the container acts as a unique identifier for your container that you will later need to get to your file manager instance. That slug will be used in HMVC calls. Choose it wisely!

With our container ready, it is time to explore our first view. If you go to the Manage tab (which is the default layout of manage view) you will see our file manager ready to rock! That’s it.

<h3 dir="ltr">
  Event hooks
</h3>

When you examine the code of the manage view, you will notice that an event named “*onAfterNavigate*” is attached to log folder navigations . This is just one example of numerous events we have in the code base. We have more than a few dozen of them. For example, you can use *onAfterSetLayout* to detect layout switches. Or you can use *onBeforeDeleteNode* to act on deleted nodes.

Those events can be used to customize every aspect of the user experience from uploads to folder navigation. You can find the rest of them by searching for &#8220;*fireEvent*&#8221; in the com_files JavaScript classes.

<h3 dir="ltr">
  Uploading files
</h3>

The second &#8220;Upload&#8221; tab is rather plain. It is just an input box to show you how to handle file uploads in your code by yourself. You can see how that is done in the [upload controller][6].

If you examine the code, you will see that we pass the raw file path we get from PHP and let a simple HMVC call handle the rest.

This little controller can be used to add upload forms to already existing components, with just one line of code. For example, you can store resumes in a candidate form or store attachments in a forum without ever worrying about validation or file location.

You can see the full codebase on [Github][2]. Give it a spin!

 [1]: http://blog.nooku.org/2011/08/meet-com_files-joomla-file-management-2-0/
 [2]: https://github.com/ercanozkaya/com_uploads
 [3]: http://www.flickr.com/photos/nooku/6278348004/ "Nooku Server - Files by Nooku, on Flickr"
 [4]: http://www.dropbox.com/
 [5]: about:blank
 [6]: https://github.com/ercanozkaya/com_uploads/blob/master/administrator/components/com_uploads/controllers/upload.php