$(function(){function e(){var e=new google.maps.LatLng(36.698638,-74.804601),t={zoom:6,scrollwheel:!1,center:e,mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControl:!0,navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL},mapTypeId:google.maps.MapTypeId.ROADMAP},n=new google.maps.Map(document.getElementById("map-canvas"),t),r=new google.maps.MarkerImage("images/pin.png",new google.maps.Size(451,118),new google.maps.Point(0,0),new google.maps.Point(0,118)),i=new google.maps.LatLng(36.8506,-76),s=new google.maps.Marker({position:i,map:n,icon:r,title:"Right here!"})}function t(){$("img.profile-pic").removeClass("animated swing")}e();$(document).on("mouseover","img.github-icon",function(){$(".github-icon").attr("src","images/github-icon-hover.png")});$(document).on("mouseover","img.forrst-icon",function(){$(".forrst-icon").attr("src","images/forrst-icon-hover.png")});$(document).on("mouseover","img.linkedin-icon",function(){$(".linkedin-icon").attr("src","images/linkedin-icon-hover.png")});$(document).on("mouseover","img.dribbble-icon",function(){$(".dribbble-icon").attr("src","images/dribbble-icon-hover.png")});$(document).on("mouseover","img.fb-icon",function(){$(".fb-icon").attr("src","images/fb-icon-hover.png")});$(document).on("mouseout","img.github-icon",function(){$(".github-icon").attr("src","images/github-icon.png")});$(document).on("mouseout","img.forrst-icon",function(){$(".forrst-icon").attr("src","images/forrst-icon.png")});$(document).on("mouseout","img.linkedin-icon",function(){$(".linkedin-icon").attr("src","images/linkedin-icon.png")});$(document).on("mouseout","img.dribbble-icon",function(){$(".dribbble-icon").attr("src","images/dribbble-icon.png")});$(document).on("mouseout","img.fb-icon",function(){$(".fb-icon").attr("src","images/fb-icon.png")});$(document).on("mouseover",".img-container a",function(){$(this).addClass("animated pulse")});$(document).on("mouseout",".img-container a",function(){$(this).removeClass("animated pulse")});$(document).on("mouseover","img.profile-pic",function(){$(this).addClass("animated swing")});$(document).on("mouseout","img.profile-pic",function(){setTimeout(t,2500)});$(document).on("click","#contact-submit-button",function(e){var t=$("#email").val(),n=$("#phone").val(),r=/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,i=/^[2-9]\d{2}-\d{3}-\d{4}$/;if(!!i.test(n)){$(".email-error").css("opacity","0").html("");$(".phone-error").css("opacity","0").html("");return!0}e.preventDefault();$(".phone-error").css("opacity","1").html("Oops! Please type your digits like this 555-555-5555");window.location="index.php#contact"});$(document).scrollsnap({snaps:".snap",proximity:200,easing:"easeOutBounce"})});