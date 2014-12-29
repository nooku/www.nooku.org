---
title: Off to the Races - Todo Tutorial and Package for Joomla!
author: Cameron Barr
layout: post
image: /images/blog/2014/getting-started-with-nooku-todo.jpg
description: Getting started help with a Todo Component tutorial and a complete Todo Joomla Package
---

[Getting Started](http://guides.nooku.org/get-started.md) is sometimes the hardest part about working with a framework.
Without good examples and supporting documentation getting to know the major concepts, structure, and conventions can be challenging.

Nooku Framework 2.0 is out and we've been hard at work getting that supporting documentation together. <!--more--> Part of that work has been adding a new
[Todo Component Tutorial series]((http://guides.nooku.org/get-started.md)) to the Guides. But another big part has been in producing
a robust example [Todo Package](https://github.com/nooku/joomla-todo) that goes even beyond what the tutorial explains. Both
serve to show you how to build solid Joomla! extensions quickly.

## The Todo Package

We believe in _Letting the code do the talking_, and so with the Todo Package you get a lot of nice working examples of how to
get things done with Nooku Framework.

There is a great example of how to use the [Bootstrapper](https://github.com/nooku/joomla-todo/blob/master/site/components/com_todo/resources/config/bootstrapper.php)
in your component. You can define object instantiation by its identifier in this one file. _Beautiful_.

Need to see how a [Frontend Toolbar](https://github.com/nooku/joomla-todo/blob/master/site/components/com_todo/controller/toolbar/item.php) might get built in the front end?
Or, tell your [controller](https://github.com/nooku/joomla-todo/blob/master/site/components/com_todo/controller/item.php) to allow JSON responses when requested? We show them both.

We have a custom template helper to add delete functionality to the front end for Todo items. We show you how you might
couple your item into Joomla! ACL with a [table behavior](https://github.com/nooku/joomla-todo/blob/master/administrator/components/com_todo/database/behavior/permissible.php) and use that
in the templates. The _`canPerform`_ method gets mixed right into the item's interface..._That is handy_!

There are great examples of how you could use the [behavior helper](https://github.com/nooku/nooku-framework/blob/master/code/libraries/koowa/components/com_koowa/template/helper/behavior.php)
package in your [forms](https://github.com/nooku/joomla-todo/blob/master/site/components/com_todo/views/item/tmpl/form.html.php), not to mention displaying
how you might [organize your view layouts and templates](https://github.com/nooku/joomla-todo/tree/master/site/components/com_todo/views/item/tmpl).

We even show you how you might plug todo items into the Joomla! Search Api and display your items in a module.

## _and so much more_

You can...

<a class="button" href="https://github.com/nooku/joomla-todo">Get It on Github</a>

Or, if you want to see it in action, just run this command this command in your Joomla root directory. It will install the package for you.

```
$ composer require nooku/joomla-todo:1.*
```

>Only last week we highlighted in our blog [Nooku's Composer supported distribution architecture](http://www.nooku.org/blog/2014/12/special-delivery-from-the-composer-express/)

## Help Getting Started...The Tutorial

There is no Question that Nooku is powerful, but getting started with it doesn't need to be hard. We've taken a
step by step approach describing how to build out an actual working version of the Todo Component from the ground up.

### Some of the Highlights

#### [Setup](http://guides.nooku.org/get-started/set-up.md)

Some quick tips getting set up with the Joomlatools Vagrant Box, and installing the Framework with composer. Its super easy and we show you how.

#### [Frontend](http://guides.nooku.org/get-started/com_todo-frontend.md)

After you have your environment up and running, we do the Front side of a Todo component. You'll register the component with
the extensions table in the database, create views and add records to the database.

* [Register the Component](http://guides.nooku.org/get-started/register-the-component.md) - get your component into the extensions table.
* [Component Entry Point](http://guides.nooku.org/get-started/component-entry-point.md) - fire things off by calling your component's dispatcher
* [Hello World!](http://guides.nooku.org/get-started/hello-world-todos.md) - gets your first output into the browser
* [The Database Table](http://guides.nooku.org/get-started/creating-the-database.md) - real data, in your database table
* [Your First Todo List View](http://guides.nooku.org/get-started/your-first-todo-list-view.md) - add a view that makes sense

#### [Backend](http://guides.nooku.org/get-started/com_todo-backend.md)

What good would a Joomla Component Tutorial be without touching on the most important areas of concern regarding the backend. We do that and
also try to bring forward and reinforce more important concepts. You will create more views, add toolbars, and learn a little about the dispatcher.

* [Component Entry Point](get-started/backend-entry-point.md) - this time, get things going in the backend
* [Create a View](get-started/create-a-view.md) - create a more "administrator" focused view
* [The Dispatcher](get-started/the-dispatcher.md) - we talk about how to use the dispatcher to set a default controller for your component
* [The Controller Package](get-started/the-controller-package.md) - Controller toolbars and a little bit of theory
* [Load a Form to Edit Todos](get-started/load-a-form-to-edit-todo-items.md) - this step gets the edit form into your component
* [Toolbar for Item Form](get-started/add-toolbar-to-item-view.md) - using the default implementation of the toolbar, no need to handle your forms
* [Toolbar for List View](get-started/add-toolbar-to-list-view.md) - using the same toolbar class for a list view

After completing each step in the tutorial series you will be well on your way to becoming a _Nooku Framework officianado_. You'll see
some of the Magic that lets you write much less code for your given application, and get comfortable with some of the productivity tools
that allow you to write code, instead of setting up instances of Joomla.

### Happy Coding!




