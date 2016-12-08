jQuery( document ).ready(function() {

	var checkHeader = function(){

		jQuery(window).scroll(function (event) {
		    
		    var scroll = jQuery(window).scrollTop();		    
		    
		    if(parseInt(scroll) > 0 ) jQuery('header.navbar').addClass('reduce');
		    else if(parseInt(scroll) == 0) jQuery('header.navbar').removeClass('reduce');

		});

	};

	var scrollToAncre = function(){
		jQuery('a[href^="#"], button.ancre[href^="#"]').click(function(){  
		    var id = jQuery(this).attr("href");
		    var offset = jQuery(id).offset().top 
		    jQuery('html, body').animate({scrollTop: offset}, 'slow'); 
		    return false;  
		});
	}

	var setSlider = function(){
		//slideshow on en parle
		var mySwiper = new Swiper ('.fold5 .swiper-container', {
			
			slidesPerView: 7,
	        spaceBetween : 100,	        
	        autoplay : 2500,
	        loop: true

		})

	}

	window.init = function() {  	
		/* Fonction qui check si l'utilisateur scroll dans la page pour modifier le style du header */
		checkHeader();
		scrollToAncre();
		setSlider();

	}
  
  init(); // true 
});