---
title: A happy Nooku year to all of you!
author: Johan Janssens
layout: post
redirect: http://developer.joomlatools.com/blog/2015/01/a-productive-year-to-all-of-you.html
image: /images/blog/2015/year-in-review-2014.jpg
image-alt: Nooku 2014 year in review
description: A write-up of all the great things that have been done in Nooku in the year 2014
---

2014 has come to an end. It has a been another great year of progress for our little project and we expect 2015 to be no different. We are starting the year off with two great releases and are looking forward to what the rest of 2015 has in store. Here is a little overview.

<!--more-->

##Joomla Todo v1.0  

[Todo](http://www.nooku.org/blog/2015/01/getting-started-with-nooku-and-our-tutorial-component/) is a getting started component that shows how to build a Joomla (H)MVC powered extension using Nooku Framework. The component comes with a [nice step by step tutorial](http://guides.nooku.org/getting-started.html), and includes support for our activities component and composer installer. A great way to get started with Nooku, check it out on [Github](https://github.com/nooku/joomla-todo).

Developer credits go to [Mati](https://github.com/kochen) and [Ercan](https://github.com/ercanozkaya) for the development of the component. [Arunas](https://github.com/amazeika) for the integration with the Activities component. Kudos go to [Cameron](https://github.com/magneticmg) for excellent work on the documentation and [Steven](https://github.com/stevenrombauts) for making it installable using Composer.

##Nooku Activities v2.0

[Nooku Activities](http://www.nooku.org/blog/2015/01/hello-activities-2/) our first truly re-usable component. As the name suggests it stores a stream of activities or actions. Activities implements the complete [JSON Activity Stream v1.0 specification](http://activitystrea.ms/) and, where possible extends the specification  by adding additional features. For example, the component lets you expose and log activities in different languages.

We have been working for more than 5 years to get to this point. The premise of Nooku has always been that it is possible to create application agnostic and re-usable components that can act- as building blocks for any kind of web application - LEGO style.

Nooku Activities 2.0 is the first of a series of components we have been working on, that build on this premise, and that is complete and ready for use. The component can be installed through composer, other components can re-use the functionality it offers with just a few lines of code.

To demonstrate this we have added support for activity logging to the Todo component. With just [one line of code](https://github.com/nooku/joomla-todo/blob/master/administrator/components/com_todo/resources/config/bootstrapper.php#L13): user actions performed on the Todo component become loggable as activities. The Todo component also comes with an [activities view](https://github.com/nooku/joomla-todo/blob/master/administrator/components/com_todo/views/activities/tmpl/default.html.php) that shows how to visualise those activities. The only code that is required to make this work is the addition of a [controller that extends from ComActivitiesControllerActivity](https://github.com/nooku/joomla-todo/blob/master/administrator/components/com_todo/controller/activity.php).

Developer credits go to [Arunas](https://github.com/amazeika) for more than 3 years of not giving up, of pushing the code, refactoring it again and again until we could finally call it a Release. Thanks Arunas!

##Composer installer

At the end of 2014 we also released our [Nooku composer installer](http://www.nooku.org/blog/2014/12/special-delivery-from-the-composer-express/). The installer is capable of installing Nooku Framework into Joomla, has support for installing re-usable Nooku components into the /vendor folder and can install Nooku powered Joomla extensions in Joomla 2.5 and 3.x.

The installer is the beating heart of Nooku’s component driven architecture. It is capable if installing components and injecting them into the bootstrapper, no additional configuration required.

Developer credits go to [Steven](https://github.com/stevenrombauts) and [Oli](https://github.com/oligriffiths) for pushing this, and making it simple, configurationless and easy to use.

##What's coming in 2015

We are already working very hard on more [developer guides](http://guides.nooku.org/). Cameron is putting in lots of hours to add more framework documentation. We hope to be able release our Web API and Events API documentation later this year. The UI concepts are still being worked on for this one; It's looking very good!

Development on [Nooku Framework 2.1](https://github.com/nooku/nooku-framework/tree/develop) has also started. Support for PHP 5.2 is being dropped. We are working on API improvements to the dispatchers to improve the HMVC implementation. Our goal is to make re-using a component a “simple single line of code” operation. As promised, all changes will be 100% compatible.

With Nooku Framework 2.1, we will also split the framework from the Joomla integration layer and start offering both separately. This will allow developers to use the framework outside of Joomla more easily. Together with a re-usable application component it will become possible to develop standalone applications using Nooku Framework.

Finally, we are working on more re-usable components. We plan to release [Nooku Files 2.0 component](http://www.nooku.org/blog/2011/08/meet-com_files-joomla-file-management-2-0/), work has started on a tagging component, and we are also working on a component to support [Varnish](https://www.varnish-cache.org/) based ESI caching.

Lots of great stuff in the pipeline, so stay tuned!

Happy coding!

Johan
