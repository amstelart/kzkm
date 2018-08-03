// Если на проекте jQuery
 jQuery(function($){
  $(".phone-maskdddd").mask("+7(999) 999-9999");

	 // mask fields
$('.phone-mask').mask("+7(999) 999-9999",
    { completed: function () {



	   if($(this).val().length >= 11 && $('#contact-form-94 .text-204 .wpcf7-text').val().length >=2) {
		$('#contact-form-94 .btn--main').prop('disabled', false).removeClass('btn--block');

	   }





	   if($(this).val().length >= 11 && $('#contact-form-95 .text-204 .wpcf7-text').val().length >=2) {
		$('#contact-form-95 .btn--main').prop('disabled', false).removeClass('btn--block');




	}


			    if($(this).val().length >= 11 && $('#contact-form-96 .text-737 .wpcf7-text').val().length >=2) {
		$('#contact-form-96 .btn--main').prop('disabled', false).removeClass('btn--block');

	}



	},







	}
);

});
$( document ).ready(function() {
	setInterval(function(){

	if($('#contact-form-94').hasClass('slider-form') ) {
		   var pmc = $('#contact-form-94 .wpcf7-tel');

   if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
		$('#contact-form-94 .btn--main').prop('disabled', true).addClass('btn--block');

   }
	}
		if($('#contact-form-95').hasClass('slider-form') ) {
		   var pmc2 = $('#contact-form-95 .wpcf7-tel');

   if ( (pmc2.val().indexOf("_") != -1) || pmc2.val() == '' ) {

		$('#contact-form-95 .btn--main').prop('disabled', true).addClass('btn--block');
   }
		}

		if($('#contact-form-96').hasClass('feedback-form') ) {
				   var pmc3 = $('#contact-form-96 .wpcf7-tel');

   if ( (pmc3.val().indexOf("_") != -1) || pmc3.val() == '' ) {

		$('#contact-form-96 .btn--main').prop('disabled', true).addClass('btn--block');
   }

		}
	  },200);




	$(document).on('input', '#contact-form-94 .wpcf7-tel', function () {
    if($(this).val().length >= 11 && $('#contact-form-94 .text-204 .wpcf7-text').val().length >=2) {
		$('#contact-form-94 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($(this).val().match(/[0-9]/g).length < 2 || $('#contact-form-94 .text-204 .wpcf7-text').val().length <2) {
		$('#contact-form-94 .btn--main').prop('disabled', true).addClass('btn--block');

	}


	});

	$(document).on('input', '#contact-form-94 .wpcf7-text', function () {
    if($('#contact-form-94 .wpcf7-tel').val().match(/[0-9]/g).length >= 2 && $('#contact-form-94 .text-204 .wpcf7-text').val().length >=2) {
		$('#contact-form-94 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($('#contact-form-94 .wpcf7-tel').val().match(/[0-9]/g).length < 2 || $('#contact-form-94 .text-204 .wpcf7-text').val().length <2) {
		$('#contact-form-94 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});

			$(document).on('each', '#contact-form-94 .wpcf7-tel', function () {
    if($(this).val().match(/[0-9]/g).length >= 2 && $('#contact-form-94 .text-204 .wpcf7-text').val().length >=2) {
		$('#contact-form-94 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($(this).val().match(/[0-9]/g).length < 2 || $('#contact-form-94 .text-204 .wpcf7-text').val().length <2) {
		$('#contact-form-94 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});

	$(document).on('each', '#contact-form-94 .wpcf7-text', function () {
    if($('#contact-form-94 .wpcf7-tel').val().match(/[0-9]/g).length >= 2 && $('#contact-form-94 .text-204 .wpcf7-text').val().length >=2) {
		$('#contact-form-94 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($('#contact-form-94 .wpcf7-tel').val().match(/[0-9]/g).length < 2 || $('#contact-form-94 .text-204 .wpcf7-text').val().length <2) {
		$('#contact-form-94 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});













			$(document).on('input', '#contact-form-95 .wpcf7-tel', function () {
    if($(this).val().match(/[0-9]/g).length >= 2 && $('#contact-form-95 .text-204 .wpcf7-text').val().length >=2) {
		$('#contact-form-95 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($(this).val().match(/[0-9]/g).length < 2 || $('#contact-form-95 .text-204 .wpcf7-text').val().length <2) {
		$('#contact-form-95 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});

	$(document).on('input', '#contact-form-95 .wpcf7-text', function () {
    if($('#contact-form-95 .wpcf7-tel').val().match(/[0-9]/g).length >= 2 && $('#contact-form-95 .text-204 .wpcf7-text').val().length >=2) {
		$('#contact-form-95 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($('#contact-form-95 .wpcf7-tel').val().match(/[0-9]/g).length < 2 || $('#contact-form-95 .text-204 .wpcf7-text').val().length <2) {
		$('#contact-form-95 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});

			$(document).on('each', '#contact-form-95 .wpcf7-tel', function () {
    if($(this).val().match(/[0-9]/g).length >= 2 && $('#contact-form-95 .text-204 .wpcf7-text').val().length >=2) {
		$('#contact-form-94 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($(this).val().match(/[0-9]/g).length < 2 || $('#contact-form-95 .text-204 .wpcf7-text').val().length <2) {
		$('#contact-form-95 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});

	$(document).on('each', '#contact-form-95 .wpcf7-text', function () {
    if($('#contact-form-95 .wpcf7-tel').val().match(/[0-9]/g).length >= 2 && $('#contact-form-95 .text-204 .wpcf7-text').val().length >=2) {
		$('#contact-form-95 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($('#contact-form-95 .wpcf7-tel').val().match(/[0-9]/g).length < 2 || $('#contact-form-95 .text-204 .wpcf7-text').val().length <2) {
		$('#contact-form-95 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});





				$(document).on('input', '#contact-form-96 .wpcf7-tel', function () {
    if($(this).val().match(/[0-9]/g).length >= 2 && $('#contact-form-96 .text-373 .wpcf7-text').val().length >=2) {
		$('#contact-form-96 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($(this).val().match(/[0-9]/g).length < 2 || $('#contact-form-96 .text-737 .wpcf7-text').val().length <2) {
		$('#contact-form-96 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});

	$(document).on('input', '#contact-form-96 .wpcf7-text', function () {
    if($('#contact-form-96 .wpcf7-tel').val().match(/[0-9]/g).length >= 2 && $('#contact-form-96 .text-737 .wpcf7-text').val().length >=2) {
		$('#contact-form-96 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($('#contact-form-96 .wpcf7-tel').val().match(/[0-9]/g).length < 2 || $('#contact-form-96 .text-737 .wpcf7-text').val().length <2) {
		$('#contact-form-96 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});

			$(document).on('each', '#contact-form-96 .wpcf7-tel', function () {

    if($(this).val().match(/[0-9]/g).length >= 2 && $('#contact-form-96 .text-737 .wpcf7-text').val().length >=2) {
		$('#contact-form-96 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($(this).val().match(/[0-9]/g).length < 2 || $('#contact-form-96 .text-737 .wpcf7-text').val().length <2) {
		$('#contact-form-96 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});

	$(document).on('each', '#contact-form-96 .wpcf7-text', function () {
    if($('#contact-form-96 .wpcf7-tel').val().match(/[0-9]/g).length >= 2 && $('#contact-form-96 .text-737 .wpcf7-text').val().length >=2) {
		$('#contact-form-96 .btn--main').prop('disabled', false).removeClass('btn--block');

	}
			    if($('#contact-form-96 .wpcf7-tel').val().match(/[0-9]/g).length < 2 || $('#contact-form-96 .text-737 .wpcf7-text').val().length <2) {
		$('#contact-form-96 .btn--main').prop('disabled', true).addClass('btn--block');

	}
	});



$('.btn--prod').on('click',function(e){
    e.preventDefault();
  	$('.title-tovar').val($(this).parents('.catalog-card__caption').find('.catalog-card__name').text());
});

	$('.btn--vak').on('click',function(e){
    e.preventDefault();
  	$('.title-tovar').val($(this).parents('.page-part').find('.dolgnost').text());
});
	$('.feedback-form label').unwrap();
	$('input:checkbox').prop('checked', true);
	$('.wpcf7-list-item').addClass('wpcf7-list-item-active');



$('.wpcf7-list-item-label').on('click',function(e){
    e.preventDefault();
    $(this).parent().toggleClass('wpcf7-list-item-active');
	$(this).parent().find('input').click();
});


	$(".sub-menu").show();
$(".article ul"). addClass("list");
	$(".tabs__content-item ul"). addClass("list");
	$(".page-numbers"). addClass("pagination__item");
		$(".page-numbers.current"). addClass("pagination__item--active");
//$(".menu-item-has-children > a").replaceWith(function(index, oldHTML){
// return $("<span class='main-nav__link main-nav__link--arrow'></span>").html(oldHTML);
//});
$(".menu-item-has-children > a").addClass('main-nav__link main-nav__link--arrow');
	$(".menu-item-has-children ul").wrap('<div class="main-nav__sublist-wrapper  main-nav__sublist-wrapper--lvl-2"></div>');
	$(".main-nav__sublist-wrapper ul").addClass("main-nav__list  main-nav__list--lvl-2");
	$(".main-nav__sublist-wrapper ul li").addClass("main-nav__item--lvl-2");
		$(".main-nav__sublist-wrapper ul li a").addClass("main-nav__link--lvl-2");
  $("#main-slider").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    slideSpeed: 8000,
    smartSpeed: 700,
    autoplayHoverPause: true,
    center: true,
    responsive : {
      0 : {
      },
      480 : {
      },
      768 : {
      },
      992 : {
      },
      1200 : {
      },
      1800 : {
      }
    }
  });
  $(".tabs__gallery").owlCarousel({
    items: 3,
    nav: true,
    margin: 20,
    loop: true,
    slideSpeed: 8000,
    smartSpeed: 700,
    autoplayHoverPause: true,
    center: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    responsive : {
      0 : {
        items: 2,
        loop: true,
        center: true,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 3,
      },
      1800 : {
        items: 3,
      }
    }
  });
  $(".doc-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin: 20,
    slideSpeed: 8000,
    smartSpeed: 700,
    autoplayHoverPause: true,
    loop: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    center: false,
    responsive : {
      0 : {
        items: 2,
        loop: true,
        nav: false,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 3,
      },
      1800 : {
        items: 3,
      }
    }
  });
  $(".more-category__carousel").owlCarousel({
    items: 3,
    nav: false,
    margin: 20,
    loop: true,
    center: false,
    responsive : {
      0 : {
        items: 2,
        loop: true,
        center: true,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 4,
      },
      1800 : {
        items: 4,
      }
    }
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
