$(function(){



// Google maps
	function initialize() {
		// Source: http://stiern.com/tutorials/adding-custom-google-maps-to-your-website/
		var latlng = new google.maps.LatLng(36.698638, -74.804601);
		
		var settings = {
			zoom: 6,
			minZoom: 6,
			maxZoom: 6,
			scrollwheel: false,
			scaleControl: false,
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

	var companyPos = new google.maps.LatLng(36.8506, -76);
	
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyLogo,
		title:"Right here!"
	});
	};// /initialize()
	
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

});





