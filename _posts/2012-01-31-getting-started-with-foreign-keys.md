---
title: Getting started with foreign keys
author: Gergo
layout: post
permalink: /blog/2012/01/getting-started-with-foreign-keys/
dsq_thread_id:
  - 558967726
categories:
  - Framework
  - Tutorial
tags:
  - development
---

  <p>
    An often asked question on the Nooku Framework mailing list is how to deal with relations in databases. Nooku Framework doesn&#8217;t support relations out of the box yet, but fortunately the InnoDB engine in MySQL does!
  </p>
  
  <p>
    There are three important rules that must be met in order to create relations:
  </p>
  
  <ol>
    <li>
      Both tables must be InnoDB tables and must not be TEMPORARY tables.
    </li>
    <li>
      Keys must have similar internal data types.
    </li>
    <li>
      Both foreign and referenced keys need to be indexed.
    </li>
  </ol>
  
  <h3 dir="ltr">
    A basic example
  </h3>
  
  <p>
    Let&#8217;s see the basics through an example:
  </p>
  
  <p>
    Assume that we have an articles table with two columns: article_id and title. We have an authors table as well with the columns: author_id and name. Here is the SQL code for the tables:
  </p>
  
{% prism sql %}
CREATE TABLE IF NOT EXISTS `articles` (
`article_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`title` VARCHAR(255) NOT NULL DEFAULT '',
PRIMARY KEY (`article_id`)
) ENGINE=InnoDB DEFAULT CHARACTER SET=utf8;
CREATE TABLE IF NOT EXISTS `authors` (
`author_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL DEFAULT '',
PRIMARY KEY (`author_id`)
) ENGINE=InnoDB DEFAULT CHARACTER SET=utf8;
{% endprism %}
  
  <p>
    We want to assign authors to articles. An author can belong to more than one articles, and an article can belong to more than one authors. So this is a many-to-many relation. That&#8217;s why we need a relation table too, which has article_id and author_id columns:
  </p>
  
{% prism sql %}
CREATE TABLE IF NOT EXISTS `articles_authors` (
`article_id` INT UNSIGNED NOT NULL,
`author_id` INT UNSIGNED NOT NULL,
FOREIGN KEY (`article_id`)
REFERENCES `articles`(`article_id`)
ON DELETE CASCADE,
FOREIGN KEY (`author_id`)
REFERENCES `authors`(`author_id`)
ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARACTER SET=utf8;
{% endprism %}

  <p>
    As you can see, we specified the foreign keys with CASCADE and RESTRICT options. Let’s try to delete an article. Notice that relations in the articles_authors table are deleted with it automatically. Now let’s try to remove an author. If the author is referenced in the relation table, then MySQL refuses to delete it. This ensures referential integrity.
  </p>
  
  <h3 dir="ltr">
    Keeping referential integrity
  </h3>
  
  <p>
    By using InnoDB, you can prevent accidental removal of referenced rows. Other than its roboust data management features, it has usability advantages too. For example some of the database management tools support foreign keys too. For example in Sequel Pro, an arrow is displayed next to the column’s value, and it takes you to the referenced row when you click on it. This little feature can be useful many times.
  </p>
  
  <div>
    <a title="foreignkeys by joomlatools, on Flickr" href="http://www.flickr.com/photos/joomlatools/6328763089/"><img src="http://farm7.static.flickr.com/6120/6328763089_2a1e7045a3_o.png" alt="foreignkeys" width="122" height="90" /></a>
  </div>
  
  <p>
    InnoDB has become the default engine in MySQL 5.5 and has many features over MyISAM. I am highly recommending every developer to consider using it in their applications.
  </p>
  
  <p>
    This was just a basic introduction to foreign keys, it is capable of much more! If you are interested, visit the <a href="http://dev.mysql.com/doc/refman/5.1/en/innodb-foreign-key-constraints.html">MySQL Reference Manual</a>.
  </p>
