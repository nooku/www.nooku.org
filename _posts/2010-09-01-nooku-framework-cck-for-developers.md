---
title: Nooku Framework a CCK for developers
author: Johan
layout: post
permalink: /2010/09/nooku-framework-cck-for-developers/
dsq_thread_id:
  - 136003346
categories:
  - Framework
tags:
  - cck
  - development
---
A year ago Steve Burge from [Alledia][1] wrote a blog post titled : [Joomla Goes CCKrazy][2] taking a closer look at the CCK explosion in the Joomla ecosystem. In his post Steve defines a CCK as :

*   any extension which allows to move beyond the text and title options provided by Joomla&#8217;s com_content, and choose your own fields and options.
*   any extension which also moved beyond the section/category hierarchy of Joomla 1.5 and 1.5.

Today the Joomla [extensions site][3] counts not less then [10 GPL licensed CCK solutions][4]. All of which add advanced content management capabilities to Joomla. In a sense, each of the CCK solutions are mini CMS systems wrapped inside a Joomla extension.

Are CCK&#8217;s the answer to innovating Joomla ? I don&#8217;t believe so. One of the reasons I choose Mambo for my first web project back in the days was because it was easy to use and easy to extend. As a user I could set it up in 5 min, just running through the installer, and as a developer I could extend it in 5 min, just looking at the code.

<!--more-->

The challenge when building a CCK&#8217;s is to find a way expose the complex business logic in a simple and straightforward manner to the content editor and site administrator. Because CCK&#8217;s are trying to cut the developer from the equation they need to expose a whole range of settings which could otherwise be implemented through code. More settings means more documentation, more code and a higher risk for bugs. Not an ideal scenario.

Let&#8217;s not try to[ make our users think][5]. Instead let&#8217;s try to make them accomplish their intended tasks as easily and directly as possible. After all wasn&#8217;t that the original vision behind Mambo&#8217;s : [Power in Simplicity][6] ?

If we want the same simplicity for Joomla we need to go back to focus our user interfaces solely on helping content editors get the job done. No configuration settings, no parameters, …  no setup. No complexity.

How ? By creating a more powerful framework that allows developers to build re-usable extensions for Joomla that can be easily combined together to solve many different business workflows. And by letting developers to what they do best : develop.

For example, most custom Joomla projects we have worked on are essentially com_content clones with some extra fields and a project-specific workflow. That, combined with, taxonomy, versioning, comments and permissions gives you most of the tools you need to build complex solutions quickly. You want a real estate catalog? Check. How about a magazine management system with organized issues and categories and tags? Check. Maybe a business directory. Trivial. An on-line help system? No problem. The list could go on.

Going back to Steve his definition :

> Nooku Framework is an extension for Joomla that allows developers to move beyond the text and title options of com_content and content hierarchy of sections/categories. It handles most of the work for you and provides you with a number of[ re-usable components][7] that you can plug right in. You&#8217;ll need only a fraction of the amount of code to glue it all together allowing you to focus on what really matters: your business logic and user experience.

All that makes Nooku Framework a very powerful CCK for developers. Don&#8217;t believe me ? [Get started][8] today,[ join our community][9] and find out yourself.

 [1]: http://www.alledia.com
 [2]: http://www.alledia.com/blog/product-reviews/joomla-goes-cckrazy/
 [3]: http://extensions.joomla.org
 [4]: http://extensions.joomla.org/extensions/news-production/content-construction
 [5]: http://en.wikipedia.org/wiki/Don't_Make_Me_Think
 [6]: http://www.mamboserver.com/
 [7]: http://nooku.assembla.com/spaces/nooku-components/wiki
 [8]: http://www.nooku.org/framework.html
 [9]: http://www.nooku.org/framework/request.html