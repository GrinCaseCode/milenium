$(document).ready(function() {

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		
	});

	$(".menu-mobile *:not(.menu__haschild) > a").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
	});

	$(".menu__haschild > a").click(function(e) {
		e.preventDefault();
		$(this).siblings("ul").slideToggle(200);
	});

	$(".offer-block__head .btn-main").click(function(e) {
		e.preventDefault();
		
		if ($(".offer-block__content").is(":hidden")) {
			$(this).html("Скрыть");
			
		} else {
			$(this).html("Подробнее о предложении");
		}
		$(".offer-block__content").slideToggle(200);
	});

	$(".item-sidebar__head").click(function(e) {
		e.preventDefault();
		$(this).parent().siblings(".item-sidebar").removeClass("active");
		$(this).parent().siblings(".item-sidebar").find(".item-sidebar__content").slideUp("active");
		$(this).parent().toggleClass("active");
		$(this).siblings(".item-sidebar__content").slideToggle("active");
	});

	/*высота блока по экрану*/
	function heightDetect() {
		$('.menu-mobile').css("height", $(window).height() -$(".header").height() + 60);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//слайдер

	$('.slider-billbord').slick({
		arrows: true,
		dots: true,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
			}
		}
		]
	});

	$('.slider-use').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
			}
		}
		]
	});


	$(".slider-billbord").on('afterChange', function(event, slick, currentSlide) {
		console.log(slick, currentSlide);
		if ($(".slick-slide:first-child").hasClass("slick-current")) {
			$(".slider-billbord").addClass("slider-billbord_first");
		} else {
			$(".slider-billbord").removeClass("slider-billbord_first");	
		}

	})
/*
	  var $slider = $('.slider-recomendations');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });

	$('.slider-recomendations').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 6,
		 touchThreshold: 1000,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow:4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow:3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow:2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				variableWidth: true,
				arrows: false
			}
		}
		]
	});
	*/

	const swiper = new Swiper('.slider-recomendations', {
		direction: 'horizontal',
		navigation: {
			nextEl: '.arrow-swiper_right',
			prevEl: '.arrow-swiper_left',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		slidesPerView: 1,
		spaceBetwen: 30,
		slidesPerGroup: 1,
		loop: false,
		breakpoints: {
			200: {
				slidesPerView: 'auto'
			},
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 6,
			},
		}
	});

	$(".footer__title").click(function() {
		$(this).toggleClass("active");
		$(this).siblings(".footer__content").slideToggle(200);
	});


	$('.tabs a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});
	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

