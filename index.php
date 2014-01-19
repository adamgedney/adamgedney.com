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
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> -->

	<!-- favicon & humans.txt -->
	<link type="text/plain" rel="author" href="/humans.txt" />
	<link rel="shortcut icon" href="http://adamshields.com/favicon.ico" />

	<!-- Googel fonts -->
	<link href='http://fonts.googleapis.com/css?family=Ubuntu:400,300,500' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Tangerine' rel='stylesheet' type='text/css'>

	<!-- Stylesheets -->
	<link rel="stylesheet" href="css/animate.css" />
	<link rel="stylesheet" href="css/responsive-gs-12col.css" /><!-- resopnsive.gs grid system -->
	<link rel="stylesheet" href="css/ie.css" /><!-- resopnsive.gs grid system -->
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
						<h1>My name is <span class="red">Adam Gedney.</span></h1>
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
							<a class="zig-zag animated" target="_blank" href="#"><img src="images/angelfire-thumb.jpg" alt="likes image 1"/></a>
							
							<a class="zig-zag-1 animated" target="_blank" href="#"><img src="images/pangea-thumb.jpg" alt="likes image 2"/></a>
							
							<a class="zig-zag-2 animated" target="_blank" href="#"><img src="images/silly-thumb.jpg" alt="likes image 3"/></a>
							
							<a class="zig-zag-3 animated" target="_blank" href="https://itunes.apple.com/us/artist/adam-shields/id637020445"><img src="images/itunes-thumb.jpg" alt="likes image 4"/></a>
							
							<a class="zig-zag-4 animated" target="_blank" href="http://usabilityintelligence.com"><img src="images/ui-thumb.jpg" alt="likes image 5"/></a>
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
							<img class="air_l" src="images/logos/air.png" alt="web logos"/>
							<img class="as_l" src="images/logos/as.png" alt="web logos"/>
							<img class="cf_l" src="images/logos/cf.png" alt="web logos"/>
							<img class="codeigniter_l" src="images/logos/codeigniter.png" alt="web logos"/>
							<img class="css_l" src="images/logos/css.png" alt="web logos"/>
							<img class="drupal_l" src="images/logos/drupal.png" alt="web logos"/>
							<img class="ejs_l" src="images/logos/ejs.png" alt="web logos"/>
							<img class="express_l" src="images/logos/express.png" alt="web logos"/>
							<img class="ffmpeg_l" src="images/logos/ffmpeg.png" alt="web logos"/>
							<img class="github_l" src="images/logos/github.png" alt="web logos"/>
							<img class="handle_l" src="images/logos/handle.png" alt="web logos"/>
							<img class="html_l" src="images/logos/html.png" alt="web logos"/>
							<img class="jquery_l" src="images/logos/jquery.png" alt="web logos"/>
							<img class="js_l" src="images/logos/js.png" alt="web logos"/>
							<img class="mongo_l" src="images/logos/mongo.png" alt="web logos"/>
							<img class="mysql_l" src="images/logos/mysql.png" alt="web logos"/>
							<img class="node_l" src="images/logos/node.png" alt="web logos"/>
							<img class="php_l" src="images/logos/php.png" alt="web logos"/>
							<img class="sass_l" src="images/logos/sass.png" alt="web logos"/>
							<img class="terminal_l" src="images/logos/terminal.png" alt="web logos"/>
							<img class="wp_l" src="images/logos/wp.png" alt="web logos"/>
						</div><!-- /.logo_cloud-->
						
					</div><!-- /.page-inner-->
				</div><!-- /.page-->

				<div class="page double work" id="work">
					<div class="page-inner">
						<h1 class="red">I work...</h1>

						<p>hard. Trained by old school Italian construction workers at an early age, I have a strong work ethic & a love for diverse projects that <span class="red">challenge my creativity.</span></p>

						<a class="resume" target="_blank" href="resume/adamGedneyResume.pdf"><img src="images/pdf-icon.png" alt="download pdf icon"/>View my <span class="blue">Résumé.</span></a>

						<h3>Front-end</h3>
						<div class="img-container">
							<a href="work/sgwebmarketing.html" ><img src="images/sgweb-thumb.jpg" alt="love image 1"/></a>
							
							<a href="work/gimmesauce.html" ><img src="images/gimme-thumb.jpg" alt="love image 4"/></a>

							<a href="work/maceoplexmix.html" ><img src="images/maceo-thumb.jpg" alt="love image 2"/></a>

							<a href="work/angelfire-redesign.html" ><img src="images/angelfireMobile-thumb.jpg" alt="love image 3"/></a>
							
							<a href="work/jericho-vineyard.html" ><img src="images/jericho-thumb.jpg" alt="love image 5"/></a>
						</div><!-- /.love-img-container-->

						<h3>Development</h3>
						<div class="img-container">
							<a href="work/bloggity-cms.html" ><img src="images/bloggityMac-thumb.jpg" alt="love image 1"/></a>
							
							<a href="work/simple-picasa.html" ><img src="images/picasa-thumb.jpg" alt="love image 2"/></a>
							
							<a href="work/mantissa-synth.html" ><img src="images/mantissaSynth-thumb.jpg" alt="love image 3"/></a>
							
							<a href="work/madserv.html" ><img src="images/madserv-thumb.jpg" alt="love image 5"/></a>

							<a href="work/suprvideo.html" ><img src="images/suprvideo-thumb.jpg" alt="love image 4"/></a>
						
						</div><!-- /.love-img-container-->

						<h3>Print / Graphic Design</h3>
						<div class="img-container print_thumbs last">
							<img src="images/aubert-thumb.jpg" alt="love image 1"/>
							
							<img src="images/orbits-thumb.jpg" alt="love image 2"/>
							
							<img src="images/stzosima-thumb.jpg" alt="love image 3"/>
							
							<img src="images/meditrinaBiz-thumb.jpg" alt="love image 4"/>
							
							<img src="images/uiLogo-thumb.jpg" alt="love image 5"/>

							<!-- <a href="work/aubert-form.html" ><img src="images/aubert-thumb.jpg" alt="love image 1"/></a>
							
							<a href="work/orbitz-class-ad.html" ><img src="images/orbits-thumb.jpg" alt="love image 2"/></a>
							
							<a href="work/zosima-cards.html" ><img src="images/stzosima-thumb.jpg" alt="love image 3"/></a>
							
							<a href="work/meditrina-business-cards.html" ><img src="images/meditrinaBiz-thumb.jpg" alt="love image 4"/></a>
							
							<a href="work/ui-logo.html" ><img src="images/uiLogo-thumb.jpg" alt="love image 5"/></a> -->
						</div><!-- /.love-img-container-->

						<p class="quote" >“Patience, persistence and perspiration make an unbeatable combination for success.” - Napoleon Hill</p>

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

							<div class="contact-content">
							
							<p><span class="red">I’m interested in working in the West Palm Beach to Miami area.</span>  But, if the opportunity is right, feel free to fly me around the world. <span class="dark-gray">Contact me</span> via the form at left, by phone or email, even if it's just to say hi. <!-- <span class="red">&#9786;</span> --></p>

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
