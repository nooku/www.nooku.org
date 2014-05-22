---
title: Say hello to the “dynamic module injector”
author: Guest
layout: post
permalink: /blog/2011/08/say-hello-to-the-dynamic-module-injector/
dsq_thread_id:
  - 381099212
categories:
  - Community
tags:
  - development
  - hackathon
---
*This is a guest post from [Nick Balestra][1], CEO and Co-Founder of [Beyounic][2], home of the [Ohanah events manager ][3]for Joomla.*

It has been said many times before, Nooku is not a one-way street. The Nooku community thrives on collaboration. At Beyounic we believe in this and decided to organise a hackathon at our own Beyounic HQ in Locarno Switzerland. We brought our team together and flew Johan in to hack for two full days on Nooku Framework. One of the little gems that came out of this is the ‘dynamic module injector’.

In Joomla, modules are attached to a menu item based on its ID. If you want to associate a specific module with a specific page you need to create a menu item for that page, then link the module to it. While this may work in many cases, it&#8217;s not always ideal.

<!--more-->

### Real world scenario

Let me explain this with a real world scenario and how we are using this in Ohanah.

Let&#8217;s assume you want to publish a list of upcoming events for a specific category on the main menu of your website. When a user click on an event you want to display the event page, together with the attendees list module in the left module position.

Without the dynamic module injector you would need to develop a module that shows the list, install it, create an instance of it and then assign it to the menu item that links to your events page.

With the dynamic module injector you don’t need a module, you just add the following code to the single event view template:

<module title=”Attendees” position=”left”>attendee list code goes here</module>

This results in the list of attendees being dynamically generated and rendered as a module attached to the event view and injected in the module position left with the module title “Attendees”. All without having to set up a module and publish it, or having to worry about menu items, conflicts during navigation, etc. Neat huh !

Here is the dynamic module injector in action in Ohanah ([live demo][4]).

[<img src="http://farm7.static.flickr.com/6125/6025404542_29563c425f.jpg" alt="Dynamic Module Injector" width="500" height="163" />][5]

### Ready, set, code

For the developers among you, we posted the template filter on GitHub: <https://gist.github.com/1131081> so you can already make use of it. The code has been contributed back and is integrated in the Nooku Framework development branch at the moment. It will be released in Alpha 4, see [ticket #150][6].

Happy coding!

 [1]: http://twitter.com/#!/nickbalestra
 [2]: http://www.beyounic.com
 [3]: http://app.ohanah.com/
 [4]: http://app.ohanah.com/demo/index.php?option=com_ohanah&view=event&id=14&Itemid=238
 [5]: http://www.flickr.com/photos/nooku/6025404542/ "Dynamic Module Injector by Nooku, on Flickr"
 [6]: https://nooku.assembla.com/spaces/nooku-framework/tickets/150-dynamic-module-injector