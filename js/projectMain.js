$(function(){

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
	};










	//Menu button for mobile====================//

	if($(window).width() < 767 ){
		$('#main-nav').fadeOut(2000);
		
	}else if($(window).width() > 767){
		$('.menu-btn').hide();
	}
	
	var menu_toggle = false;
	$(document).on('click', '.menu-btn', function(e){
	
		if(!menu_toggle){

			$('#main-nav').fadeIn();

				menu_toggle = true;

					$('.menu-btn').css('opacity', '.3');
		}else{

			$('#main-nav').fadeOut();

				menu_toggle = false;

					$('.menu-btn').css('opacity', '1');
		}
	});






});// function





