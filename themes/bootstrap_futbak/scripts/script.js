jQuery( document ).ready(function() {

	var checkHeader = function(){

		jQuery(window).scroll(function (event) {
		    
		    var scroll = jQuery(window).scrollTop();		    
		    
		    if(parseInt(scroll) > 0 ) jQuery('header.navbar').addClass('reduce');
		    else if(parseInt(scroll) == 0) jQuery('header.navbar').removeClass('reduce');

		});

	};

  window.init = function() {  	

	/*Fonction qui check si l'utilisateur scroll dans la page pour modifier le style du header*/
    checkHeader();
    
  }
  
  init(); // true 
});