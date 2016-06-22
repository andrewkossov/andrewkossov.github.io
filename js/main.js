
$(document).ready(function() {
    
$(window).ready(function(){

    var controls = {
        video: $("#myvideo"),
        playpause: $("#playpause")                 
    };
                
    var video = controls.video[0];
               
    controls.playpause.click(function(){
        var controls = {
        video: $("#myvideo"),
        playpause: $("#playpause")                 
    };
                
    var video = controls.video[0];
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
                
        $(this).toggleClass("paused"); 
    });
}); 
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Waypoints
	$('.work').waypoint(function() {
		$('.work').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});
    
    $('section.video').waypoint(function() {
		$('.m_video').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});
    
    $('.contacts').waypoint(function() {
		$('.contacts .btn').addClass('animated tada');
	}, {
		offset: '75%'
	});
    
    
	
	
    

	// Fancybox
	$('.work-box').fancybox();


	// Page Scroll
	var sections = $('section')
        a = $('.video_totop')
		nav = $('nav[role="navigation"]');
        

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

    a.on('click', function () {
	  	var $el = $(this);
        var videoH = $("#video");
        $(videoH).addClass("videohover");
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});
	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});