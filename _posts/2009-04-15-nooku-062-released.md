---
title: Nooku Content 0.6.2 released
author: Johan
layout: post
permalink: /2009/04/nooku-062-released/
dsq_thread_id:
  - 85784098
categories:
  - Content
tags:
  - release
---
We are pleased to announce the release of version 0.6.2. This version is mostly a bug fix release to address a number of issues that where reported by our partners. A few smaller features where also added :

<!--more-->

*   Better metadata handlingWe have made a number of changes to the metadata handling in Nooku. Metadata can now also be managed from the frontend. Metadata for articles is also kept in sync with the content table to allow for full compatibility with mod\_related\_items, this wasn&#8217;t the case previously.
*   Smarter language switcherThe frontend language switcher has been made more intelligent. It will now only show the languages that are available for a certain page. The decision on what languages to show is based on the published and access state of the menu items. For example, if you have a menu item in three languages (en, nl, de) and unpublish the item in &#8216;de&#8217; then the switcher will only show 2 languages, en and nl. Previously it also showed &#8216;de&#8217;.

Both these new features are a result of the result of feedback we received on our first [Nooku Demo Day in the Netherlands][1] and are a great way to demonstrate the power of our[ partner model][2] and the important of their feedback.

 [1]: en/buzz/86-nooku-demo-day-report.html "title"
 [2]: en/partners/program.html "title"