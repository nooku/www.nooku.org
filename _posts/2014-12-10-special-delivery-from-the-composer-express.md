---
title: Special delivery from the Composer Express!
author: Steven Rombauts
layout: post
image: /images/blog/2014/lego-forklift.jpg
---

With the release of Nooku Framework 2.0 stable we needed an efficient way to distribute the framework and install it in Joomla. 

We pride ourselves on how easy it is to write robust applications using the framework, so naturally installation should be hassle-free as well. That's where [Composer](http://getcomposer.org) fits in perfectly.

<!--more-->

In case you missed it, Composer is a dependency manager for PHP. It will download and install all your required libraries and packages and deal with picking the right versions for you. Composer has become widely used throughout the PHP community for its effectiveness and ease of use.

[Support for Composer](http://issues.joomla.org/tracker/joomla-cms/3617) is slated for the upcoming Joomla 3.4 version. That means Composer will become the default tool to manage packages and libraries in Joomla too. No reason left to not make use of Composer any longer!

## Let our Composer plugin do the heavy lifting for you.

We've created an installer plugin for Composer that knows how to handle the different packages we need to throw at it.

When you install the framework through Composer, the plugin knows that it should not only download it, but install and enable it as well! All you have to do is require the `nooku/nooku-framework` package and you're done! 

See our [Getting Started](http://www.nooku.org/get-started/) page for a copy-paste-ready example.

## Wait, there's more!

The Composer plugin also deals with reusable Nooku components. These components lie at the heart of Nooku Framework's [component-based architecture](https://en.wikipedia.org/wiki/Component-based_software_engineering): they are ready-made building blocks that extend upon the framework and can be used to implement common functionalities like: activity logging, category support, file management, tagging or version control, etc.

In the weeks to come we will start releasing more re-usable components. At the moment, you can already make use of our [Nooku Activities](https://github.com/nooku/nooku-activities) component to automatically log events and expose activity streams. How these components work will be covered in a future blog post. Once ready, a re-usable component can be installed through Composer.

The installer will download these components into the vendor directory, alongside any other libraries or packages you required. Afterwards, the framework will invoke Composer's autoloader to make these components accessible throughout your Joomla application.

## What about your custom Joomla extensions?

Of course, you want to be able to distribute your amazing Nooku Framework Joomla extensions to the world! Don't worry, we have you covered.

By publishing your extension on [Packagist](http://packagist.org) as a `joomla-extension` type and requiring our installer, you tell the plugin to process your repository as any other Joomla extension. 

The plugin will download your code, invoke Joomla's [JInstaller](http://api.joomla.org/cms-3/classes/JInstaller.html) class and install your extension. This works in exactly the same way as uploading an extension package through Joomla's Extension Manager interface. That means you can also include SQL files or pre- and postflight script files.

To see an example, you can take a look at our example [Todo extension](https://github.com/nooku/joomla-todo). 

## Sounds great, where do we start?

Our plugin's code is published on [GitHub](https://github.com/nooku/nooku-installer) and distributed through [Packagist](https://packagist.org/packages/nooku/installer). To make use of it, all you need to do is setup your composer.json file correctly. The [README](https://github.com/nooku/nooku-installer/blob/develop/README.md) contains a thorough explanation of the different types and how to use them.

If you spot any issues or like to improve the current installer, feel free to fork the code and send us a pull request.

Have fun coding­!
