var iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
var iPad = /iPad/.test(navigator.userAgent) && !window.MSStream;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (iPhone) {
	$('body').addClass('iphone');
}
if (iPad) {
	$('body').addClass('ipad');
}
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
	if (ua.indexOf('chrome') > -1) {
		// alert("1") // Chrome
	} else {
		// alert("2") // Safari
		$('body').addClass('safari');
	}
}

if (window.navigator.userAgent.indexOf("Edge") > -1) {
	$('body').addClass('edge');
}

var UAString = navigator.userAgent;
if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:11") !== -1) {
	$('body').addClass('ie');
}
if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:10") !== -1) {
	$('body').addClass('ie');
}


$(document).ready(function () {

	// cookie start
	$(document).on('click', '.cookies__btn', function (e) {
		e.preventDefault();
		$('.cookies').addClass('hidden');
	});
	// cookie end

	//menu start
	$('.js_mobile-menu').click(function (e) {
		e.preventDefault();
		$('.menu').addClass("__active");
		$(this).toggleClass("__hidden");
		$(".menu__close").addClass("__active")
	});

	$('.menu__close').click(function (e) {
		e.preventDefault();
		$('.menu').removeClass("__active");
		$(".js_mobile-menu").toggleClass("__hidden");
		$(this).removeClass("__active");
	});
	//menu end

	// header scroll start
	$(document).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.header').addClass('__scroll');
			$('.js_mobile-menu').addClass('scroll')
		} else {
			$('.header').removeClass('__scroll');
			$('.js_mobile-menu').removeClass('scroll')
		}
	});
	// header scroll end

// according start
	if ($('.js_accordion').length > 0) {
		$(document).find('.js_accordion .accordion__item.close .accordion__content').hide();

		$(document).on('click', '.accordion .accordion__head', function (e) {

			$(this).children().toggleClass('_rotate');
			$(this).parent().toggleClass('open');
			$(this).next('.accordion__content').slideToggle();

		});
	}

	// according end
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	// slider start
	// const swiper = new Swiper('.js_swiper_one', {
	// 	loop: true,
	// 	slidesPerView: 4,
	// 	navigation: {
	// 		nextEl: '.section__slider-nav-next',
	// 		prevEl: '.section__slider-nav-prew',
	// 	},
	// 	pagination: {
	// 		el: '.section__slider-nav-counter',
	// 		type: 'fraction',
	// 	},
	// 	// Responsive breakpoints
	// 	breakpoints: {
	// 		320: {
	// 			slidesPerView: 1.5,
	// 		},
	// 		680: {
	// 			slidesPerView: 2.3,
	// 		},
	// 		768: {
	// 			slidesPerView: 2.4,
	// 		},
	// 		1030: {
	// 			slidesPerView: 2,
	// 		},
	// 		1440: {
	// 			slidesPerView: 3,
	// 		},
	// 		1920: {
	// 			slidesPerView: 4,
	// 		}
	// 	}
	//
	// });


	//scroll down start

	$('.section__scroll-btn').click(function (e) {
		e.preventDefault();
		let targetSection = $(this).closest('.section').next();
		$([document.documentElement, document.body]).animate({
			scrollTop: $(targetSection).offset().top
		}, 1000);
	});
	//scroll down end


	if ($(window).width() > 1200) {
		let scrollDown;

		(function () {
			let previousScroll = 0;
			$(window).scroll(() => {
				let currentScroll = $(this).scrollTop();
				currentScroll > previousScroll ? scrollDown = true : scrollDown = false;
				previousScroll = currentScroll;
			});
		}());

		$(document).scroll(function () {
			let top = $(document).scrollTop();
			if (top < 150 || scrollDown) {
				$(".top-arrow").removeClass('show');
			} else {
				$(".top-arrow").addClass('show');
			}
		});


		$(document).on('click', '.js_top-arrow', function (e) {
			$('html,body').animate({scrollTop: 0}, 800);
		});
	}

	/*popups start*/
	$(document).on('click', '[data-modal-class]', function (e) {
		e.preventDefault();
		var dataModalId = $(this).attr('data-modal-class');
		$('.popup.' + dataModalId + '').addClass('open');
	});

	$(document).on('click', '.popup__close', function (e) {
		$('.popup ').removeClass('open');
	});

	$(document).on('click', '.popup', function (e) {
		if (e.target.classList[0] == "popup") {
			$('.popup ').removeClass('open');
		}
	});
	/*popups end*/


	// slider best-fit

	// if($(window).width() > 992 && $(document).find('.js_best-fit-slider').length > 0) {
	// 	const bestFitSlider = new Swiper('.js_best-fit-slider', {
	// 		loop: true,
	// 		slidesPerView: 2.5,
	// 		navigation: {
	// 			nextEl: '.section__slider-nav-next',
	// 			prevEl: '.section__slider-nav-prev',
	// 		},
	// 		pagination: {
	// 			el: '.section__slider-nav-counter',
	// 			type: 'fraction',
	// 		},
	// 		// Responsive breakpoints
	// 		breakpoints: {
	// 			320: {
	// 				slidesPerView: 1,
	// 			},
	// 			768: {
	// 				slidesPerView: 1.5,
	// 			},
	// 			1400: {
	// 				slidesPerView: 2.5,
	// 			},
	// 			1920: {
	// 				slidesPerView: 3.5,
	// 			}
	// 		}
	// 	});
	// }

	//script for accordion

	$(".js_site-accord__item.active .js_site-accord__content").show();
	$(document).on("click", ".js_site-accord .js_site-accord__head", function(e){
		let accord = $(this).closest(".js_site-accord");
		let accordItem = $(this).closest(".js_site-accord__item");

		if(!$(accordItem).hasClass("active")) {
			$(accord).find(".active .js_site-accord__content").slideToggle();
			$(accord).find(".js_site-accord__item").removeClass("active");
			$(accordItem).addClass("active")
			$(accordItem).find(".js_site-accord__content").slideToggle();
		}
	})

	//script for tab
	$(document).on("click", "[data-tab-name]", function(e){
		let dataTabContentName = $(this).attr("data-tab-name");
		$("[data-tab-name]").removeClass("active");
		$(this).addClass("active");
		$("[data-tab-content]").removeClass("active");
		$("[data-tab-content="+ dataTabContentName + "]").addClass("active");
	});


	// checking browser for WEBP
	hasWebP().then(function () {
		if($(window).width() > 550) {
			$(".webp-img").each(function () {
				let webp = $(this).data("webp");
				$(this).attr("data-bg", webp);
				$(this).addClass("lazyload");
			});
		} else {
			$(".webp-img").each(function () {
				let webp;
				if($(this).data("webp-mobile") !== undefined)
					webp = $(this).data("webp-mobile"); else webp = $(this).data("webp");
				$(this).attr("data-bg", webp);
				$(this).addClass("lazyload");
			});
		}
	}, function () {
		if($(window).width() > 550) {
			$(".webp-img").each(function () {
				let img = $(this).data("img");
				$(this).attr("data-bg", img);
				$(this).addClass("lazyload");
			});
		} else {
			$(".webp-img").each(function () {
				let img;
				if($(this).data("img-mobile") !== undefined)
					img = $(this).data("img-mobile"); else img = $(this).data("img");
				$(this).attr("data-bg", img);
				$(this).addClass("lazyload");
			});
		}
	});

});

//script fro webp img and background
var hasWebP = (function () {
	// some small (2x1 px) test images for each feature
	var images = {
		basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
		lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
	};

	return function (feature) {
		var deferred = $.Deferred();

		$("<img>").on("load", function () {
			// the images should have these dimensions
			if (this.width === 2 && this.height === 1) {
				deferred.resolve();
			} else {
				deferred.reject();
			}
		}).on("error", function () {
			deferred.reject();
		}).attr("src", images[feature || "basic"]);

		return deferred.promise();
	}
})();

