---
title: Our Backbone.js and Nooku Tutorial
author: Cameron Barr
layout: post
image: /images/blog/2015/backbonejs.png
image-alt: Backbonejs with PHP back-end using Nooku
description: Using Nooku to provide a data persistence layer to Backbonejs Applications.
---
[Backbone.js](http://backbonejs.org/) and Nooku possible? Absolutely! Nooku’s built-in JSON API makes it a great choice as a backend for any kind of desktop and mobile app. Don’t believe us ? In this tutorial: [_"Using Backbone.js and Nooku Together"_](http://guides.nooku.org/tutorials/backbonejs-nooku-together.html) we will show you how you can use [TodoMVC’s Backbone example app](http://todomvc.com/examples/backbone/) as a frontend for our own Joomla Todo extension.

<!--more-->

## Backbone in a nutshell

The past 5 years have seen great advancements in client side use of Javascript libraries and frameworks. Asynchronous requests, partial page refreshes and the rise of the single page application are just a few examples of this. The explosion of mobile device apps that use Javascript and HTML5 is also a huge driver.  

## A trio made in heaven

Joomla together with Nooku and Backbone make for a killer team. With Joomla you get a great application administration interface, and with Nooku you get an out of the box JSON web service for Backbone to talk too! An instant friendship. 

Nooku makes building administration views for the data of your service quick and easy. Joomla brings the environment and Nooku Framework brings the horsepower to add, edit, or delete records **without any code needing to be written**.

## Using Backbone with Nooku

Now that we have some of the "why"" out of the way, we can focus a little on the “how”. To make things easy we created a brand new tutorial in our guides: [Using Backbone.js and Nooku Together](http://guides.nooku.org/tutorials/backbonejs-nooku-together.html).  

We take you through each step and explain how you can use the REST API of our Joomla Todo extension as the back-end for the [TodoMVC.com Backbone example](http://todomvc.com/examples/backbone/). 

> TodoMVC.com showcases and compares most of the major client-side frameworks by solving the same todo list example.

Go ahead and get stuck into the Tutorial. Here is a quick snapshot of the steps you’ll find:

### The View 

To get started we take the content of the body of the TodoMVC backbone index.html file and place it in a app view located at `/components/com_todo/views/backbone/tmpl/default.html.php`

To prevent the need to add a database table for the app view we add a matching controller, in `/components/com_todo/controller/backbone.php` and extend from [`KControllerView`](https://github.com/nooku/nooku-framework/blob/master/code/libraries/koowa/libraries/controller/view.php#L16).  

### Collection and Model Urls

Backbone Models and Collections work via their respective `url` related properties or methods when retrieving and persisting data to a server. 

To make things work we point Backbone in the right direction and add a `url` property to the Todos Collection (`/media/com_todo/lib/backbone/js/collections/todos.js`) which points to the list view of the `com_todo` component, i.e. `/component/todo/tasks/`;

### Tweaking the JSON response

Nooku provides a default [JSON output](http://guides.nooku.org/json.html) which conforms to the [JSON API spec](http://jsonapi.org/). Backbone expects is slightly different JSON format. Collections need to be returned as a JSON array of models (JSON objects) and singular items to be returned as plain JSON objects (without the JSON API spec meta, limits, etc., which the framework provides). 

To provide the right response for Backbone, we create a couple of lightweight view classes for `com_todo` that override the default. 

### Dealing with CSRF tokens in POST requests

The [Nooku HTTP Dispatcher](https://github.com/nooku/nooku-framework/blob/master/code/libraries/koowa/libraries/dispatcher/http.php#L16) attaches [`authenticators`](https://github.com/nooku/nooku-framework/tree/master/code/libraries/koowa/libraries/dispatcher/authenticator) that determine in part if a request can be be dispatched. The default configuration is to test for the presence of a valid `csrf_token`. If the token is not present in the request the framework will send a 401 ‘Not authenticated’ error. 

To satisfy this need, we add a `beforeSend` callback using the `Backbone.$.ajaxSetup` function, which will include a valid token in each POST request ensuring that the request can be correctly authenticated. 

### All the code is on Github

We're maintaining a special branch of the Joomla Todo repository for this tutorial. You can use [Composer](http://getcomposer.org) to follow along each step (don't worry, we show you how), or just clone the repository and checkout the [tutorials/backbone](https://github.com/nooku/joomla-todo/tree/tutorials/backbone) branch and just look around. 

## Wrapping up

What’s striking is how readily the two pieces fit together. The file edits were very minimal. You can see from the exercise how Nooku with Joomla (or even potentially by itself) can be used to provide back-end services that can be rapidly developed, and are architecturally maintainable and malleable. 

