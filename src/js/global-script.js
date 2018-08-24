// Если на проекте jQuery
 jQuery(function($){
$("#mobile-menu .main-nav__item--has-child > a").wrapInner('<span></span>');
	$("#mobile-menu .main-nav__item--has-child > a span").unwrap();
$("#mobile-menu ul li").attr('class', '');

	 	  $(function() {
    $('nav#mobile-menu').mmenu({
      navbar: {
        title: 'Меню'
      },
      classNames: {
         selected: "active"
      }
    });
  });
  $(".phone-maskdddd").mask("+7(999) 999-9999");

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
