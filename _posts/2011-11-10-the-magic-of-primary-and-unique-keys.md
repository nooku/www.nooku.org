---
title: The magic of primary and unique keys
author: Gergo
layout: post
permalink: /blog/2011/11/the-magic-of-primary-and-unique-keys/
dsq_thread_id:
  - 467311219
categories:
  - Framework
  - Tutorial
tags:
  - database
---
<div>
  One of the first things Nooku developers experience with Nooku Framework is the magic with database tables. It’s a redemption for Joomla developers that there is no need to create table classes which describe the tables’ structure. Nooku Framework is smart enough to deal with primary and unique keys out of the box. And to go further, it can handle composite keys too, which is rarely supported by other PHP frameworks.<br /> <strong> </strong>
</div>

<h3 dir="ltr">
  It’s all in the schema
</h3>

If primary and unique keys are properly defined in the database schema, it is possible to retrieve an item without writing any line of code. In com\_harbour’s boats table, harbour\_boat_id is a primary key, and slug is a unique key. It is possible to get the same boat by using any of these keys:

{% highlight php %}
index.php?option=com_harbour&view=boat&id=4
index.php?option=com_harbour&view=boat&slug=queen-mary-2
{% endhighlight %}

There is an important thing to note here. If an identity column exists (an auto increment key), the name &#8220;id&#8221; is used for it in the framework. So for example the column harbour\_boat\_id is accessed as $boat->id.


  <h3 dir="ltr">
    A look under the hood
  </h3>
  
  <p>
    Let’s look deep into how this works under the hood. In the first step, the database class fetches column and index information from the database. In the second step, the model requests the parsed information from the table class and creates a state for each key.
  </p>
  
  <p>
    <!--more-->
  </p>
  
  <p>
    In the model, states are inserted for primary and unique keys automatically. It uses KConfigState::insert, which accepts 5 parameters:
  </p>
  
  <ul>
    <li>
      <strong>name</strong>: The name of the state, in this case the name of the column.
    </li>
    <li>
      <strong>filter</strong>: Defines how the value should be validated and sanitized. This information is also fetched from the table schema. See KDatabaseAdapterMysqli::_typemap for how different types are mapped to filters.
    </li>
    <li>
      <strong>default</strong>: The state’s default value. This is set to NULL by the model when primary and unique keys are inserted.
    </li>
    <li>
      <strong>unique</strong>: It tells the state whether the variable is unique or not. In this case the value is obviously TRUE.
    </li>
    <li>
      <strong>required</strong>: This fifth parameter is important in case of composite unique and primary keys. Composite keys consist of two or more columns. In this parameter, Nooku Framework stores the name of the other columns which belong to the key. This way, it can be easily validated if all states are set for a composite key.
    </li>
  </ul>
  
  <h3 dir="ltr">
    Fetching a row
  </h3>
  
  <p>
    If the request is unique (it contains at least one unique state), Nooku Framework is able to fetch the row. The magic happens in KModelTable::_buildQueryWhere:
  </p>
  
{% highlight php %}
$states = $this-&gt;_state-&gt;getData(true);

if(!empty($states))
{
    $states = $this-&gt;getTable()-&gt;mapColumns($states);
    foreach($states as $key =&gt; $value)
    {
        if(isset($value)) {
            $query-&gt;where('tbl.'.$key, 'IN', $value);
        }
    }
}
{% endhighlight %}
  
  <p>
    The 1st line requests the unique states from KConfigState. If there are any (3rd line), it iterates through them (6th line) and adds a WHERE statement to the query (9th line).
  </p>
  
  <p>
    As you can see, Nooku Framework does a powerful job in the background. It doesn’t require you to specify information that is already out there. With this magic, developers save a lot of time.
  </p>
  
  <p>
    In a next post we will dive deeper into foreign keys. Happy coding !
  </p>
