(function ($) {
  $(document).ready(function () {
    "use strict";


    // BACK BUTTON RELOAD
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload()
      }
    };


    /* MENU TOGGLE */
    $('.side-widget .site-menu ul li i').on('click', function (e) {
      $(this).parent().children('.side-widget .site-menu ul li ul').toggle();
      return true;
    });


    // ACCORDION
    var allPanels = $('.accordion > dd').hide();
    $('.accordion > dt > a').click(function () {
      var panel = $(this).parent().next();
      panel.slideToggle();
      setTimeout(function() {
        locoScroll.update();
      }, 400); // Delay for 1 second
      return false;
    });



    /* SEARCH */
    $('.search-button').on('click', function () {
      $(".search-box").toggleClass("active")
      $(".section-wrapper").toggleClass("no-transform")
    })


    /* FOOTER SPACING CONDITION */
    $('.footer:has(.col-lg-4)').addClass('footer-spacing');
    $('.sidebar .widget .gallery-item a').attr('data-fancybox', '');





    // TAB
    $(".tab-nav li").on('click', function (e) {
      $(".tab-item").hide();
      $(".tab-nav li").removeClass('active');
      $(this).addClass("active");
      var selected_tab = $(this).find("a").attr("href");
      $(selected_tab).stop().show();
      return false;
    });


  });
  // END DOCUMENT READY


  // DATA BACKGROUND IMAGE
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", "url(" + $(this).data("background") + ")");
    }
  });


  // DATA BACKGROUND COLOR
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", $(this).data("background"));
    }
  });


  // IMAGE BOX CAROUSEL
  var swiper = new Swiper('.image-box-carousel', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    }
  });


  // SLIDER
  var sliderimages = new Swiper('.slider-images', {
    spaceBetween: 0,
    direction: 'vertical',
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    touchRatio: 0,

    pagination: {
      el: '.swiper-fraction',
      type: 'fraction',
    },


    loop: true,
    loopedSlides: 1,
    thumbs: {
      swiper: slidertexts
    }
  });


  // SLIDER THUMBS
  var slidertexts = new Swiper('.slider-texts', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0,
    slideToClickedSlide: false,
    loop: true,
    loopedSlides: 1,

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

  });

  if ($(".slider-images")[0]) {
    sliderimages.controller.control = slidertexts;
    slidertexts.controller.control = sliderimages;
  } else {

  }


  // KINETIC TEXTS
  var slidertexts = new Swiper('.kinetic-texts', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0,
    slideToClickedSlide: false,
    loop: true,
    loopedSlides: 1,
    effect: 'fade',
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

  });


  /* COLLECTION SLIDER */


  // SLIDER
  var artsliderimages = new Swiper('.art-slider-images .swiper-container', {
    spaceBetween: 0,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 3,
    thumbs: {
      swiper: artslidercontent
    },
    breakpoints: {
      1024: {
        loopedSlides: 3,
      },
      768: {
        loopedSlides: 2,
      },
      640: {
        loopedSlides: 1
      },
      320: {
        loopedSlides: 1
      }
    }
  });


  // SLIDER THUMBS
  var artslidercontent = new Swiper('.art-slider-content .swiper-container', {
    spaceBetween: 30,
    direction: 'vertical',
    slidesPerView: 3,
    loop: true,
    loopedSlides: 3,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  });

  if ($(".art-slider-images .swiper-container")[0]) {
    artsliderimages.controller.control = artslidercontent;
    artslidercontent.controller.control = artsliderimages;
  } else {

  }


	  // LOCOMOTIVE
  if (data.enable_smooth_scroll == true) {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true,
      class: 'is-inview'
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }



  // PRELOADER
  if (data.enable_preloader == true) {
    let settings = {
      progressSize: 320,
      progressColor: '#ffffff',
      lineWidth: 2,
      lineCap: 'round',
      preloaderAnimationDuration: 800,
      startDegree: -90,
      finalDegree: 270
    }

    function setAttributes(elem, attrs) {

      for (let key in attrs) {
        elem.setAttribute(key, attrs[key]);
      }

    }

    let preloader = document.createElement('div'),
      canvas = document.createElement('canvas'),
      size;

    (function () {

      let width = window.innerWidth,
        height = window.innerHeight;

      if (width > height) {

        size = Math.min(settings.progressSize, height / 2);

      } else {

        size = Math.min(settings.progressSize, width - 50);

      }

    })();

    setAttributes(preloader, {
      class: "preloader",
      id: 'preloader',
      style: 'transition: opacity ' + settings.preloaderAnimationDuration / 1000 + 's'
    });
    setAttributes(canvas, {
      class: 'progress-bar',
      id: 'progress-bar',
      width: settings.progressSize,
      height: settings.progressSize
    });


    preloader = document.getElementById('preloader');

    let progressBar = document.getElementById('progress-bar'),
      images = document.images,
      imagesAmount = images.length,
      imagesLoaded = 0,
      barCtx = progressBar.getContext('2d'),
      circleCenterX = progressBar.width / 2,
      circleCenterY = progressBar.height / 2,
      circleRadius = circleCenterX - settings.lineWidth,
      degreesPerPercent = 3.6,
      currentProgress = 0,
      showedProgress = 0,
      progressStep = 0,
      progressDelta = 0,
      startTime = null,
      running;

    (function () {

      return requestAnimationFrame
        || mozRequestAnimationFrame
        || webkitRequestAnimationFrame
        || oRequestAnimationFrame
        || msRequestAnimationFrame
        || function (callback) {
          setTimeout(callback, 1000 / 60);
        };

    })();

    Math.radians = function (degrees) {
      return degrees * Math.PI / 180;
    };


    progressBar.style.opacity = settings.progressOpacity;
    barCtx.strokeStyle = settings.progressColor;
    barCtx.lineWidth = settings.lineWidth;
    barCtx.lineCap = settings.lineCap;
    let angleMultiplier = (Math.abs(settings.startDegree) + Math.abs(settings.finalDegree)) / 360;
    let startAngle = Math.radians(settings.startDegree);
    document.body.style.overflowY = 'hidden';
    preloader.style.backgroundColor = settings.preloaderBackground;


    for (let i = 0; i < imagesAmount; i++) {

      let imageClone = new Image();
      imageClone.onload = onImageLoad;
      imageClone.onerror = onImageLoad;
      imageClone.src = images[i].src;

    }

    function onImageLoad() {

      if (running === true) running = false;

      imagesLoaded++;

      if (imagesLoaded >= imagesAmount) hidePreloader();

      progressStep = showedProgress;
      currentProgress = ((100 / imagesAmount) * imagesLoaded) << 0;
      progressDelta = currentProgress - showedProgress;

      setTimeout(function () {

        if (startTime === null) startTime = performance.now();
        running = true;
        animate();

      }, 10);

    }

    function animate() {

      if (running === false) {
        startTime = null;
        return;
      }

      let timeDelta = Math.min(1, (performance.now() - startTime) / settings.preloaderAnimationDuration);
      showedProgress = progressStep + (progressDelta * timeDelta);

      if (timeDelta <= 1) {


        barCtx.clearRect(0, 0, progressBar.width, progressBar.height);
        barCtx.beginPath();
        barCtx.arc(circleCenterX, circleCenterY, circleRadius, startAngle, (Math.radians(showedProgress * degreesPerPercent) * angleMultiplier) + startAngle);
        barCtx.stroke();
        requestAnimationFrame(animate);

      } else {
        startTime = null;
      }

    }

    function hidePreloader() {
      setTimeout(function () {
        $("body").addClass("page-loaded");

		    let preloader_svg = gsap.timeline({ yoyo:true})

      preloader_svg.to('.preloader svg path', {



          attr: {
            d: 'M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z'
          },
        })

		.to('.preloader svg path', {

          attr: {
            d: 'M0,230 C305.333333,100 625.333333,0 960,0 C1294.66667,0 1614.66667,100 1920,300 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,960 305.333333,1080 0,1080 L0,230 Z'
          },
        })

		  .to('.preloader svg path', {

          attr: {
            d: 'M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z'
          },
        })




        document.body.style.overflowY = '';
      }, settings.preloaderAnimationDuration + 100);
    }
    var resizeTimer;
  }




  // ODOMETER
  $(".odometer").each(function () {
    $(this).html($(this).data('count'));

  });


	 let svg_morph = gsap.timeline({repeat:-1, yoyo:true})

      svg_morph.to('.slider .slider-texts .svg-morph path', {
          duration: 8,
          attr: {
            d: 'm244.333332,38.437499c26.666664,-1.666666 125.666662,0.999995 195.333325,50.33333c69.666663,49.333335 -39.666664,141.666664 -70.666664,174.229164c-31,32.5625 -176.999993,107.437507 -234.999993,76.437507c-58,-31 73.666665,-107.000001 49,-190.4375c-24.666665,-83.437499 34.666668,-108.895835 61.333332,-110.562501z'
          },
        })
        .to('.slider .slider-texts .svg-morph path', {
         duration: 8,
          attr: {
            d: 'm244.333332,38.437499c58.666669,50.333342 24.666647,101.000011 94.33331,150.333346c69.666663,49.333335 71.333353,156.666666 14.333349,175.229163c-57.000004,18.562498 -160.999991,6.437492 -218.999991,-24.562508c-58,-31 -109.333363,-174.000012 -70.000018,-236.437507c39.333345,-62.437496 121.666681,-114.895836 180.33335,-64.562494z'
          },
        })



	/* HAMBURGER */
    $('.hamburger').on('click', function () {
      $(".hamburger").toggleClass("active")
      $(".side-widget").toggleClass("active")
      $(".section-wrapper").toggleClass("no-transform")
      $("body").toggleClass("overflow")


		let side_widget_svg = gsap.timeline({ yoyo:true})

      side_widget_svg.to('.side-widget.active svg path', {



          attr: {
            d: 'M540,1080H0V0h540c31.96,142.05,60.09,325.94,60,541C599.91,755.16,571.87,938.34,540,1080z'
          },
        })

		.to('.side-widget.active svg path', {

          attr: {
            d: 'M540,1080H0V0h540c0,179.85,0,359.7,0,539.54C540,719.7,540,899.85,540,1080z'
          },
        })

    })




	// PAGE TRANSITION
    $('body a').on('click', function (e) {
      if ($('body').hasClass('disable-preloader')) {

      } else {

        var target = $(this).attr('target');
        var fancybox = $(this).data('fancybox');
        var url = this.getAttribute("href");
        if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


          e.preventDefault();
          var url = this.getAttribute("href");
          if (url.indexOf('#') != -1) {
            var hash = url.substring(url.indexOf('#'));


            if ($('body ' + hash).length != 0) {
              $('.page-transition').removeClass("active");


            }
          } else {
            $('.page-transition').toggleClass("active");


			  let page_transition_svg = gsap.timeline({ yoyo:true})

      page_transition_svg.to('.page-transition svg path', {



          attr: {
            d: 'M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,980 1294.66667,930 960,930 C625.333333,930 305.333333,980 0,1080 L0,0 Z'
          },
        })

		.to('.page-transition svg path', {

          attr: {
            d: 'M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z'
          },
        })





            setTimeout(function () {
              window.location = url;
            }, 1000);

          }
        }
      }
    });


})(jQuery);
