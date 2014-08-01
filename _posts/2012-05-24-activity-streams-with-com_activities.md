---
title: Activity Streams with com_activities
author: israel
layout: post
permalink: /blog/2012/05/activity-streams-with-com_activities/
dsq_thread_id:
  - 701470626
categories:
  - Components
  - Tutorial
tags:
  - development
---
<p style="text-align: left;">
  As the web becomes more social, a new and interesting way to follow  people across the Internet has emerged. Termed as “Activity Streams”, it is popularized by sites like Facebook, Twitter, and other social websites, Activity Streams has now become an essential part of “the Social Web”.
</p>

<h3 style="text-align: left;" dir="ltr">
  So what are “Activity Streams”?
</h3>

<p style="text-align: left;">
  On the surface, it looks like a simple record of actions performed by people on the Internet. But what makes it interesting is the philosophy behind it. Activity Streams is rooted to a concept called <a href="http://www.slideshare.net/factoryjoe/activity-streams-socialism-the-future-of-open-source">Activity Theory</a>.
</p>

<p style="text-align: left;">
  We may not be able to discuss the theory in detail , but I am quite certain that Activity Theory may drive the future of the social web. The concept is also very relevant to Open Source communities such as Nooku, as it explores the psychology behind collaboration, motivation and productivity.
</p>

<p style="text-align: left;">
  Philosophy aside, the technology behind Activity Streams is also evolving. As more and more websites use it, a standard is being developed which will allow Activity Streams to be syndicated in its own protocol instead of using RSS or Atom. To know more about the Activity Streams Standard, read the <a href="http://activitystrea.ms/">Draft</a> and the <a href="http://wiki.activitystrea.ms/w/page/1359261/FrontPage">Wiki</a>.
</p>

<h3 style="text-align: left;" dir="ltr">
  Where does Nooku come into play?
</h3>

<p style="text-align: left;">
  To easily integrate Activity Streams in your Nooku application, a new Nooku Component is here at your service &#8211; com_activities. By using this, logging user actions in your Nooku component and rendering Activity Streams can be effortless.
</p>

<p style="text-align: left;">
  <!--more-->
</p>

<p style="text-align: left;">
  How do you use com_activities in your component? Check out this code:
</p>

<pre><code class="language-php">
class ComArticlesControllerArticle extends ComDefaultControllerDefault
{
    protected function _initialize(KConfig $config)
    {
        $config-&gt;append(array(
            'behaviors' =&gt; array(
                'com://admin/activities.controller.behavior.loggable',
            )
        ));

        parent::_initialize($config);
    }
}
</code></pre>

<p style="text-align: left;">
  In your controller, simply add the “loggable” controller behavior from com_activities. By default, the loggable behavior is triggered on controller actions: add, edit and delete.
</p>

<p style="text-align: left;">
  When the behavior is triggered, it logs the user(actor), the action(verb), the item in which the action was performed(object), the link to the object(target), and some metadata e.g. when the action was performed, and which application was used.
</p>

<p style="text-align: left;">
  When viewing the activity stream, these records are constructed together to form a meaningful sentence like “This <em>User</em> has performed this <em>Action</em> on this <em>Object</em> on this <em>Date</em>”.
</p>

<p style="text-align: left;">
  The behavior is also flexible, you can configure it to track only certain actions such as after login, or after logout as demonstrated in this code:
</p>

<pre><code class="language-php">
$config-&gt;append(array(
    'behaviors' =&gt; array(
         $this-&gt;getService('com://admin/activities.controller.behavior.loggable',
         array(
             'title_column' =&gt; 'name',
             'actions'      =&gt; array('after.login', 'after.logout')
     ))),
));
</code></pre>

<p style="text-align: left;">
  Aside from the HTML view, com_activities can also output the JSON format that follows the emerging Activity Streams standard. To do this, just append format=json in the URL e.g
</p>

<pre><code class="language-php">
index.php?com_activities&view=activities&format=json.
</code></pre>

<p style="text-align: left;">
  Using Nooku’s RESTful architecture, you can syndicate your component’s activity stream without additional effort.
</p>

<h3 style="text-align: left;" dir="ltr">
  Coming Soon in Nooku 12.2
</h3>

<p style="text-align: left;">
  As the web evolves, Activity Streams can become an integral part of user driven websites. By using Nooku with com_activities, developers can easily integrate it to their applications. It’s a powerful feature and it’s so easy to implement in Nooku.
</p>

<p style="text-align: center;">
  <a title="Nooku Server - Activities by Nooku, on Flickr" href="http://www.flickr.com/photos/nooku/7258732306/"><img class="aligncenter" src="http://farm8.staticflickr.com/7219/7258732306_89ddbc8947.jpg" alt="Nooku Server - Activities" width="500" height="337" /></a>
</p>

<p style="text-align: left;">
  Check the code of com_activities in the  <a href="http://nooku.assembla.com/spaces/nooku-components">Nooku Components</a> trunk or see it in action in <a href="http://nooku.assembla.com/spaces/nooku-server">Nooku Server</a>’s. To view , look for “Activity Logs” under the Tools menu or check out the dashboard which shows the activities in a AJAX overlay. Coming to you in 12.2. Excited ? So are we !
</p>

<p style="text-align: left;">
  Happy Coding!
</p>