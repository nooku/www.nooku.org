---
title: MySQL Query Cache
author: Shayne
layout: post
permalink: /2010/12/mysql-query-cache/
dsq_thread_id:
  - 194535248
categories:
  - Server
tags:
  - development
  - performance
---
[<img class="alignright" src="http://farm6.static.flickr.com/5288/5277164965_e437f0f216_m.jpg" alt="MySQL Logo" width="192" height="107" />][1] As some would be aware we have been working on a multi-site installation of Joomla! that is running in excess of 130 sites for the Belgium Police. Needless to say performance is paramount hence we have spent a considerable amount of time researching and deploying the right server technologies. This has included the use of [Nginx][2] rather than [Apache][3], [APC][4] for opcode caching and a little gem in [MySQL][5] called query_cache.

Query cache is something that to my knowledge only existed in MySQL until Oracle released 11g. It’s not the same as the caching historically found in Oracle and Microsoft SQL, both of which would cache the method/procedure but not the result set.

MySQL’s query cache is a must have configuration which is as simple to configure as to allocate it with some memory. To see if you’re already running it try this in command line&#8230;

<!--more-->

`mysql> show variables like 'query_cache_size';<br />
+------------------------+---------------+<br />
| Variable_name          | Value         |<br />
+------------------------+---------------+<br />
| query_cache_size       | 0             |<br />
+------------------------+---------------+<br />
1 row in set (0.00 sec)`

As the value is 0 we are not running query cache. To get it running we need to change the size (allocating it an amount of memory. For example to set the cache size to 250M we would could do it via the command line with&#8230;

`mysql> set global query_cache_size=250000000;`

Now we check again and find&#8230;

`mysql> show variables like 'query_cache_size';`

` `

`+------------------------+--------------------+<br />
| Variable_name          | Value              |<br />
+------------------------+--------------------+<br />
| query_cache_size       | 249999360          |<br />
+------------------------+--------------------+<br />
1 row in set (0.00 sec)`

Once that has been set we can immediately see some results like so&#8230;

`mysql> show status like 'qc%';<br />
+------------------------------------+------------------+<br />
| Variable_name                      | Value            |<br />
+------------------------------------+------------------+<br />
| Qcache_free_blocks                 | 8                |<br />
| Qcache_free_memory                 | 245510216        |<br />
| Qcache_hits                        | 2428147          |<br />
| Qcache_inserts                     | 1313269          |<br />
| Qcache_lowmem_prunes               | 273914           |<br />
| Qcache_not_cached                  | 247762           |<br />
| Qcache_queries_in_cache            | 602              |<br />
| Qcache_total_blocks                | 1519             |<br />
+------------------------------------+------------------+<br />
8 rows in set (0.00 sec)`

The important bits&#8230;

*   **Qcache_hits**: number of times queries have been served from the cache.
*   **Qcache_inserts**: number of queries that have been inserted into the cache.
*   **Qcache\_lowmem\_prunes**: queries that have been removed from cache to provide space for new cached queries. If this is high it is an indication that you should increase your memory allocation.
*   **Qcache\_not\_cached**: number of queries that were not cacheable.

In this example query_cache was originally running with a mere 20M of memory allocated hence the high number of prunes. More recently memory was increased to 250M with the result that prunes have pretty much stopped.

Also interesting is the number of queries unable to be cached. Whilst only SELECT queries are cached they can be made non-cacheable through the use of certain functions such as CURRENT_DATE. Additionally only 100% identical queries are served from the cache, this includes things such as case and use of spaces.

For bigger projects performance is key. With [Nooku Server][6] we are working on optimizing the Joomla 1.5 core queries to improve the query cache hit rate. If you are a Joomla!’s extension developer who want&#8217;s to play in the big league make sure to read up on how query cache works and test your queries to make sure they are cacheable. It really can make a huge difference in the performance of your extension.

Happy coding !

Update 20/12/2010 : The peeps at [@joomlaworks][7] twitted about their optimized configuration file for MySQL. You can find it here : <http://snipt.net/fevangelou/optimised-mycnf-configuration/> Thanks !

 [1]: http://www.flickr.com/photos/nooku/5277164965/ "MySQL Logo by Nooku, on Flickr"
 [2]: http://nginx.org/
 [3]: http://httpd.apache.org/
 [4]: http://pecl.php.net/package/APC
 [5]: http://www.mysql.com/
 [6]: http://blog.nooku.org/2010/12/nooku-server-joomla-on-steroids/
 [7]: http://twitter.com/#!/joomlaworks