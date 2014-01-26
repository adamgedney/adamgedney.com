$(function(){

//globals
var logo_cloud_frame = false;

// Google maps
	function initialize() {
		// Source: http://stiern.com/tutorials/adding-custom-google-maps-to-your-website/
		//
		var latlng = new google.maps.LatLng(26.7153, -80.0534);
		
		var settings = {
			zoom: 8,
			scrollwheel: false,
			center: latlng,
			mapTypeControl: true,
			mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
			navigationControl: true,
			navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
			mapTypeId: google.maps.MapTypeId.ROADMAP
    		};

    	var map = new google.maps.Map(document.getElementById("map-canvas"), settings);

	var companyLogo = new google.maps.MarkerImage('images/pin.png',
		new google.maps.Size(451,118),
		new google.maps.Point(0,0),
		new google.maps.Point(0,118)
	);

	var companyPos = new google.maps.LatLng(26.7153, -80.0534);
	
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyLogo,
		title:"Right here!"
	});
	}// /initialize()
	
	initialize();











	//contact icon hover states
	//on mouse over
	$(document).on('mouseover', 'img.github-icon', function(){
		$(".github-icon").attr('src', 'images/github-icon-hover.png');
	});

	$(document).on('mouseover', 'img.forrst-icon', function(){
		$(".forrst-icon").attr('src', 'images/forrst-icon-hover.png');
	});

	$(document).on('mouseover', 'img.linkedin-icon', function(){
		$(".linkedin-icon").attr('src', 'images/linkedin-icon-hover.png');
	});

	$(document).on('mouseover', 'img.dribbble-icon', function(){
		$(".dribbble-icon").attr('src', 'images/dribbble-icon-hover.png');
	});

	$(document).on('mouseover', 'img.fb-icon', function(){
		$(".fb-icon").attr('src', 'images/fb-icon-hover.png');
	});







	//contact icon hover states
	//on mouse out
	$(document).on('mouseout', 'img.github-icon', function(){
		$(".github-icon").attr('src', 'images/github-icon.png');
	});

	$(document).on('mouseout', 'img.forrst-icon', function(){
		$(".forrst-icon").attr('src', 'images/forrst-icon.png');
	});

	$(document).on('mouseout', 'img.linkedin-icon', function(){
		$(".linkedin-icon").attr('src', 'images/linkedin-icon.png');
	});

	$(document).on('mouseout', 'img.dribbble-icon', function(){
		$(".dribbble-icon").attr('src', 'images/dribbble-icon.png');
	});

	$(document).on('mouseout', 'img.fb-icon', function(){
		$(".fb-icon").attr('src', 'images/fb-icon.png');
	});











	//image rollover effect
	$(document).on('mouseover', '.img-container a', function(){
		var that = $(this);
		var title = $(this).attr('data-proj');
		var img_height = that.find('img').height();

		that.addClass('img_roll');
		that.find('img').css('opacity', '0');
		that.css('maxHeight', img_height);//controls black box height on responsive images
		that.find('span').html(title);
	});

	$(document).on('mouseout', '.img-container a', function(){
		var that = $(this);

		that.removeClass('img_roll');
		that.find('img').css('opacity', '1');
		that.find('span').empty();
	});







	//--------------------------------animate.css hover animations----------------------
	// $(document).on('mouseover', '.img-container a', function(){
	// 	$(this).addClass('animated pulse');
	// });

	// $(document).on('mouseout', '.img-container a', function(){
	// 	$(this).removeClass('animated pulse');
	// });

	// profile pic swing
	$(document).on('mouseover', 'img.profile-pic', function(){
		$(this).addClass('animated swing');
	});
	//remove swing
	$(document).on('mouseout', 'img.profile-pic', function(){
		setTimeout(removeSwing,2500);		
	});
	function removeSwing(){
		$('img.profile-pic').removeClass('animated swing');
	}













	//-------------------------------------Contact form validation--------------------------


	$(document).on('click', '#contact-submit-button', function(e){

		var email = $('#email').val();
		var phone = $('#phone').val();

		var emailPat = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/; // standard email validation
		var phonePat = /^[2-9]\d{2}-\d{3}-\d{4}$/; //555-555-5555

		// if(!emailPat.test(email)){
		// 	e.preventDefault();
		// 	$('.email-error').css('opacity', '1').html("Oops! Email address format is invalid.");
		// 	window.location = 'index.php#contact';
		// }
		if(!phonePat.test(phone)){
			e.preventDefault();
			$('.phone-error').css('opacity', '1').html("Oops! Please type your digits like this 555-555-5555");
			// window.location = 'index.php#contact';
		}else{
			$('.email-error').css('opacity', '0').html("");
			$('.phone-error').css('opacity', '0').html(""); 

			return true;
		} 

	});












	//-------------------------------------------Scrollsnap.js-----------------------------------
	//https://github.com/benoitpointet/jquery-scrollsnap-plugin/blob/master/index.html

	$(document).scrollsnap({
	    snaps: '.snap',
	    proximity: 200,
	    easing: 'easeOutBounce'
	    });














	//------------------------------------ScrollTop animations------------------------------------
	//removes primary animation class to anchor holding image
	$('.zig-zag').removeClass('fadeInUpBig');
	$('.zig-zag').addClass('fadeOutUpBig');
	$('.zig-zag-1').removeClass('fadeInRightBig');
	$('.zig-zag-1').addClass('fadeOutRightBig');
	$('.zig-zag-2').removeClass('fadeInLeftBig');
	$('.zig-zag-2').addClass('fadeOutLeftBig');
	$('.zig-zag-3').removeClass('fadeInDownBig');
	$('.zig-zag-3').addClass('fadeOutDownBig');
	$('.zig-zag-4').removeClass('fadeInLeftBig');
	$('.zig-zag-4').addClass('fadeOutLeftBig');
	remove_classes();

	//on scroll
	$(document).on('scroll', function(e){

		if($(window).scrollTop() <= 300){

			//removes primary animation class to anchor holding image
			$('.zig-zag').removeClass('fadeInUpBig');
			$('.zig-zag').addClass('fadeOutUpBig');
			$('.zig-zag-1').removeClass('fadeInRightBig');
			$('.zig-zag-1').addClass('fadeOutRightBig');
			$('.zig-zag-2').removeClass('fadeInLeftBig');
			$('.zig-zag-2').addClass('fadeOutLeftBig');
			$('.zig-zag-3').removeClass('fadeInDownBig');
			$('.zig-zag-3').addClass('fadeOutDownBig');
			$('.zig-zag-4').removeClass('fadeInLeftBig');
			$('.zig-zag-4').addClass('fadeOutLeftBig');
		
		}else if($(window).scrollTop() >= 300 && $(window).scrollTop() <= 924){

			//adds primary animation class to anchor holding image
			$('.zig-zag').removeClass('fadeOutUpBig')
			$('.zig-zag').addClass('fadeInUpBig');
			$('.zig-zag-1').removeClass('fadeOutRightBig')
			$('.zig-zag-1').addClass('fadeInRightBig');
			$('.zig-zag-2').removeClass('fadeOutLeftBig')
			$('.zig-zag-2').addClass('fadeInLeftBig');
			$('.zig-zag-3').removeClass('fadeOutDownBig')
			$('.zig-zag-3').addClass('fadeInDownBig');
			$('.zig-zag-4').removeClass('fadeOutLeftBig')
			$('.zig-zag-4').addClass('fadeInLeftBig');
		
		}

		if($(window).scrollTop() >= 925){

			//removes primary animation class to anchor holding image
			$('.zig-zag').removeClass('fadeInUpBig');
			$('.zig-zag').addClass('fadeOutUpBig');
			$('.zig-zag-1').removeClass('fadeInRightBig');
			$('.zig-zag-1').addClass('fadeOutRightBig');
			$('.zig-zag-2').removeClass('fadeInLeftBig');
			$('.zig-zag-2').addClass('fadeOutLeftBig');
			$('.zig-zag-3').removeClass('fadeInDownBig');
			$('.zig-zag-3').addClass('fadeOutDownBig');
			$('.zig-zag-4').removeClass('fadeInLeftBig');
			$('.zig-zag-4').addClass('fadeOutLeftBig');
		}

		//logo cloud animations
		if($(window).scrollTop() <= 1199){
			
			if(logo_cloud_frame == true){
				animate_cloud_out();
				logo_cloud_frame = false;
			};
		};

		if($(window).scrollTop() >= 1200 && $(window).scrollTop() <= 2000){

			if(logo_cloud_frame == false){

				animate_cloud_in();
				logo_cloud_frame = true;
			};
			
		};
		
		if($(window).scrollTop() >= 1999){
			
			if(logo_cloud_frame == true){
				animate_cloud_out();
				logo_cloud_frame = false;
			};
		};
		


	});// on scroll













//--------------------------------------logo cloud----------------------------------
// .air_l
// .as_l
// .cf_l
// .codeigniter_l
// .css_l
// .drupal_l
// .ejs_l
// .express_l
// .ffmpeg_l
// .github_l
// .handle_l
// .html_l
// .jquery_l
// .js_l
// .mongo_l
// .mysql_l
// .node_l
// .php_l
// .sass_l
// .terminal_l
// .wp_l

	function remove_classes(){

		var logos = $('.logo_cloud img');
		var max = logos.length;

		var an_in = ["fadeInRightBig", "fadeInLeftBig", "fadeInDownBig", "fadeInUpBig", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceInDown" ];
		var an_out = ["fadeOutRightBig", "fadeOutLeftBig", "fadeOutDownBig", "fadeOutUpBig", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "bounceOutDown" ];

		$.each(logos, function(e){
			for(var j=0; j<an_in.length; j++){
				$(this).removeClass(an_out[j]);
				$(this).removeClass(an_in[j]);
			}
		});
	};






	function animate_cloud_in(){

		remove_classes();

		var logos = $('.logo_cloud img');
		var max = logos.length;

		var an_in = ["fadeInRightBig", "fadeInLeftBig", "fadeInDownBig", "fadeInUpBig", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceInDown" ];


			$.each(logos, function(e){
				var i = Math.floor(Math.random() * an_in.length);
				$(this).addClass(an_in[i]);
			});
	}//animate_cloud_in()






	function animate_cloud_out(){

		remove_classes();

		var logos = $('.logo_cloud img');
		var max = logos.length;

		var an_out = ["fadeOutRightBig", "fadeOutLeftBig", "fadeOutDownBig", "fadeOutUpBig", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "bounceOutDown" ];



			$.each(logos, function(e){
				var i = Math.floor(Math.random() * an_out.length);
				$(this).addClass(an_out[i]);
			});

	}//animate_cloud_out()




});// function





