---
title: Creating a diet for Nooku Server
author: Johan
layout: post
permalink: /blog/2011/01/creating-a-diet-for-nooku-server/
dsq_thread_id:
  - 206261720
categories:
  - Server
tags:
  - roadmap
  - survey
---
[<img class="alignright" style="margin-left: 10px; margin-right: 10px;" src="http://farm6.static.flickr.com/5247/5342270399_f6c6f84d3e_m.jpg" alt="Nooku Server Diet" width="160" height="240" />][1]

A little over a month ago we [announced our plans for Nooku Server][2], a multi-site Joomla 1.5 distribution. Before starting to integrate new features in Nooku Server we are giving the Joomla core a thorough code, features and performance review.

**Joomla 1.5 core feature survey**. To get a better idea of the features used, or more importantly not used in Joomla 1.5, we did a [little survey][3] with very interesting results. Almost 250 people filled it out, big thanks to all of you who did!

### Results

#### 1. Which Joomla core features do you use ?

You can find the result [here][4]. If we would apply the [80/20 rule ][5] the only feature that you really need and use is ‘**Content**’. All the rest of the core features is used less then 80%. If we turn the 80/20 rule around and we check which features are used at least by 20% of you, we get the following list:

1.  82% &#8211; Content
2.  68% &#8211; Search
3.  46% &#8211; Contacts
4.  34% &#8211; TinyMCE
5.  32% &#8211; PDF rendering
6.  29% &#8211; XML-RPC support
7.  28% &#8211; Newsfeeds
8.  22% &#8211; Banners

Still an interesting list. You are not using LDAP, Gmail or the XStandard editor at all. You also don’t use any of the core site templates, nor do you require build in help.

#### 2. What is the number one feature you are missing in the Joomla core ?

You can find the result [here][6]. If we look at the features you are missing most we get the following top 3:

1.  20% &#8211; Multi-site
2.  18% &#8211; Improved permissions
3.  13% &#8211; Multi-lingual support

The most interesting is that improved permissions, which is the major new feature for Joomla 1.6, is not the most needed feature. Instead most of you are looking for multi-site support.

Based on the results of both questions we can conclude that what you really need is not a CMS but instead you are looking for a **flexible, customisable, multi-site and multi-lingual web application platform**. And that’s exactly what we are going to build!

<!--more-->

### Nooku Server’s diet

Based on the survey results we have defined a nice diet for Nooku Server which has the following key ingredients:

1. **Core extensions**: All the components, plugins and templates that didn’t made it into our list will be removed. The only one we are rescuing, for now, is weblinks. In Joomla 1.5 we used weblinks as an example component and for Nooku Server it will serve the same roll. It will be the first core component that gets refactored to use [Nooku Framework][7] instead of Joomla Framework.

2. **Uninstall any component**: We are going to make it easy to un-install any component, even the Content component. So if you don’t need it, you can just remove it.

3. **REST over XML-RPC**: PDF rendering and XML-RPC support did made it into our list, both have been removed in Joomla 1.6 already and we are going to do the same. Nooku Framework is using a RESTful architecture. REST will be the RPC of choice over XML-RPC.

4. **Legacy and system requirements**: Legacy support for Joomla 1.0 and PHP4 will be removed, in favor of native support for Joomla 1.5 and PHP5.2+.

5. **Mootools 1.2**: Mootools will be upgrade to 1.2 and we are also including the compatibility layer to maintain compatibility with Joomla 1.5.

6. **Security**: All assets (css,js,images) will be moved to the media folder. This will allow us to run Nooku Server below http root which is a big security benefit and a best practice.

7. **Libraries**: Legacy libraries (patTemplate, DOMit, phpinputfilter, geshi, feedcreator, … ) will be removed.

8. **Performance**: We are going to make some smaller performance improvements. For example, hit support in Content and Weblinks will be removed to allow for [MySQL cache][8] to be used on those database tables.

9. **Caching**: Caching was never really implemented properly in Joomla 1.5, in Nooku Server we are going to port improvements done in Joomla 1.6 to improve caching support and overall performance.

10. **Administrator template**: We are going to give the administrator template some love to improve usability and workflow.

That’s it, time to get coding! Interested in helping out? Don’t hesitate to [send us a mail][9] or post on the Nooku Framework [mailing list][10].

 [1]: http://www.flickr.com/photos/nooku/5342270399/ "Nooku Server Diet by Nooku, on Flickr"
 [2]: http://blog.nooku.org/2010/12/nooku-server-joomla-on-steroids/
 [3]: http://blog.nooku.org/2010/12/putting-nooku-server-on-a-diet/
 [4]: https://joomlatools.wufoo.com/reports/nooku-server-features-to-remove/
 [5]: http://en.wikipedia.org/wiki/Pareto_principle
 [6]: https://joomlatools.wufoo.com/reports/nooku-server-features-to-add/
 [7]: http://www.nooku.org/framework.html
 [8]: http://blog.nooku.org/2010/12/mysql-query-cache/
 [9]: http://www.nooku.org/about/contact.html
 [10]: http://groups.google.com/group/nooku-framework