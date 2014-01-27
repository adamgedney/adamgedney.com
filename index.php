<?php require 'controllers/formController.php'; ?>
<!DOCTYPE html>
<html lang="en">
<!-- Thanks for checking out my code!!


	Copyright Adam Gedney 10/21/13
	contact: adam.gedney@gmail.com
	http://adamgedney.com

"Good UI design is humble.” – Jono DiCarlo -->
<head>
	<title>Adam Gedney | Front End Designer & Developer | Portfolio</title>

	<!-- meta -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

	<!-- favicon & humans.txt -->
	<link type="text/plain" rel="author" href="/humans.txt" />
	<link rel="shortcut icon" href="http://adamshields.com/favicon.ico" />

	<!-- Googel fonts -->
	<link href='http://fonts.googleapis.com/css?family=Ubuntu:400,300,500' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Tangerine' rel='stylesheet' type='text/css'>

	<!-- Stylesheets -->
	<link rel="stylesheet" href="css/animate.css" />
	<link rel="stylesheet" href="css/main.css" />

	<!-- Google maps -->
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>

	<!--[if lt IE 9]>
	<script src="js/html5shiv.js"></script>
	<![endif]-->
</head>
	<body>

		<header>
			<h1 class="hide-text">Adam Gedney's Front-End Developer Portfolio</h1>
		</header>

			<div class="container">
				<div class="page landing">
					<div class="page-inner">
						<img class="profile-pic" src="images/profile.png" alt="Adam Gedney Profile Image" />
						<h1>My name is <span class="red">Adam <span class="hide-name">Gedney</span>.</span></h1>
							<h2>I'm a front-end developer.</h2>
						<h3 class="text-gray">(I also write & do <span class="underline">lots</span> of other things)</h3>
					</div><!-- /.page-inner-->
				</div><!-- /.page-->
				<div class="arrow-container">

						<div class="landing-arrow">
							<img src="images/landing-arrow.png" alt="landing page arrow image"/>
						</div><!-- /.landing-arrow-->

				</div><!-- /.arrow-container-->

				<div class="page like">
					<div class="page-inner">
						<h1 class="red">I like...</h1>

						<p>designing websites, logos & print collateral, <span class="red">being silly,</span> writing music & books. I build things, google things, think, read, & sometimes I update my <a class="underline light-gray" target="_blank" href="http://usabilityintelligence.com" >blog</a> too.</p>

						<div class="img-container">
							<a data-proj="I build websites & stuff" class="zig-zag animated" target="_blank" href="#"><span></span><img src="images/angelfire-thumb.jpg" title="My rendition of angelfire.com. Check it in my work section below." alt="likes image 1"/></a>
							
							<a data-proj="I like designing stuff" class="zig-zag-1 animated" target="_blank" href="#"><span></span><img src="images/pangea-thumb.jpg" title="Graphic design, & just design in general, are a passion of mine." alt="likes image 2"/></a>
							
							<a data-proj="This is Julie, my wife & stuff" class="zig-zag-2 animated" target="_blank" href="#"><span></span><img src="images/silly-thumb.jpg" title="I finally found the woman of my dreams. I couldn't be luckier. <3" alt="likes image 3"/></a>
							
							<a data-proj="Check out the music I've released & stuff" class="zig-zag-3 animated" target="_blank" href="https://itunes.apple.com/us/artist/adam-shields/id637020445"><span></span><img src="images/itunes-thumb.jpg" title="I've been writing electronic music for 20 years now. Ugh. I'm getting old!" alt="likes image 4"/></a>
							
							<a data-proj="This is my blog & stuff" class="zig-zag-4 animated" target="_blank" href="http://usabilityintelligence.com"><span></span><img src="images/ui-thumb.jpg" title="That's my blog, but you can find my book here: http://lifestyling.adamgedney.com" alt="likes image 5"/></a>
						</div><!-- /.like-img-container-->
					</div><!-- /.page-inner-->
				</div><!-- /.page-->

				<div class="page love">
					<div class="page-inner">
						<h1 class="red">I l<span class="heart">&hearts;</span>ve...</h1>

						<p><span class="red">design & {code},</span> UX, troubleshooting difficult problems, beaches,  synthesizers, Julie, close friends, & wine.</p>

						<p class="red subtext">These are the languages & frameworks I know.</p>

						<!-- <img class="web-logos" src="images/logos.png" alt="web logos"/> -->
						<div class="logo_cloud">
							<img class="air_l animated" src="images/logos/air.png" title="Adobe AIR" alt="web logos"/>
							<img class="as_l animated" src="images/logos/as.png" title="Actionscript, baby!" alt="web logos"/>
							<img class="cf_l animated" src="images/logos/cf.png" title="Coldfusion" alt="web logos"/>
							<img class="codeigniter_l animated" src="images/logos/codeigniter.png" title="Codeigniter" alt="web logos"/>
							<img class="css_l animated" src="images/logos/css.png" title="CSS 3" alt="web logos"/>
							<img class="drupal_l animated" src="images/logos/drupal.png" title="A little bit of Drupal" alt="web logos"/>
							<img class="ejs_l animated" src="images/logos/ejs.png" title="EJS templating in node.js is sweet" alt="web logos"/>
							<img class="express_l animated" src="images/logos/express.png" title="Express framework for node.js is rad" alt="web logos"/>
							<img class="ffmpeg_l animated" src="images/logos/ffmpeg.png" title="My new love, ffmpeg media converter" alt="web logos"/>
							<img class="github_l animated" src="images/logos/github.png" title="Can't live without git!" alt="web logos"/>
							<img class="handle_l animated" src="images/logos/handle.png" title="Handlebars templating for js is pretty hip" alt="web logos"/>
							<img class="html_l animated" src="images/logos/html.png" title="I eat HTML" alt="web logos"/>
							<img class="jquery_l animated" src="images/logos/jquery.png" title="JQuery is a dream" alt="web logos"/>
							<img class="js_l animated" src="images/logos/js.png" title="Javascript makes the world go round" alt="web logos"/>
							<img class="mongo_l animated" src="images/logos/mongo.png" title="Mongo DB is amazing" alt="web logos"/>
							<img class="mysql_l animated" src="images/logos/mysql.png" title="MySQL is an old dog we love dearly" alt="web logos"/>
							<img class="node_l animated" src="images/logos/node.png" title="node.js can do some wonderful things" alt="web logos"/>
							<img class="php_l animated" src="images/logos/php.png" title="PHP is the web" alt="web logos"/>
							<img class="sass_l animated" src="images/logos/sass.png" title="Can't live without my SASS CSS preprocessor" alt="web logos"/>
							<img class="terminal_l animated" src="images/logos/terminal.png" title="Terminal is for nerds. Unix Shell all the way!" alt="web logos"/>
							<img class="wp_l animated" src="images/logos/wp.png" title="Wordpress. We love your bloat. ;)" alt="web logos"/>
						</div><!-- /.logo_cloud-->
						
					</div><!-- /.page-inner-->
				</div><!-- /.page-->

				<div class="page double work" id="work">
					<div class="page-inner">
						<h1 class="red">I work...</h1>

						<p>hard. Trained by old school Italian construction workers at an early age, I have a strong work ethic & a love for diverse projects that <span class="red">challenge my creativity.</span></p>

						<a class="resume" target="_blank" href="resume/adamGedneyResume.pdf"><img src="images/pdf-icon.png" alt="download pdf icon"/>View my <span class="blue">Résumé.</span></a>

						<h3>Front-end Projects</h3>
						<div class="img-container">
								<a data-proj="SGWebMarketing.com" href="work/sgwebmarketing.html" ><span></span><img src="images/sgweb-thumb.jpg" alt="love image 1"/></a>
						
								<a data-proj="Gimmesauce.com" href="work/gimmesauce.html" ><span></span><img src="images/gimme-thumb.jpg" alt="love image 4"/></a>

								<a data-proj="Maceoplexmix.com" href="work/maceoplexmix.html" ><span></span><img src="images/maceo-thumb.jpg" alt="love image 2"/></a>

								<a data-proj="Angelfire.com redesign" href="work/angelfire-redesign.html" ><span></span><img src="images/angelfireMobile-thumb.jpg" alt="love image 3"/></a>
								
								<a data-proj="Jericho Canyon Vineyard" href="work/jericho-vineyard.html" ><span></span><img src="images/jericho-thumb.jpg" alt="love image 5"/></a>
							
						</div><!-- /.love-img-container-->

						<h3>Development Projects</h3>
						<div class="img-container">
							<a data-proj="Bloggity.org" href="work/bloggity-cms.html" ><span></span><img src="images/bloggityMac-thumb.jpg" alt="love image 1"/></a>
							
							<a data-proj="Picasa JQuery Plugin" href="work/simple-picasa.html" ><span></span><img src="images/picasa-thumb.jpg" alt="love image 2"/></a>
							
							<a data-proj="Mantissa Soft Synth" href="work/mantissa-synth.html" ><span></span><img src="images/mantissaSynth-thumb.jpg" alt="love image 3"/></a>
							
							<a data-proj="Madserv.us Auth API" href="work/madserv.html" ><span></span><img src="images/madserv-thumb.jpg" alt="love image 5"/></a>

							<a data-proj="Suprvideo.com Converter" href="work/suprvideo.html" ><span></span><img src="images/suprvideo-thumb.jpg" alt="love image 4"/></a>
						
						</div><!-- /.love-img-container-->

						<h3>Print / Graphic Design Projects</h3>
						<div class="img-container print_thumbs last">
							<!-- <img src="images/aubert-thumb.jpg" alt="love image 1"/>
							
							<img src="images/orbits-thumb.jpg" alt="love image 2"/>
							
							<img src="images/stzosima-thumb.jpg" alt="love image 3"/>
							
							<img src="images/meditrinaBiz-thumb.jpg" alt="love image 4"/>
							
							<img src="images/uiLogo-thumb.jpg" alt="love image 5"/> -->

							<a data-proj="Marketing Collateral" href="work/aubert-form.html" ><span></span><img src="images/aubert-thumb.jpg" alt="love image 1"/></a>
							
							<a data-proj="Advertising" href="work/orbitz-class-ad.html" ><span></span><img src="images/orbits-thumb.jpg" alt="love image 2"/></a>
							
							<a data-proj="Postcard Marketing" href="work/zosima-cards.html" ><span></span><img src="images/stzosima-thumb.jpg" alt="love image 3"/></a>
							
							<a data-proj="Business Cards" href="work/meditrina-business-cards.html" ><span></span><img src="images/meditrinaBiz-thumb.jpg" alt="love image 4"/></a>
							
							<a data-proj="Logos" href="work/ui-logo.html" ><span></span><img src="images/uiLogo-thumb.jpg" alt="love image 5"/></a>
						</div><!-- /.love-img-container-->

						<p class="quote" >“Patience, persistence and perspiration make an unbeatable combination for success.” <br> -Napoleon Hill</p>

					</div><!-- /.page-inner-->
				</div><!-- /.page-->

				<div class="page double contact" id="contact-jump">
					<div class="page-inner">
						<h1 class="red">Contact me...</h1>

						<p>if you’re interested in hiring me, working with me, or having me manage your next project. I'm not against contract work either.</p>

					</div><!-- /.page-inner-->
					
						<!-- Google Map -->
						<div id="map-canvas" >
						</div><!-- /#map-canvas _ -->
						
					<div class="page-inner">
						<div class="contact-body" id="contact">
							

							<div class="contact-content">
							
							<p><span class="red">I’m interested in working in the West Palm Beach to Miami area.</span>  But, if the opportunity is right, feel free to fly me around the world. <span class="dark-gray">Contact me</span> via this form, by phone, or email, even if it's just to say hi. <!-- <span class="red">&#9786;</span> --></p>

							<p class="info"><span class="red">Adam Shields Gedney</span>
								adam@adamgedney.com
								845.216.5030</p>

							<div class="contact-icons">
								<a class="no-tran" target="_blank" href="http://github.com/adamgedney"><img class="github-icon" src="images/github-icon.png" alt="github icon" /></a>
								
								<a class="no-tran" target="_blank" href="http://forrst.com"><img class="forrst-icon" src="images/forrst-icon.png" alt="forrst icon" /></a>
								
								<a class="no-tran" target="_blank" href="http://dribbble.com/adamgedney"><img class="dribbble-icon" src="images/dribbble-icon.png" alt="dribbble icon" /></a>
								
								<a class="no-tran" target="_blank" href="http://facebook.com/shieldsadam"><img class="fb-icon" src="images/fb-icon.png" alt="facebook icon" /></a>

								<a class="no-tran" target="_blank" href="http://linkedin.adamgedney.com"><img class="linkedin-icon" src="images/linkedin-icon.png" alt="linkedin icon" /></a>
							</div><!-- /.contact-icons-->
						
							</div><!-- /.contact-content-->

							<div class="contact-form">
								<form action="?controller=form" method="post"> 
									<input type="text" name="name" placeholder="FULL NAME"/>
									
									<input id="email" type="email" name="email" placeholder="EMAIL ADDRESS" />
									<p class="error email-error"></p>

									<input id="phone" type="text" name="phone" placeholder="PHONE NUMBER" />
									<p class="error phone-error"></p>

									<textarea name="message" placeholder="MESSAGE"></textarea>

									<input id="contact-submit-button" type="submit" value="CONTACT ME"/>
								</form>
						
							</div><!-- /.contact-form-->
						</div><!-- /.contact-body-->
					</div><!-- /.page-inner-->
				</div><!-- /.page-->	
			</div><!-- /.container-->	

		<footer>
		<p><span class="red">&copy;2014</span> adamgedney.com</p>
		</footer>

		<!-- Scripts -->
		<script src="js/jquery-1.10.2.min.js"></script>
		<script src="js/jquery.event.special.js"></script>
  		<script src="js/jquery.easing.min.js"></script>
  		<script src="js/jquery.scrollsnap.js"></script>
		<script src="js/main.js"></script> 
	</body>
</html>
