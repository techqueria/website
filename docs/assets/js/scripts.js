

/*===================================================================================*/
/*	GENERAL — HELPER FUNCTIONS
/*===================================================================================*/

// Get Breakpoint set in main.css (at the end)
function getCSSBreakpoint() {
	return	window.getComputedStyle(document.querySelector('body'), ':before')
			.getPropertyValue('content')
			.replace(/\"/g, '');
}

// Checks current Breakpoint
function cssBreakpoint(bp) {
	return getCSSBreakpoint() === bp && true;
}

// Debounce/Delay Window Resize Function for better Resize Performance
function debounce(func, wait, immediate) {
	var timeout,
		wait = wait || 100; // Default Delay 100ms
	return function() {
		var context	= this,
			args 	= arguments,
			later	= function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			},
			callNow	= immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	}
}
// Call Resize Function
//$(window).resize(debounce(function() { ... })); // Without custom Delay (Default is 100ms)
//$(window).on('resize', debounce(function() { ... }, 250)); // With custom Delay of 250ms and 'on' Event Handler e.g.


/*===================================================================================*/
/*	FIXED NAVIGATION (BOOTSTRAP AFFIX)
/*===================================================================================*/

$(document).ready(function() {
	
	function affixWrap() {
		$('.navbar .navbar-collapse').affix({
			offset: {
				top: $('.navbar-header').outerHeight(true)
			}
		});
		$('.affix, .affix-top')
			.wrap('<div class="affix-wrapper"></div>')
			.parent().css('min-height', $('.affix, .affix-top').outerHeight(true));
	}
	
	function affixUnwrap() {
		$('.affix, .affix-top').unwrap();
	}
	
	if (cssBreakpoint('md')) {
		affixWrap();
		var wrapped = true;
	}
	else var wrapped = false;
	
	$(window).resize(debounce(function () {
		if (cssBreakpoint('md') && !wrapped) {
			affixWrap();
			wrapped = true;
		}
		else if (cssBreakpoint('xs') && wrapped) {
			affixUnwrap();
			wrapped = false;
		}
	}));
	
});


/*===================================================================================*/
/*	HEADER RESIZE
/*===================================================================================*/

$(document).ready(function() {
	
	// Settings
	var	topHeaderHeight		= $('.navbar-header').outerHeight(true), // -------	Get Height of Element that is not fixed and not being changed — used for Delay before Element starts changing
		objectStyles		= {
			navbarPadTop	: { // --------------------------------------------	Custom Element/Object Name — type what you want
				element		: '.navbar .navbar-collapse', // ------------------	CSS Class of Element that is being changed
				style		: 'padding-top', // -------------------------------	CSS Style that is being changed
				start		: 'currentValueFromCSS', // -----------------------	Change from e.g. 30 (Pixels) — if a String/Text is entered then the current Value from CSS File is being taken
				end			: 0, // -------------------------------------------	Change to e.g. 0 (Pixels)
				distance	: 300, // -----------------------------------------	Element is being resized for e.g. 300 (Pixels) scrolled
				delay		: topHeaderHeight // ------------------------------	Delay before Element starts changing e.g. 50 (Pixels)
			},
			navbarPadBot	: {
				element		: '.navbar .navbar-collapse',
				style		: 'padding-bottom',
				start		: 'currentValueFromCSS',
				end			: 0,
				distance	: 300,
				delay		: topHeaderHeight
			},
			navbarLogoH		: {
				element		: '.navbar-brand img',
				style		: 'height',
				start		: 'currentValueFromCSS',
				end			: 20,
				distance	: 300,
				delay		: topHeaderHeight
			}
		},
		scrolledFromTop		= 0,
		running				= false;
	
	function initialize() {
		$.each(objectStyles, function(obj, prop) {
			prop.start				= typeof prop.start === 'string' ? parseInt($(prop.element).css(prop.style), 10) : prop.start;
			prop.maxChange			= prop.start - prop.end;
			prop.scrollRatio		= prop.maxChange / prop.distance;
			prop.animTriggered		= false;
			prop.animFinished		= false;
			$(prop.element).addClass('animate');
		});
	}
	
	function destroy() {
		$.each(objectStyles, function(obj, prop) {
			$(prop.element)
				.css(prop.style, '')
				.removeClass('animate animate-after');
		});
	}
	
	function resizeHeader() {
		scrolledFromTop 	= $(document).scrollTop();
		running				= false;
		$.each(objectStyles, function(obj, prop) {
			if (scrolledFromTop > prop.delay) {
				if (!prop.animTriggered) prop.animTriggered = true;
				prop.scrolled = scrolledFromTop - prop.delay;
				if (prop.scrolled <= prop.distance) {
					prop.currentChange = prop.start - prop.scrolled * prop.scrollRatio.toFixed(2);
					$(prop.element).css(prop.style, prop.currentChange + 'px');
					if (prop.animFinished) {
						prop.animFinished = false;
						$(prop.element).removeClass('animate-after');
					}
				}
				else if (!prop.animFinished) {
					prop.animFinished = true;
					$(prop.element)
						.css(prop.style, prop.end + 'px')
						.addClass('animate-after');
				}
			}
			else if (prop.animTriggered) {
				prop.animTriggered = false;
				$(prop.element).css(prop.style, prop.start + 'px');
			}
		});
	}
	
	if (cssBreakpoint('md')) {
		initialize();
		var initialized = true;
	}
	else var initialized = false;
	
	$(window).resize(debounce(function () {
		if (cssBreakpoint('md') && !initialized) {
			initialize();
			resizeHeader();
			initialized = true;
		}
		else if (cssBreakpoint('xs') && initialized) {
			destroy();
			initialized = false;
		}
	}));
	
	$(window).scroll(function () {
		if (cssBreakpoint('md') && !running) window.requestAnimationFrame(resizeHeader);
		running = true;
	});
	
});


/*===================================================================================*/
/*	DROPDOWN ON HOVER (NAVIGATION)
/*===================================================================================*/

$(document).ready(function () {
	
	function dropdownHover() {
		$('.dropdown, .dropdown-submenu').addClass('hover');
		$(document).on({
			mouseenter: function () {
				$('.open').removeClass('open');
				$(this).addClass('open').find('.dropdown-toggle').removeAttr('data-toggle');
			},
			mouseleave: function () {
				$(this).removeClass('open').find('.dropdown-toggle').attr('data-toggle', 'dropdown');
			}
		}, '.dropdown.hover');
		
		$(document).on({
			mouseleave: function () {
				$(this).removeClass('open');
			}
		}, '.dropdown-submenu.hover.open');
	}
	
	function dropdownPress() {
		$('.dropdown, .dropdown-submenu').removeClass('hover');
	}
	
	$('.dropdown-submenu [data-toggle=dropdown]').click(function(event) {
		$(this).parent()
			.siblings('.open').removeClass('open')
			.find('.open').removeClass('open');
		$(this).parent()
			.toggleClass('open')
			.find('.open').removeClass('open');
		event.preventDefault();
		event.stopPropagation();
	});
	
	if (cssBreakpoint('md')) {
		dropdownHover();
		var dropdownHoverActive = true;
	}
	else var dropdownHoverActive = false;
	
	$(window).resize(debounce(function () {
		if (cssBreakpoint('md') && !dropdownHoverActive) {
			dropdownHover();
			dropdownHoverActive = true;
		}
		else if (cssBreakpoint('xs') && dropdownHoverActive) {
			dropdownPress();
			dropdownHoverActive = false;
		}
	}));
	
});


/*===================================================================================*/
/*	SMOOTH MAIN CONTENT REVEAL
/*===================================================================================*/

$(document).ready(function () {
	$('main').addClass('js-reveal');
});


/*===================================================================================*/
/*	AOS — ANIMATE ON SCROLL
/*===================================================================================*/

$(document).ready(function () {
	
	// Settings
	var aosEnable			= true, // ------------------------------------------------	Turn on/off AOS
		aosMobileDisable	= false, // -----------------------------------------------	Turn on/off AOS on Mobile
		aosContainer		= 'main', // ----------------------------------------------	Container (e.g. 'body' [with Footer] or '#main'/'main' [without Footer])
		aosItems			= '[class*="col-"], .isotope .item, .posts .post', // -----	Add/remove Elements to be animated
		aosAnimation		= 'fade-up'; // -------------------------------------------	Animation type (More on: https://github.com/michalsnik/aos)
	
	AOS.init({
		offset:		120, // -----------------------------------------------------------	Default: 120
		duration:	500, // -----------------------------------------------------------	Default: 400
		easing:		'ease-out-cubic', // ----------------------------------------------	Default: 'ease'
		delay:		0, // -------------------------------------------------------------	Default: 0
		once:		true, // ----------------------------------------------------------	Default: false
		disable:	!aosEnable, // ----------------------------------------------------	Default: false (Set above)
		startEvent:	'DOMContentLoaded' // ---------------------------------------------	Default: 'DOMContentLoaded'
	});
	
	function enableAOS() {
		$(aosContainer + ' ' + aosItems).attr({
			'data-aos'		: aosAnimation
		});
		disableAOS($(aosContainer + ' .collapsed').parents(aosContainer + ' > *').next().find(aosItems), true);
		aosEnabled = true;
	}
	
	function disableAOS(aosItem, stayEnabled) {
		aosItem.removeAttr('data-aos');
		aosEnabled = stayEnabled || false;
	}
	
	if (aosEnable && (!aosMobileDisable || cssBreakpoint('md')))
		enableAOS();
	else
		aosEnabled = false;
	
	$(window).resize(debounce(function () {
		if (aosEnable && !aosEnabled && (!aosMobileDisable || cssBreakpoint('md'))) {
			enableAOS();
			$(aosContainer + ' ' + aosItems).addClass('aos-animate');
		}
		else if (aosEnabled && aosMobileDisable && cssBreakpoint('xs'))
			disableAOS($(aosItems));
	}));
	
	$('a[data-filter]').click(function () {
		if(aosEnabled)
			disableAOS($(aosItems));
	});
	
});


/*===================================================================================*/
/*	OWL CAROUSEL
/*===================================================================================*/

$(document).ready(function () {
	
	var dragging = true;
	var owlElementID = "#owl-main";
	
	function fadeInReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").css({ opacity: 0 });
		}
	}
	
	function fadeInDownReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
		}
	}
	
	function fadeInUpReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
		}
	}
	
	function fadeInLeftReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
		}
	}
	
	function fadeInRightReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
		}
	}
	
	function fadeIn() {
		$(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInDown() {
		$(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInUp() {
		$(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInLeft() {
		$(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInRight() {
		$(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	$(owlElementID).owlCarousel({
		
		autoPlay: 5000,
		stopOnHover: true,
        navigation: true,
		pagination: true,
		singleItem: true,
		addClassActive: true,
        transitionStyle: "fade",
        navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"],
			
    	afterInit: function() {
        	fadeIn();
        	fadeInDown();
        	fadeInUp();
        	fadeInLeft();
        	fadeInRight();
    	},
		
    	afterMove: function() {
        	fadeIn();
			fadeInDown();
        	fadeInUp();
        	fadeInLeft();
        	fadeInRight();
    	},
		
    	afterUpdate: function() {
        	fadeIn();
			fadeInDown();
        	fadeInUp();
        	fadeInLeft();
        	fadeInRight();
    	},
		
    	startDragging: function() {
			dragging = true;
    	},
		
    	afterAction: function() {
        	fadeInReset();
			fadeInDownReset();
			fadeInUpReset();
        	fadeInLeftReset();
        	fadeInRightReset();
			dragging = false;
    	}
		
    });
	
	if ($(owlElementID).hasClass("owl-one-item")) {
		$(owlElementID + ".owl-one-item").data('owlCarousel').destroy();
	}
	
	$(owlElementID + ".owl-one-item").owlCarousel({
		singleItem: true,
		navigation: false,
		pagination: false
	});
	
	$('#transitionType li a').click(function () {
		
		$('#transitionType li a').removeClass('active');
		$(this).addClass('active');
		
		var newValue = $(this).attr('data-transition-type');
		
		$(owlElementID).data("owlCarousel").transitionTypes(newValue);
		$(owlElementID).trigger("owl.next");
		
		return false;
		
	});
	
	$("#owl-testimonials").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		singleItem: true,
		addClassActive: true,
		autoHeight: true,
		transitionStyle: "fadeInAfterOut",
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-projects").owlCarousel({
		navigation: false,
		autoHeight: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		rewindNav: false,
		singleItem: true,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-latest-works").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 4,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-videos").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 5,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-audio").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 5,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-popular-posts").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 5,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-related-posts").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 2,
		itemsDesktopSmall: [1199, 2],
		itemsTablet: [977, 2],
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-featured-works").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		singleItem: true,
		transitionStyle: "goDown",
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-work-samples").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		items: 3,
		itemsDesktopSmall: [1199, 3],
		itemsTablet: [977, 2],
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-work-samples-big").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		singleItem: true,
		transitionStyle: "fadeUp",
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-work, [id*='owl-work-modal']").owlCarousel({
		autoPlay: 5000,
		slideSpeed: 200,
		paginationSpeed: 600,
		rewindSpeed: 800,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		singleItem: true,
		autoHeight: true,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-office").owlCarousel({
		autoPlay: 5000,
		slideSpeed: 200,
		paginationSpeed: 600,
		rewindSpeed: 800,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		singleItem: true,
		autoHeight: true,
		transitionStyle: "fade",
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$("#owl-clients").owlCarousel({
		autoPlay: 5000,
		stopOnHover: true,
		rewindNav: true,
		items: 4,
		itemsDesktopSmall: [1199, 4],
		itemsTablet: [977, 3],
		navigation: true,
		pagination: true,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
	});
	
	$(".slider-next").click(function () {
		owl.trigger('owl.next');
	})
	
	$(".slider-prev").click(function () {
		owl.trigger('owl.prev');
	})
	
});


/*===================================================================================*/
/*	ISOTOPE PORTFOLIO
/*===================================================================================*/

$(document).ready(function () {
	
	var $container = $('.items');
	
	$container.imagesLoaded(function () {
		$container.isotope({
			itemSelector: '.item'
		});
	});
	
	var resizeTimer;
	
	function resizeFunction() {
		$container.isotope();
	}
	
	$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(resizeFunction, 100);
	});
	
	$('a.panel-toggle.collapsed').click(function () {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(resizeFunction, 100);
	});
	
	$('.portfolio .filter li a').click(function () {
		
		$('.portfolio .filter li a').removeClass('active');
		$(this).addClass('active');
		
		var selector = $(this).attr('data-filter');
	
		$container.isotope({
			filter: selector
		});
		
		return false;
		
	});
	
});


/*===================================================================================*/
/*	ISOTOPE BLOG
/*===================================================================================*/

$(document).ready(function () {
	
	var $container = $('.posts');
	
	$container.imagesLoaded(function () {
		$container.isotope({
			itemSelector: '.post'
		});
	});
	
	var resizeTimer;
	
	function resizeFunction() {
		$container.isotope();
	}
	
	$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(resizeFunction, 100);
	});
	
	$('.format-filter li a, .format-wrapper a').click(function () {
		
		var selector = $(this).attr('data-filter');
		
		$container.isotope({
			filter: selector
		});
		
		$('.format-filter li a').removeClass('active');
		$('.format-filter li a[data-filter="'+selector+'"]').addClass('active');
		
		$('html, body').animate({
			scrollTop: $('.format-filter').offset().top -130
		}, 600);
		
		return false;
		
	});
	
});


/*===================================================================================*/
/*	TABS
/*===================================================================================*/

$(document).ready(function () {
	
	$('.tabs.tabs-reasons').easytabs({
		cycle: 1500
	});
	
	$('.tabs.tabs-top, .tabs.tabs-circle-top, .tabs.tabs-2-big-top, .tabs.tabs-side').easytabs({
		animationSpeed: 200,
		updateHash: false
	});
	
});


/*===================================================================================*/
/*	ACCORDION (FOR ISOTOPE HEIGHT CALCULATION)
/*===================================================================================*/

$(document).ready(function () {
	if ($('.panel-group .portfolio').length > 0) {
		$('.panel-group .collapse.in').collapse({
			toggle: true
		});
	}
});


/*===================================================================================*/
/*	GO TO TOP / SCROLL UP
/*===================================================================================*/

! function (a, b, c) {
	a.fn.scrollUp = function (b) {
		a.data(c.body, "scrollUp") || (a.data(c.body, "scrollUp", !0), a.fn.scrollUp.init(b))
	}, a.fn.scrollUp.init = function (d) {
		var e = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, d),
			f = e.scrollTitle ? e.scrollTitle : e.scrollText,
			g = a("<a/>", {
				id: e.scrollName,
				href: "#top"/*,
				title: f*/
			}).appendTo("body");
		e.scrollImg || g.html(e.scrollText), g.css({
			display: "none",
			position: "fixed",
			zIndex: e.zIndex
		}), e.activeOverlay && a("<div/>", {
			id: e.scrollName + "-active"
		}).css({
			position: "absolute",
			top: e.scrollDistance + "px",
			width: "100%",
			borderTop: "1px dotted" + e.activeOverlay,
			zIndex: e.zIndex
		}).appendTo("body"), scrollEvent = a(b).scroll(function () {
			switch (scrollDis = "top" === e.scrollFrom ? e.scrollDistance : a(c).height() - a(b).height() - e.scrollDistance, e.animation) {
			case "fade":
				a(a(b).scrollTop() > scrollDis ? g.fadeIn(e.animationInSpeed) : g.fadeOut(e.animationOutSpeed));
				break;
			case "slide":
				a(a(b).scrollTop() > scrollDis ? g.slideDown(e.animationInSpeed) : g.slideUp(e.animationOutSpeed));
				break;
			default:
				a(a(b).scrollTop() > scrollDis ? g.show(0) : g.hide(0))
			}
		}), g.click(function (b) {
			b.preventDefault(), a("html, body").animate({
				scrollTop: 0
			}, e.scrollSpeed, e.easingType)
		})
	}, a.fn.scrollUp.defaults = {
		scrollName: "scrollUp",
		scrollDistance: 300,
		scrollFrom: "top",
		scrollSpeed: 300,
		easingType: "linear",
		animation: "fade",
		animationInSpeed: 200,
		animationOutSpeed: 200,
		scrollText: "Scroll to top",
		scrollTitle: !1,
		scrollImg: !1,
		activeOverlay: !1,
		zIndex: 2147483647
	}, a.fn.scrollUp.destroy = function (d) {
		a.removeData(c.body, "scrollUp"), a("#" + a.fn.scrollUp.settings.scrollName).remove(), a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(), a.fn.jquery.split(".")[1] >= 7 ? a(b).off("scroll", d) : a(b).unbind("scroll", d)
	}, a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);

$(document).ready(function () {
	$.scrollUp({
		scrollName: "scrollUp", // Element ID
		scrollDistance: 700, // Distance from top/bottom before showing element (px)
		scrollFrom: "top", // "top" or "bottom"
		scrollSpeed: 1000, // Speed back to top (ms)
		easingType: "easeInOutCubic", // Scroll to top easing (see http://easings.net/)
		animation: "fade", // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: "<i class='icon-up-open-mini'></i>", // Text for element, can contain HTML
		scrollTitle: " ", // Set a custom <a> title if required. Defaults to scrollText
		scrollImg: 0, // Set true to use image
		activeOverlay: 0, // Set CSS color to display scrollUp active point, e.g "#00FFFF"
		zIndex: 1001 // Z-Index for the overlay
	});
});


/*===================================================================================*/
/*	ANIMATED / SMOOTH SCROLL TO ANCHOR
/*===================================================================================*/

$(document).ready(function() {
	
	$("a.scroll-to").click(function() {
		
		if ($(window).width() > 1024) {
			var navbarHeight = 45;
		}
		else {
			var navbarHeight = 0;
		}
		
		if ($(this).attr('data-anchor-offset') !== undefined) {
			var anchorOffset = $(this).attr('data-anchor-offset');
		}
		else {
			var anchorOffset = 0;
		}
		
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - navbarHeight - anchorOffset + "px"
		}, {
			duration: 1000,
			easing: "easeInOutCubic"
		});
		return false;
	});
	
});


/*===================================================================================*/
/*	SCROLL SPY
/*===================================================================================*/

$(document).ready(function () {
	$('body').scrollspy({ 
		target: '.navbar-collapse',
		offset: 50
	})
});


/*===================================================================================*/
/*	IMAGE HOVER
/*===================================================================================*/

$(document).ready(function () {
	$('.icon-overlay a').prepend('<span class="icn-more"></span>');
});


/*===================================================================================*/
/*	MODALS
/*===================================================================================*/

$('.modal').on('hidden.bs.modal', function () {
	$('.video-container iframe').attr("src", $(".video-container iframe").attr("src"));
});


/*===================================================================================*/
/*	DATA REL
/*===================================================================================*/

$(document).ready(function () {
	$('a[data-rel]').each(function () {
		$(this).attr('rel', $(this).data('rel'));
	});
});


/*===================================================================================*/
/*	TOOLTIP
/*===================================================================================*/

$(document).ready(function () {
	if ($("[rel=tooltip]").length) {
		$("[rel=tooltip]").tooltip();
	}
});


/*===================================================================================*/
/*	CONVERTING iOS SAFARI VIEWPORT UNITS (BUGGY) INTO PIXELS
/*===================================================================================*/

$(document).ready(function () {
	window.viewportUnitsBuggyfill.init();
});


/*===================================================================================*/
/*	FORM VALIDATION
/*===================================================================================*/

$(document).ready(function() {
	
	$('#contactform, #commentform').validate({
		
		errorPlacement: function(error, element) {  
			$(element).attr({
				'placeholder' : error.html()
			});
		},
		
		focusInvalid: false,
		
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true,
				minlength: 10
			}
		},
		
		messages: {
			name: {
				required: 'Please enter your name!',
				minlength: jQuery.format('Name requires at least {0} characters!')
			},
			email: {
				required: 'Please enter your email!',
				email: 'Please enter a valid email!'
			},
			message: {
				required: 'Please enter a message!',
				minlength: jQuery.format('Message requires at least {0} characters!')
			}
		},
		
		submitHandler: function(form) {
			$('#contactform .btn-submit').html('Sending message ...');
			$('#commentform .btn-submit').html('Sending comment ...');
			$(form).ajaxSubmit({
				success: function(responseText, statusText, xhr, $form) {
					$(form).delay(1300).slideUp('fast');
					$('#response').html(responseText).hide().delay(1300).slideDown('fast');
				}
			});
			return false;
		}
		
	});
	
});