

	initialize();

// Google maps
	function initialize() {
		// Source: http://stiern.com/tutorials/adding-custom-google-maps-to-your-website/
		var latlng = new google.maps.LatLng(36.698638, -74.804601);
		
		var settings = {
			zoom: 6,
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
	


// https://maps.google.com/maps?q=virginia+beach,+VA&hl=en&sll=27.698638,-83.804601&sspn=12.683443,22.412109&t=h&hnear=Virginia+Beach,+Virginia&z=10