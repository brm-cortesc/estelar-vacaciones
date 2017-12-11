/*Image loader*/

window.onload = ()=>{

  const placeholder = document.getElementsByClassName('placeholder');

  const bgs = document.getElementsByClassName('container-fluid');


  for( let x= 0; x < placeholder.length; x++){

    const small = placeholder[x].childNodes[0];

    let img = new Image();
    img.src = small.src;

    img.onload = ()=>{

      small.classList.add('loaded')
    };

    let imgBig = new Image();

    imgBig.src = placeholder[x].dataset.xl;

    imgBig.onload = ()=>{
      imgBig.classList.add('loaded')

    };

   placeholder[x].appendChild(imgBig);      


     
  };



};


jQuery(document).ready( ()=>{

  
  jQuery('.container-fluid').each(function(index, el) {
    jQuery(el).ready( function () {
      
      jQuery(el).addClass('ready');

    });

    
  });


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

  	};

  	//Btn scroll down
    jQuery('.scroll').click(function () {
        go(this);
    });

    jQuery('.navigator a').click(function() {
      // e.preventDefault();
      go(this);
      jQuery('.navigator li').removeClass('active');
      jQuery(this).parent().addClass('active');

    });

    //modal
    jQuery('.btn-legales').click(function (e) {
      e.preventDefault();
      jQuery('#terminos').modal('show')
    });


    //desplegable header
    jQuery('.selector-toggle').click(function (e) {
        jQuery('header .lista').addClass('active');

    });

    jQuery('header .lista .close').click(function (e) {
        jQuery('header .lista').removeClass('active');
      
    });


    jQuery('header .lista a').click( function (e) {
      e.preventDefault();
      
      if(!jQuery(this).parent().hasClass('close')) go(this);

      jQuery('header .lista').removeClass('active');

    } );



	/*document ready end*/
});
