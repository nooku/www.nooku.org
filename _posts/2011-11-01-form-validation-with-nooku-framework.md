---
title: Form validation with Nooku Framework
author: Stian
layout: post
permalink: /blog/2011/11/form-validation-with-nooku-framework/
dsq_thread_id:
  - 458539503
categories:
  - Framework
  - Tutorial
tags:
  - development
---
[<img src="http://farm7.static.flickr.com/6111/6301887410_911544b369.jpg" alt="Nooku Server - Form Validation" width="500" height="288" />][1]

Responsive validation feedback on forms is no longer a “nice to have” feature in modern web apps, it’s a standard that users have come to expect to be there.

In Nooku Framework Alpha 3, we added a new API that loads the forms validation library in [MooTools More][2] for you. And we implemented it in Nooku Server Alpha 3 to improve the usability of refactored components.

Today I’ll show you how easy it is to get started by simply adding CSS classes to your form inputs. Then I’ll show you how easy it is to create your [own input validators][3] for when you need to validate something custom.

<!--more-->

<h3 dir="ltr">
  Let’s get started
</h3>

<div>
  <p>
    This tutorial will assume that you have a Nooku component already setup, with forms and everything else needed for the application to work. This tutorial aims to help you enhance your form, not build one from scratch.
  </p>
  
  <p>
    The example component is just like a simplified com_weblinks, it renders a set of links.
  </p>
  
  <p>
    So without further ado, this is the basic layout we’ll be enhancing:
  </p>
</div>

<div>
  <pre class="brush: php; toolbar: true;">&lt;form action=”” class=”-koowa-form”&gt;
&lt;input type=”text” name=”title” value=”&lt;?= @escape($treasure-&gt;title) ?&gt;” /&gt;
&lt;input type=”text” name=”url” value=”&lt;?= @escape($treasure-&gt;url) ?&gt;” /&gt;
&lt;/form&gt;</pre>
</div>

<div>
  <p>
    The first thing you need to do, is to load the validation behavior.<br /> You do that by placing this call somewhere close to where you load koowa.js
  </p>
  
  <pre class="brush: php; toolbar: true;">&lt;?= @helper(‘behavior.validator’) ?&gt;</pre>
  
  <p>
    So in this form, there’s a couple of things needed to be improved. The title is a required field, the url field is required as well, but it also needs to be validated as a proper url.
  </p>
  
  <p>
    The way to do that is by adding CSS classes on the form inputs and instructing the validator on how to validate the form.
  </p>
  
  <pre class="brush: php; toolbar: true;">&lt;input type=”text” name=”title” value=”&lt;?= @escape($treasure-&gt;title) ?&gt;” class=”required” /&gt;</pre>
</div>

**Valid**

[<img src="http://farm7.static.flickr.com/6236/6301367935_c744589741.jpg" alt="Nooku Server - Form Validation" width="417" height="22" />][4]

**Invalid**

[<img src="http://farm7.static.flickr.com/6111/6301367863_ef22e1241f.jpg" alt="Nooku Server - Form Validation" width="417" height="51" />][5]

<div>
  <pre class="brush: php; toolbar: true;">&lt;input type=”text” name=”url” value=”&lt;?= @escape($treasure-&gt;url) ?&gt;” class=”required validate-url” /&gt;</pre>
</div>

**Valid**

[<img src="http://farm7.static.flickr.com/6230/6301367901_5d2acb1779.jpg" alt="Nooku Server - Form Validation" width="417" height="22" />][6]

**Invalid**

[<img src="http://farm7.static.flickr.com/6217/6301367955_c57bc010dc.jpg" alt="Nooku Server - Form Validation" width="484" height="51" />][7]

<div>
  <p>
    The result:
  </p>
  
  <pre class="brush: php; toolbar: true;">&lt;?= @helper(‘behavior.validator’) ?&gt;
&lt;form action=”” class=”-koowa-form”&gt;
&lt;input type=”text” name=”title” value=”&lt;?= @escape($treasure-&gt;title) ?&gt;” class=”required” /&gt;
&lt;input type=”text” name=”url” value=”&lt;?= @escape($treasure-&gt;url) ?&gt;” class=”required validate-url” /&gt;
&lt;/form&gt;</pre>
</div>

<h3 dir="ltr">
  Keep your cool
</h3>

Now with these added, we already have very basic validation up and running. When you’re having fun, it’s easy to run a bit crazy and add anything and every possible kind of validation you can to make the most out of what you can do. But you need to stay cool and always have the purpose of what you’re doing crystal clear in your mind. The form validation is meant to help the user workflow be as smooth and painless as it can be.

For example, we don’t add a validator on slug/alias inputs that bugs the user if he forgot to lowercase it properly simply because slug fields can be transformed to lowercase and transliterated automatically in PHP.

<h3 dir="ltr">
  Rule of thumb
</h3>

Rule of thumb : Our first goal should always be to make the application do as much as it can to aid the user. If it can’t, then we can help the user by validating his input.

So the forms validation that calls for user action should only be done on things that our application can’t figure out by itself .

Next time we’ll take a look at how we can automate things a bit more.

 [1]: http://www.flickr.com/photos/nooku/6301887410/ "Nooku Server - Form Validation by Nooku, on Flickr"
 [2]: http://www.mootools.net/docs/more125/more/Forms/Form.Validator
 [3]: http://www.mootools.net/docs/more125/more/Forms/Form.Validator.Extras
 [4]: http://www.flickr.com/photos/nooku/6301367935/ "Nooku Server - Form Validation by Nooku, on Flickr"
 [5]: http://www.flickr.com/photos/nooku/6301367863/ "Nooku Server - Form Validation by Nooku, on Flickr"
 [6]: http://www.flickr.com/photos/nooku/6301367901/ "Nooku Server - Form Validation by Nooku, on Flickr"
 [7]: http://www.flickr.com/photos/nooku/6301367955/ "Nooku Server - Form Validation by Nooku, on Flickr"