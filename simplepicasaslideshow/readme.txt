



Download the .zip file through the download button above, or grab a copy of it off github.com.

Extract the .zip. You'll find the full example files that generate this webpage in there.
We're only going to take certain parts. What you will end up needing from the css folder is the picasa-slideshow.css & lightbox.css files. From the js folder you'll need the jquery-1.10.2.min.js, jquery.simple.picasa.slideshow.js & the lightbox-2.6.min.js files. You can use the jquery.simple.picasa.slideshow-min.js file if you want the minified version of the plugin (recommended). That's it!

Place the .css files in your css folder and link them up in the <head> section of your HTML page, like so:

	<link rel="stylesheet" href="css/picasa-slideshow.css" />
	<link rel="stylesheet" href="css/lightbox.css" />

It's usually a good idea to add these links after you've already linked your main stylesheet. Lightbox can get buggy if you accidentally override one of its styles with one of your own.

Next, you'll want to link the .js files at the bottom of your HTML page, before your own main.js or whatever file. After your footer and before the closing </body> tag, add these lines:

	<script src="js/jquery-1.10.2.min.js"></script>
	<script src="js/lightbox-2.6.min.js"></script>
	<script src="js/jquery.simple.picasa.slideshow.js"></script>

This adds jQuery to your site, the Lightbox plugin, and the Simple Picasa Slideshow plugin. Simple so far? If you know what you're doing, it's a good idea to include these .js files in your main.js or whatever file. Use CodeKit or a Javascript require plugin or something. The less HTTP requests you make to a server, the faster your site will be. These little guys won't noticeably slow you down though. I'm addicted to speed, that's all.

Now you'll want to grab the images folder. Move it to the root of your project (at the same level as your index.html file). The html we're about to add, & the lightbox plugin, both look for images in the images folder. You can delete the "page" folder from inside the images folder, after you move it to your own project. Those are just images that make this page work. :) 

Once all this is said and done, we're ready to add some HTML.




	<!-- slideshow wrapper -->
	<div class='picasa-wrapper'>

	    <img id="prevbtn" src="images/prev.png" alt="previous arrow" width="50" height="45"/>

	    <img id="nextbtn" src="images/next.png" alt="next arrow" width="50" height="45"/>

	    <!-- slideshow inserted via JS into this div -->
	    <div class='picasagallery'>
	    </div><!-- /.picasagallery-->

	</div><!-- /.picasa-wrapper-->


Here's what we've got. You've got a wrapper that contains the previous and next buttons, then a .picasagallery div that hold the images. That's all folks. If you need to make adjustments to how the .picasa-wrapper container sits on your page, just open up the picasa-slideshow.css file and fiddle around with that .picasa-wrapper class a bit. I have faith in you!

Now that we have our HTML in order, let's add the magic javascript stuff that'll make it all happen. After that HTML code we just put in our page, paste this script: 


	<script>
	    $('.picasagallery').picasa_slideshow({
	      username: 'calaquendidolls',
	      album: 'PicasaKittensDayitaAugustus',
	      speed: '5000'
	    });
	</script>

What this does is create a new instance of the plugin. If you know what you're doing, feel free to ditch the <script> tags and move that code over to your main.js or whatever file. You know how it works. If you aren't so sure what's happening, just copy and paste that script exactly as it is.

Now for the fun part! See where it says "username" and "album"? That's where you place the username of the person hosting the album, and the album name for the album you'd like to display. Here's a tip: if you're having trouble getting this part to work, the username is either the first part of the users gmail address ("me" from "me@gmail.com") or you can use their user ID that you'll see up in the url in the address bar. The album name can be found on the site or, again, in the url when you're on picasa's web albums page. Here's a tip too: the web album you're trying to display has to be made public. In the sharing settings, when you go to actually share the album, it will ask who you'd like to share it with. When you click to start typing a username or whatever, you'll see an option appear for "Public". Yes, THAT'S how you make an album public (at least at the time of this writing). Kind of silly, if you ask me.

Speed! See that "speed" option in the script you pasted? You guessed it! That's how fast the slides flip. That number is milliseconds. 5000 = 5 seconds. You get the point. Tinker!


I hope this works out for you! 

Feel free to check out my portfolio and my other projects at: http://adamgedney.com

Cheers!

Adam