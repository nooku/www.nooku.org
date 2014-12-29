---
title: Getting started with Nooku and our Todo component.
author: Cameron Barr
layout: post
image: /images/blog/2014/getting-started-with-nooku-todo.jpg
description: Getting started with Nooku and our Todo component.
---

Getting starting with something new is never easy. Taking that first step into the unknown if often the hardest step to take. Starting out with a new web framework is no different.

>“You don’t have to be great to get started, but you have to start to become great.”
>- **Zig Ziglar**

Without good code examples and supporting documentation getting to know the major concepts, structure, and conventions of that framework can be prohibitively challenging.

<!--more-->

With [Nooku Framework 2.0 out](http://www.nooku.org/blog/2014/09/hello-joomla/) and about we've been hard at work to create getting started documentation to guide you through your first steps.  It’s an unwritten rule among framework developers that a good getting started guide should demonstrate how to build a Todo MVC component. With Nooku we do no different!

<a class="button" href="http://guides.nooku.org/getting-started.html">Todo Component Tutorial</a>

In our Nooku guides you will find a new step by step [getting started tutorial](http://guides.nooku.org/getting-started.html) that takes you through the creation of such an extension for Joomla using Nooku Framework. For the lazy developers among you, you can find the [fully working Todo on Github](https://github.com/nooku/joomla-todo). Just [install using Composer](#getting) and check it out.

We also added some extra features in the package that are not covered yet in the tutorial itself. Both serve to show you how to build solid Joomla! extensions quickly.

## The Todo Component at a glance

We believe in _Letting the code do the talking_, and so with the Todo package you get a lot of nice working examples of how to get things done with Nooku Framework.

There is a great example of how to use the [Bootstrapper](https://github.com/nooku/joomla-todo/blob/master/site/components/com_todo/resources/config/bootstrapper.php) in your component. You can define object instantiation by its identifier in this one file. _Beautiful._

Need to see how a [Toolbar](https://github.com/nooku/joomla-todo/blob/master/site/components/com_todo/controller/toolbar/item.php) might get built in the front end? Or, tell your [controller](https://github.com/nooku/joomla-todo/blob/master/site/components/com_todo/controller/item.php) to allow JSON responses when requested? We show them both.

We have a custom template helper to add delete functionality to the front end for Todo items. We show you how you might couple your item into Joomla! ACL with a [table behavior](https://github.com/nooku/joomla-todo/blob/master/administrator/components/com_todo/database/behavior/permissible.php) and use that in the layouts. The `canPerform()` method gets mixed right into the item's interface..._That is handy!_

There are great examples of how you could use the [behavior template helper](https://github.com/nooku/nooku-framework/blob/master/code/libraries/koowa/components/com_koowa/template/helper/behavior.php) to load javascript into your [forms](https://github.com/nooku/joomla-todo/blob/master/site/components/com_todo/views/item/tmpl/form.html.php), not to mention displaying how you might [organize your view layouts and templates](https://github.com/nooku/joomla-todo/tree/master/site/components/com_todo/views/item/tmpl).

We even show you how you might plug todo items into the Joomla! Smart Search API and display your items in a module, **and so much more.**

<a id="getting"></a>
So go ahead and...

<a class="button" href="https://github.com/nooku/joomla-todo">Get it on Github</a>

Or, if you want to see it in action, just run this command this single command in your Joomla root directory. It will install the package for you.

```
$ composer require nooku/joomla-todo:1.*
```

>Only last week we highlighted in our blog [Nooku's Composer supported distribution architecture](http://www.nooku.org/blog/2014/12/special-delivery-from-the-composer-express/).

**_If you haven't read it yet, now is the time!_**

That’s all we have so far for you. Now it’s your turn. Can you help us by [writing a tutorial](http://guides.nooku.org/contribute/write-a-tutorial.html) or send in a PR (pull request) to improve the Todo component?

**Happy Coding!**

