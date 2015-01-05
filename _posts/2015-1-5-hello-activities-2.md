---
title: Hello Activities 2.0
author: Arunas Mazeika
layout: post
image: /images/blog/2014/activity-streams.png
description: Announcing the release of Nooku Activities 2.0, a re-usable component for logging and exposing activities.
---

Tracking user activities or even reacting to such events is something that is getting more and more attention by the day. Not so far along, an [specification](http://activitystrea.ms) for dealing with activities and their streams did not even exist. Today we have services like [Zapier](https://zapier.com) and [IFTTT](https://ifttt.com) that allow to "connect the web" while relying on user activities.

<!--more-->

In its simplest form, a user activity consists of an actor, a verb, optionally an object and sometimes a target. An activity tells the story of a person performing an action. Sometimes this action is performed on or with an object, and sometimes a target is also involved:

- Geraldine posted a photo to her album
- John shared a video
- Tom logged in

**Nooku Activities** is a component built on top of the **Nooku Framework** for logging and exposing user activities.

If you ever came across Nooku before, you probably already know that **reusability** is one of the key features of the Framework. In other words, it enforces a basic but powerful rule: *develop it once, reuse it everywhere*.

Through inheritance, reusable components may be extended and completely overridden avoiding developers the tedious task of repeating themselves. The old [copy/paste](http://en.wikipedia.org/wiki/Copy_and_paste_programming) days are long gone and reusable components are here to stay.

Nooku Activities is our first reusable component to be publicly released. Because it is a reusable component, Nooku Activities is also application agnostic, *i.e.* it is not bound to Joomla! or any other application. The component only relies on the Framework as its only dependency.


## Logging Activities

The process of logging user activities is almost always directly related to controller actions. Logging component user actions therefore means making one or more of their controllers **loggable**. In Nooku this is implemented through what we call "behaviors".

A behavior is a very powerful concept introduced by the Framework which allows an object to be extended at runtime. As their name suggest, they simply add an additional behavior to objects implementing them, *e.g.* the object becomes loggable, creatable, identifiable, etc.

We can make a controller loggable while bootstrapping (initializing) the component. For this, we just need to set the controller identifier configuration in the component bootstrapper file (`/resources/config/bootstrapper.php`):

{% highlight php startinline %}
array(
	'identifiers' => array(
		'com://admin/foo.controller.bar => array(
			'behaviors' => array('com:activities.controller.behavior.loggable')
		)
	)
);
{% endhighlight %}

By simply adding the previous code block in the bootstrapper file, Nooku is being told that the **Bar controller** of the **Foo component** should be made loggable when initializing the component.

From now on, when the Bar controller issues an add, edit or delete action, the loggable behavior will know about it and create activities for those actions.

## Exposing Activities

Nooku Activities includes a **JSON view** for rendering activity streams. These streams are fully compliant with the [Activity Streams specification](http://activitystrea.ms/specs/json/1.0/) which means that any client that knows the specification can automatically consume streams produced by the component.

The specification provides a complete description on how JSON should be serialized for exposing JSON activity streams. Following is a simple, minimal example of a JSON serialized activity as defined by the specification:

{% highlight json startinline %}
{
    "published": "2011-02-10T15:04:55Z",
    "actor": {
      "url": "http://example.org/martin",
      "objectType" : "person",
      "id": "tag:example.org,2011:martin",
      "image": {
        "url": "http://example.org/martin/image",
        "width": 250,
        "height": 250
      },
      "displayName": "Martin Smith"
    },
    "verb": "post",
    "object" : {
      "url": "http://example.org/blog/2011/02/entry",
      "id": "tag:example.org,2011:abc123/xyz"
    },
    "target" : {
      "url": "http://example.org/blog/",
      "objectType": "blog",
      "id": "tag:example.org,2011:abc123",
      "displayName": "Martin's Blog"
    }
  }

{% endhighlight %}

In Nooku Activities we pushed the limit a bit further by extending the specification and making streams "smarter". We have added additional properties such as **story** and **format**. Story is a plain text representation of the activity message while format provides an advanced templating system for allowing clients to render their own activity messages. An example of these new properties in action will get presented in the next section.

## Integrating Activities

After making one or more controllers loggable, the next step is to integrate Nooku Activities in the component so that its activities may be reached and made available to the outer world.

We may do this by simply adding an **activity controller** which extends from the base activity controller:

{% highlight php %}
<?php

class ComFooControllerActivity extends ComActivitiesControllerActivity
{
}
{% endhighlight %}


This alone enables the Foo component to expose JSON activity streams. The streams are made available through the following URL:

```
/index.php?option=com_foo&view=activities&format=json&layout=stream
```

The resulting output should look something like the following:

{% highlight json %}
{
	"version": "1.0",
	"links": {
		"self": {
			"href": "http://site.dev/administrator/index.php?option=com_todo&view=activities&format=json&layout=stream",
			"type": "application/json; version=1.0"
		}
	},
	"meta": {
		"offset": 0,
		"limit": 20,
		"total": 1
	},
	"entities": [
		{
			"id": "cc4978e5a89a422d90f23b80b6404dc0",
			"title": "<a href="http://site.dev/administrator/index.php?option=com_users&task=user.edit&id=951">Super User</a> <span >created</span> a new <span >item</span> with the title <a class="object" href="http://site.dev/administrator/index.php?option=com_todo&view=item&id=6">Pay phone bill</a>",			"story": "Super User created a new item with the title Pay phone bill",
			"published": "2014-12-18T15:57:04+00:00",
			"verb": "add",
			"format": "{actor} {action} a new {object.type} with the title {object}",
			"actor": {
				"type": {
					"objectName": "user",
					"displayName": "user"
				},
				"id": "951",
				"url": "http://site.dev/administrator/index.php?option=com_users&task=user.edit&id=951",
				"objectName": "Super User",
				"displayName": "Super User"
			},
			"action": {
				"objectName": "created",
				"displayName": "created"
			},
			"object": {
				"id": "6",
				"objectName": "Pay phone bill",
				"type": {
					"objectName": "item",
					"displayName": "item"
				},
				"url": "http://site.dev/administrator/index.php?option=com_todo&view=item&id=6",
				"attributes": {
					"class": [
						"object"
					]
				},
				"displayName": "Pay phone bill"
			},
			"generator": {
				"objectName": "com_activities",
				"type": {
					"objectName": "component",
					"displayName": "component"
				},
				"displayName": "com_activities"
			},
			"provider": {
				"objectName": "com_activities",
				"type": {
					"objectName": "component",
					"displayName": "component"
				},
				"displayName": "com_activities"
			}
		}
	],
	"linked": [ ]
}
{% endhighlight %}

Not all activities are rendered the same. Nooku activities includes a **powerful API** for working with activities. By using this API, each single activity may be shaped and configured so that it behaves as an entity of its own. The implementer have full control on how the activity is rendered, stored and the amount of information that gets exposed.

As shown in the above code examples, Nooku Activities may be used AS IS by simply adding a few lines of code. The component may also serve as the backbone of a more complex activity logging application. Each single part of the component may be extended and overridden.

As an example, adding a model class in `/model/activities.php` is all that is needed for specializing the activities model:

{% highlight php %}
<?php

class ComFooModelActivities extends ComActivitiesModelActivities
{
}
{% endhighlight %}

It is as simple as that!

## What is new?

Since [Activities 1.0](http://www.nooku.org/blog/2012/05/activity-streams-with-com_activities/), we have been working really hard on improving the component. Today, Nooku Activities 2.0 provides a **refreshened architecture** heavily inspired by the Activity Streams specification. The following features are among the most important additions in this new major release:

- Complete API for working and manipulating activities.
- Improved JSON serialization.
- Made activities fully translatable.
- Re-factored loggable package.

Nooku Activities can be found in our [Nooku Github space](https://github.com/nooku/nooku-activities/). The component can be installed using [composer](https://packagist.org/packages/nooku/activities-component/):

```
composer require nooku/nooku-activities:2.*
```

Feel free to fork it, break it and improve it! Pull Requests are of course always welcome!

We hope that you will enjoy working with this component as much as we have.

Happy coding!