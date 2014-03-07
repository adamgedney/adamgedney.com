(function($){


//This is a simple JQuery plugin that utilizes lightbox.js.
//The Simple Picasa Slideshow allows you to add dynamic content to web projects.
//It's perfect for giving your clients a Google based solution to updating
//a static website's photo slideshow.
//O had a need for such a solution and could find nothing out there.
//I threw this together and thought I'd share :)
//You're free to use it, alter it, or do whatever with the code.
//
//visit http://simplepicasaslideshow.com or http://adamgedney.com/simplepicasaslideshow
//for instructions on how to use this ridiculously easy plugin on your own site.





//You won't need to change anything in here to make the plugin work.
//If you know what you're doing though, have a ball!
$.fn.picasa_slideshow = function(options){
	opts = $.extend({}, $.fn.picasa_slideshow.defaults, options);

	var username = opts.username;//gmail address less the @gmail.com
	var album = opts.album;//make sure album is set to public through the "share with" options
	var speed = opts.speed * 1;//casts as int
	var protocol = document.location.protocol == 'http:' ? 'http:' : 'https:';
	var url = protocol + '//picasaweb.google.com/data/feed/api/user/' + username + '/album/' + album + '?kind=photo&alt=json';



//call to Picasa
$.ajax({
	url: url,
	type: 'get',
	dataType: 'json',
	success: function(response){

		var result_array = response.feed.entry;
		var pic_array = [];

		//loops through album pics, storing in an array
		for(var i=0; i < result_array.length; i++){

			var pic = result_array[i].content.src;
			pic_array.push(pic);

		}// for




		var count = 0;
		var img = pic_array;
		var html = '<a href="' + img[count] + '" data-lightbox="' + img[count] + '"><img class="picasa-pic" src="' + img[count] + '" alt="picasa image"/></a>'

		//load initial image
		$('.picasagallery').append(html);



		//next button click handler
		$(document).on('click', '#nextbtn', function(e){
			next_img()
		});

		//previous button click handler
		$(document).on('click', '#prevbtn', function(e){
			prev_img();
		});






		function prev_img(){
			count--;
			if(count < 0){
				count = pic_array.length - 1;
			}

			//img tag plus lightbox support
			$('.picasagallery').empty();
			var html = '<a href="' + img[count] + '" data-lightbox="' + img[count] + '"><img class="picasa-pic" src="' + img[count] + '" alt="picasa image"/></a>'
			$('.picasagallery').append(html);
		};






		function next_img(){
			count++;
			if(count >= pic_array.length){
				count = 0;
			}

			//img tag plus lightbox support
			$('.picasagallery').empty();
			var html = '<a href="' + img[count] + '" data-lightbox="' + img[count] + '"><img class="picasa-pic" src="' + img[count] + '" alt="picasa image"/></a>'
			$('.picasagallery').append(html);
		};




		//begins slideshow loop
		looper();

		function looper(){
			setTimeout(nextLoopImg, speed);
		};


		function nextLoopImg(){
			count++;
			if(count >= pic_array.length){
				count = 0;
			}

			//img tag plus lightbox support
			$('.picasagallery').empty();
			var html = '<a href="' + img[count] + '" data-lightbox="' + img[count] + '"><img class="picasa-pic" src="' + img[count] + '" alt="picasa image"/></a>'
			$('.picasagallery').append(html);

			looper();// reruns settimeout
		};

	}// success
});//ajax

};//$.fn.


$.fn.picasa_slideshow.defaults = {
	username: 'calaquendidolls',
	album: 'PicasaKittensDayitaAugustus',
	speed: '5000'
};


})(jQuery);//jquery namespace