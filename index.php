<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Nooku</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">
	
	<!-- Le styles -->
	<link href="css/default.css?v=2" rel="stylesheet">
	<link href="css/responsive.css" rel="stylesheet">	
</head>

<body>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="#">Nooku</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
                <li class="active"><a href="#">About</a></li>
                <li><a href="#about">Framework</a></li>
                <li><a href="#server">Server</a></li>
                <li><a href="#blog">Community</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
    
    <div class="wrap wrap-header">
        <div class="container">
            <div class="row">
                <div class="span12">
                    <h1>A platform for creating web applications, with less code.</h1>
                    <p class="lead">By drastically reducing the amount of code you need to write, Nooku helps you to create powerful web applications easily. Using the web technologies you know and love: <strong>PHP</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong></p>
                </div>
            </div>
        </div>
    </div>
        
    <div class="wrap">
        <div class="container">
            <h2>How is the Nooku different?</h2>
            <div class="row">
                <div class="span4">
                    <h3>Object Oriented design</h3>
                    <p>The solid architecture makes use of the latest Object Oriented features in PHP, such as class autoloading, interfaces and visibility.</p>
                </div>
                <div class="span4">
                    <h3>Dedicated team</h3>
                    <p>Driven by a professional team of developers, lead by Johan Janssens. Co-founder of Joomla and the Lead Architect of the Joomla 1.5 Framework.</p>
                </div>
                <div class="span4">
                    <h3>Design pattern based</h3>
                    <p>Nooku Framework features a near zero-code MVC, an ORM with table behaviors, a powerful Chain of Command, an Object Factory with dependency injection, Lazy Loading, Mixins, Decorators, and more.</p>
                </div>
                <div class="span4">
                    <h3>Unparalleled extensibility</h3>
                    <p>Every part of Nooku Framework, and of extensions powered by the framework, can be extended, re-used, and replaced.</p>
                </div>
                <div class="span4">
                    <h3>Intuitive API</h3>
                    <p>Learn once, apply everywhere: the consistent API is easy to learn, and a joy to work with.</p>
                </div>
                <div class="span4">
                    <h3>Extremely lightweight</h3>
                    <p>Nooku Framework has no dependencies on PECL extensions or PEAR libraries or any other libraries. Large, monolithic libraries are avoided in favor of optimized solutions.</p>
                </div>
            </div>
            
            <h2>Getting started with Nooku is easy.</h2>
            <div class="row">
                <div class="span6">
                    <p>Nooku Server is built on top of Vagrant which uses Oracle’s VirtualBox to build configurable, lightweight, and portable virtual machines dynamically.</p>
                </div>
                <div class="span6">
                    <ol>
                        <li>Download and install VirtualBox. Nothing else needs to be done, you even don't need to open it after install, Nooku Server uses the command line interface of VirtualBox.</li>
                        <li>Download and install Vagrant. Nooku Server  Vagrant box uses a YAML configuration file to create hosts</li>
                    </ol>
                    <pre># vagrant up</pre>
                </div>
            </div>
        </div>
    </div>
    
    <div class="wrap wrap-footer">
        <div class="container">
            <div class="row">
                <div class="span6">
                    <ul class="nav nav-pills">
                        <li><a href="#"><i class="icon-facebook-sign"></i> Facebook</a></li>
                        <li><a href="#"><i class="icon-twitter-sign"></i> Twitter</a></li>
                        <li><a href="#"><i class="icon-github-sign"></i> Github</a></li>
                    </ul>
                </div>
                <div class="span6">
                    Copyright 2012 Nooku
                </div>
            </div>
        </div>
    </div>

    <script src="components/jquery/jquery.min.js"></script>
    <script src="components/bootstrap/js/bootstrap-collapse.js"></script>
</body>
</html>
