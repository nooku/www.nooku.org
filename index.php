<!-- $feature-text = 6 -->

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Nooku</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">
	
	<!-- Le styles -->
	<link href="less/default.css?v=3" rel="stylesheet">
    
    <script type="text/javascript" src="components/google-code-prettify/src/prettify.js"></script>
    
    <script type="text/javascript" src="//use.typekit.net/eow5fmw.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>

<body>        
    <div class="section header">
        <div class="container">
            <div class="row">
                <div class="brand span8">
                    <img src="images/logo.png" height="60px" width="123px" />
                </div>
                <div class="span4">
                    <div class="navbar pull-right">
                        <div class="navbar-inner">
                            <ul class="nav">
                                <li class="active"><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="section teaser text-center">
        <div class="container">
            <h1>Create web applications with less code</h1>
            <p class="lead">By drastically reducing the amount of code you need to write,
                Nooku helps you to create powerful web applications easily.
                Using the web technologies you know and love: <strong>PHP</strong>, <strong>HTML</strong>,
                <strong>CSS</strong>, and <strong>JavaScript</strong></p>
        </div>
    </div>
    
    <div class="section about">
        <div class="container">
            <!-- @import 'pages/about.html' -->
            <?php echo file_get_contents('pages/about.html') ?>
        </div>
    </div>
    
    <div class="section footer">
        <div class="container">
            <div class="row">
                <div class="span6">
                    <ul class="nav nav-pills">
                        <li><a href="#"><i class="icon-facebook-sign"></i> Facebook</a></li>
                        <li><a href="#"><i class="icon-twitter-sign"></i> Twitter</a></li>
                        <li><a href="#"><i class="icon-github-sign"></i> Github</a></li>
                    </ul>
                </div>
                <div class="copyright span6">
                    <p>Copyright 2013 <a href="http://www.timble.net">Timble</a></p>
                </div>
            </div>
        </div>
    </div>

    <script src="components/jquery/jquery.min.js"></script>
    <script src="components/bootstrap/js/bootstrap-collapse.js"></script>
    
    <script src="js/application.js"></script>    
</body>
</html>
