---
title: Nooku Content 0.6.8 released
author: Johan
layout: post
permalink: /blog/2010/08/nooku-content-068-released/
dsq_thread_id:
  - 126094973
categories:
  - Project
tags:
  - release
---
We are pleased to announce the release of [Nooku Content][1] version 0.6.8. This version is a maintenance release that addresses a regression issue introduced in the 0.6.7 release.

This release also includes the following fixes :

*   Fixed redirection issues in the administrator when switching language after using the items view.
*   Fixed problem when trying to delete existing or none-existing tables
*   Fixed issue with custom flags not being rendered properly

We also introduced **front-end user language support**. When trying to determine the preferred language Nooku Content now takes the frontend language setting into account for logged in users. The new sequence is : session -> cookie -> user (only if logged in) -> browser -> primary.

Together with the release of Nooku Content 0.6.8 we are also releasing Nooku Framework 0.6.8 which includes a number of smaller fixes. Nooku Framework is available through our [Nooku Developer Portal][2], for a direct link to the 0.6.8 SVN go [here][3].

Nooku Content is only available to our partners. By supporting us, you helps us to build quality open source software. In return you get a great extension, personalized support, and a voice in the development. If you want to learn more, discover our [Partnership Program][4].

 [1]: http://www.nooku.org/content
 [2]: http://code.nooku.org
 [3]: http://nooku.assembla.com/code/nooku-framework/subversion/nodes/tags
 [4]: http://www.nooku.org/partners/why.html