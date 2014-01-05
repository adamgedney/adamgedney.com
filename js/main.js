$(function(){



// Google maps
	function initialize() {
		// Source: http://stiern.com/tutorials/adding-custom-google-maps-to-your-website/
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












	//--------------------------------animate.css hover animations----------------------
	$(document).on('mouseover', '.img-container a', function(){
		$(this).addClass('animated pulse');
	});

	$(document).on('mouseout', '.img-container a', function(){
		$(this).removeClass('animated pulse');
	});

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
			window.location = 'index.php#contact';
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











//-------------------AJAX call test----------------------------------------

// $(document).on('click','#test-button',function(e){
// e.preventDefault();

// var key = '/58c712713bda048ac50e20e99ed9111c';
// var app_id = '/df91512a';
// var url = 'http://localhost:8887';
// 	url += '/api_request/validate_client';
// 	url += key;
// 	url += app_id;

// console.log(url);


//  $.ajax({
//       url: url,
//       type: 'GET',
//       dataType: 'json',
//       success: function(response){
// console.log(response);
//         // if(response.error){
//         //   console.log('failed');
//         // }else{
//         //   console.log('success');



       
//       },
//       error: function(response){
//         console.log(response);
//       }
//     });


// });

});// function





