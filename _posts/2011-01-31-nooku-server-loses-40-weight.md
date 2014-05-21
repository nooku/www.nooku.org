---
title: Nooku Server loses 40% weight
author: Johan
layout: post
permalink: /2011/01/nooku-server-loses-40-weight/
dsq_thread_id:
  - 219636963
categories:
  - Server
tags:
  - development
---
[<img class="alignright" src="http://farm6.static.flickr.com/5017/5401534476_9bfe4c4906_m.jpg" alt="40% code reduction for Nooku Server" width="240" height="180" />][1] Last December we [announced our plans for Nooku Server][2], a multi-site and multi-lingual distribution of Joomla 1.5. With the [help of our community][3] we created a [diet for Nooku Server][4] and [defined a roadmap][5].

For the first alpha we are focusing on implementing the key ingredients of our diet. Most of the work involves removing legacy code, legacy libraries and doing clean-up. In the past weeks we have been making steady progress.

*   **Core extensions**: All the components, plugins and templates that didn’t made it into our list have been removed
*   **XML-RPC**: XML-RPC support has been removed
*   **PDF**: PDF support has been removed
*   **Legacy:** Legacy support for Joomla 1.0 and PHP4 has been removed
*   **Security**: All assets (css,js,images) have been moved to the media folder
*   **Libraries**: Legacy libraries have been removed
*   **Performance**: Hit support in Content and Weblinks has been removed
*   **Mootools**: Mootools has been upgraded to 1.2  including the compatibility layer
*   **Framework**: Nooku Framework has been added

With most of the refactoring completed it’s time to weigh the result. I have done a code count today to compare the code bases of Joomla 1.0, 1.5, 1.6 and Nooku Server. I used [Ohcount][6], a little command line tool that is also used by [Ohloh][7] to do code counting.

We have made Nooku Server a whooping **40% lighter** in code size. Yes, you read that right, we removed 40% code and we added a whole new framework at the same time.

Here are the detailed results:

<!--more-->

### 1. Total code count

[<img src="http://farm6.static.flickr.com/5059/5401437534_6f4d68c469.jpg" alt="Total code count" width="500" height="304" />][8]

Comparing the overall code count (php, javascript, html, css, xml) of Nooku Server with Joomla 1.5 or 1.6 we are getting a whooping **+/- 45% code loss**. Or almost ½ of the total code has been removed to make Nooku Server leaner and meaner.

### 2. Total code count &#8211; PHP

The total code comparison isn’t 100% fair as we also removed most of the frontend templates, only milkyway is still left, in Nooku Server. To be fair, let’s also compare only the PHP code. This is giving the following graph :

[<img src="http://farm6.static.flickr.com/5094/5401437582_588bf5f00e.jpg" alt="Total code count - PHP" width="500" height="296" />][9]

Compared with 1.5: **45% less code**  
Compared with 1.6: **40% less code**

We need to add here that Nooku Server includes Nooku Framework which has approx 10.000 lines of PHP code, if we would remove Nooku Framework  the difference would even be bigger and go **over 50%**.

### 3. Comments percentage

Another useful comparison to make is the amount of code comments. Code comments give an idea about how well the code is documented which is a measure of code quality. Again we only compare comment percentages in the PHP code.

[<img src="http://farm6.static.flickr.com/5134/5400837217_ecc4c82c8b.jpg" alt="Code comments percentage - PHP" width="500" height="298" />][10]

Looking at this graph we see an slight decrease in code comments from 1.0 to 1.5, for 1.6 the amount of comments have been increased, Nooku Server is definitly in the lead.

We take alot of care in adding code comments to Nooku Framework and are constanly improving our code comments and in code documentation.

### 4. Total code count by type

[<img src="http://farm6.static.flickr.com/5291/5400837045_47707cde89.jpg" alt="Total code count by type" width="500" height="277" />][11]

A more detailed overview of the code count per type for each of the packages. You noticed that Joomla 1.6 is roughly the same size as 1.5 even a little bigger with the added templates.

Nooku Server on the other hand is a lot leaner and meaner and is moving in the direction of the size of Joomla 1.0, while adding alot more power through the inclusion of the Nooku Framework.

So far our little diet is coming along pretty well. We will see a slight code increase again when we start adding the multi-site and multi-lingual features but we will also start refactoring components to Nooku Framework which in turn should also reduce the overall size. I will update the graphs after each alpha so you get an idea how to code size evolves over time.

Note: An interactive spreadsheet with the actual data and graphs can also be [found here][12].

 [1]: http://www.flickr.com/photos/nooku/5401534476/ "40% code reduction for Nooku Server by Nooku, on Flickr"
 [2]: http://blog.nooku.org/2010/12/nooku-server-joomla-on-steroids/
 [3]: http://blog.nooku.org/2010/12/putting-nooku-server-on-a-diet/
 [4]: http://blog.nooku.org/2011/01/creating-a-diet-for-nooku-server/
 [5]: http://blog.nooku.org/2011/01/a-roadmap-for-nooku-server/
 [6]: http://www.ohloh.net/p/ohcount
 [7]: http://www.ohloh.net/
 [8]: http://www.flickr.com/photos/nooku/5401437534/ "Total code count by Nooku, on Flickr"
 [9]: http://www.flickr.com/photos/nooku/5401437582/ "Total code count - PHP by Nooku, on Flickr"
 [10]: http://www.flickr.com/photos/nooku/5400837217/ "Code comments percentage - PHP by Nooku, on Flickr"
 [11]: http://www.flickr.com/photos/nooku/5400837045/ "Total code count by type by Nooku, on Flickr"
 [12]: https://spreadsheets.google.com/a/timble.net/pub?key=0AgIxulljZEpYdEROV01sNEVqXzRiLXQ1QU9ZQmZzdGc&hl=en&single=true&gid=5&output=html