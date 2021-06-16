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


	//menu start
	$('.js_mobile-menu').click(function () {
		$(this).closest('header').toggleClass('menu-open');
		$('body').toggleClass('oh');
	});

	$(document).on('click', function (e) {
		if($(e.target).closest('.header.menu-open').length === 0 && $('.header.menu-open').length > 0 && $(e.target).closest('.js_mobile-menu').length === 0) {
			$('.header').removeClass('menu-open');
			$('body').removeClass('oh');
		}
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
	const swiper1 = new Swiper('.js_swiper_one', {
		loop: true,
		slidesPerView: 4.5,
		spaceBetween: 35,
		// Responsive breakpoints
		breakpoints: {
			320: {
				slidesPerView: 1.2,
			},
			768: {
				slidesPerView: 2.2,
			},
			1030: {
				slidesPerView: 3.5,
			},
			1440: {
				slidesPerView: 4.5,
				spaceBetween: 35,

			},
		}
	});


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



	//script for tab
	$(document).on("click", "[data-tab-name]", function(e){
		let dataTabContentName = $(this).attr("data-tab-name");
		$(this).closest('.js_site-tab').find("[data-tab-name]").removeClass("active");
		$(this).addClass("active");
		$(this).closest('.js_site-tab').find("[data-tab-content]").removeClass("active");
		$("[data-tab-content="+ dataTabContentName + "]").addClass("active");
	});

	//script for counter
	if ($('[data-max-count]').length > 0) {

		function animateValue(id, start, end, duration) {
			if (start === end) return;
			let range = end - start;
			let current = start;
			let increment = end > start ? 1 : -1;
			let stepTime = Math.abs(Math.floor(duration / range));
			let obj = document.getElementById(id);
			let timer = setInterval(function () {
				current += increment;
				obj.innerHTML = current;
				if (current == end) {
					clearInterval(timer);
				}
			}, stepTime);
		}

		function showCounterChange() {
			let counterNum = $('[data-max-count]');
			counterNum.each(function () {
				let id = $(this).attr('id');
				let end = $(this).attr('data-max-count')
				animateValue(id, 0, end, 2000);
			});
		}

		let counterOffsetTop = $('[data-max-count]').offset().top;
		let screenHeight = $(window).height();
		let counterFlag = true;

		$(window).scroll(() => {
			counterOffsetTop = $('[data-max-count]').offset().top - screenHeight;

			if (counterOffsetTop < $(document).scrollTop()
				&& counterFlag) {
				showCounterChange();
				$('.section-clients__testimonials-rating-inner').addClass('animate')
				counterFlag = false;
			}
		});


		if (counterOffsetTop < $(document).scrollTop() + 300
			&& counterFlag) {
			showCounterChange();
			$('.section-clients__testimonials-rating-inner').addClass('animate')
			counterFlag = false;
		}
	}


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


	//validation script
	if($('#contact-form').length > 0) {
		$('#contact-form').validate({
			errorElement: "span",
			rules: {
				fullName: {
					required: true,
					minlength: 2
				},
				organisation: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true,
				},
				phoneNumber: {
					required: true,
					number: true
				},
			}
		});

		$(document).on('click', '.js_submit-form-btn', function (e) {
			$(this).siblings('[type="submit"]').click();
		});
	}
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

