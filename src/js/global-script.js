// Если на проекте jQuery
$( document ).ready(function() {
  $("#main-slider").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    // autoplay: true,
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
    nav: false,
    margin: 20,
    loop: true,
    slideSpeed: 8000,
    smartSpeed: 700,
    autoplayHoverPause: true,
    center: true,
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
        items: 1,
        loop: true,
        center: true,
      },
      480 : {
        items: 1,
      },
      768 : {
        items: 2,
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
