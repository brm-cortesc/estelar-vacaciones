jQuery(document).ready( ()=>{

	const $promos = jQuery('.slider');


	const slider = {
	    slidesToShow: 1,
	    arrows: false,
	    dots: true,
	    mobileFirst: true
  	};

  	if( jQuery(window).width() < 768 ){
  		$promos.slick(slider);
  	}

  	/*Anclas*/

    const go = (val) =>{
      
      let pos = jQuery(val).attr('href');

      jQuery('html, body').animate({
        scrollTop: jQuery(pos).offset().top
      }, 1000);

    };


    //Anclas animadas
  	const locacion = window.location.hash

  	if (locacion != ''){

  	  jQuery('html, body').animate({
  	    scrollTop: jQuery(locacion).offset().top
  	  }, 1000);
    

  	  console.log('hay hash')
  	};

  	//Btn scroll down
    jQuery('.scroll').click(function () {
        go(this);
    });

    //modal
    jQuery('.btn-legales').click(function (e) {
      e.preventDefault();
      jQuery('#terminos').modal('show')
    });




	/*document ready end*/
});
