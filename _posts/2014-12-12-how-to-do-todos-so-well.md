---
title: How to do Todo sooo well, with Nooku
author: Cameron
layout: post
image: /
description: Getting started help with a Todo Component tutorial and a complete Todo Joomla Package
---

Nooku Framework 2.0 is out and we've been hard at work getting some of our supporting documentation together. Part of that work has been a adding a new
[Todo Component Tutorial series]((http://guides.nooku.org/get-started.md)) to the Guides. But another big part has been in producing
a robust example [Todo Package](https://github.com/nooku/joomla-todo) that goes even beyond what the tutorial explains.

<!--more-->
## The Todo Package

We believe in _Letting the code do the talking_, and so with the Todo Package you get a lot of nice working examples of how to
get things done with Nooku Framework.

You will see examples of

* specialized table objects
* behaviors
* http dispatchers
* models
* template helpers
* views
* tie your Todo Items into Search
* showing you items in a module

<!-- DRESS THIS UP WITH A BUTTON-->
[Get It on Github](https://github.com/nooku/joomla-todo)

Better yet, just run this command this command in your Joomla root directory.

```shell
composer require nooku/joomla-todo:1.*
```

>Only last week we highlighted in our blog [Nooku's Composer supported distribution architecture](http://www.nooku.org/blog/2014/12/special-delivery-from-the-composer-express/)

## Help Getting Started...

[Getting Started](http://guides.nooku.org/get-started.md) is sometimes the hardest part about working with a Framework.
Without good examples and supporting documentation getting to know the major concepts, structure, how things get done and why can be challenging.

There is no Question that Nooku is powerful, but getting started with it doesn't need to be hard. To get you going we've taken a
step by step approach describing how to build out an actual working version of the Todo Component from the ground up.

### Some of the Highlights

#### [Setup](http://guides.nooku.org/get-started/set-up.md)

Some quick tips getting set up with the Joomlatools Vagrant Box, and installing the Framework with composer. Its super easy and we show you how.

#### [Frontend](http://guides.nooku.org/get-started/com_todo-frontend.md)

After you have your environment up and running, we do the Front side of a Todo component. You'll register the component with
the extensions table in the database, create views and add records to the database.

* [Register the Component](http://guides.nooku.org/get-started/register-the-component.md)
* [Component Entry Point](http://guides.nooku.org/get-started/component-entry-point.md)
* [Hello World!](http://guides.nooku.org/get-started/hello-world-todos.md)
* [The Database Table](http://guides.nooku.org/get-started/creating-the-database.md)
* [Your First Todo List View](http://guides.nooku.org/get-started/your-first-todo-list-view.md)

#### [Backend](http://guides.nooku.org/get-started/com_todo-backend.md)

What good would a Joomla Component Tutorial be without touching on the most important areas of concern with the backend. We do that and
also try to bring forward some important concepts. You will create more views, add toolbars, and learn a little about the dispatcher.

* [Component Entry Point](get-started/backend-entry-point.md)
* [Create a View](get-started/create-a-view.md)
* [The Dispatcher](get-started/the-dispatcher.md)
* [The Controller Package](get-started/the-controller-package.md)
* [Load a Form to Edit Todos](get-started/load-a-form-to-edit-todo-items.md)
* [Toolbar for Item Form](get-started/add-toolbar-to-item-view.md)
* [Toolbar for List View](get-started/add-toolbar-to-list-view.md)

After completing this complete tutorial series you will be well on your way to being a _Nooku Framework officianado_. You'll see
some of the Magic that lets you write much less code for your given application, and get comfortable with some of the productivity tools
that allow you to write code, instead of setting up instances of Joomla.

### Happy Coding!




