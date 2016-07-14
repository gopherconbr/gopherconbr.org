$(document).ready(function() { 

	"use strict";

    /************** Nav Scripts **************/

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1) {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    });

    $('a').click(function() {
        if ($(this).attr('href') === '#') {
            return false;
        }
    });

    // Margin on the menu to make room for sidebar menu if it exists

    if ($('.sidebar-menu-toggle').length && !$('.sidebar-menu-toggle i').hasClass('variant-deleted-mrv')) {
        $('nav').find('.menu').css('margin-right', 32);
    }

    // Mobile menu toggle

    $('.mobile-menu-toggle').click(function() {
        $('nav').toggleClass('open-menu');
    });

    // Sidebar menu toggle

    $('.sidebar-menu-toggle').click(function() {
        if ($('.instagram-sidebar').hasClass('show-sidebar')) {
            $('.instagram-sidebar').toggleClass('show-sidebar');
            $('.sidebar-menu').toggleClass('show-sidebar');
        } else {
            $('.sidebar-menu').toggleClass('show-sidebar');
            $('.main-container').toggleClass('reveal-sidebar');
            $('nav .container').toggleClass('reveal-sidebar');
        }
    });

    $('.instagram-toggle').click(function() {
        if ($('.sidebar-menu').hasClass('show-sidebar')) {
            $('.sidebar-menu').toggleClass('show-sidebar');
            $('.instagram-sidebar').toggleClass('show-sidebar');
        } else {
            $('.instagram-sidebar').toggleClass('show-sidebar');
            $('.main-container').toggleClass('reveal-sidebar');
            $('nav .container').toggleClass('reveal-sidebar');
        }
    });

    $('.main-container').click(function() {
        if ($('.sidebar-menu').hasClass('show-sidebar')) {
            $('.sidebar-menu').toggleClass('show-sidebar');
            $('.main-container').toggleClass('reveal-sidebar');
            $('nav .container').toggleClass('reveal-sidebar');
        }

        if ($('.instagram-sidebar').hasClass('show-sidebar')) {
            $('.instagram-sidebar').toggleClass('show-sidebar');
            $('.main-container').toggleClass('reveal-sidebar');
            $('nav .container').toggleClass('reveal-sidebar');
        }
    });

    /************** Divider Scripts **************/

    $('.background-image-holder').each(function() {

        // Append background-image <img>'s as li item CSS background for better responsive performance
        var imgSrc = $(this).children('.background-image').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('.background-image').hide();
        $(this).css('background-position', '50% 0%');
        // Check if the slider has a color scheme attached, if so, apply it to the slider nav
    });

    /************** Countdown Timer **************/

    $('.countdown').each(function() {
        $(this).countdown({
            until: new Date($(this).attr('data-date'))
        });
    });
}); 

$(window).load(function() { 

	"use strict";

    var navHeight = $('nav').outerHeight();
    $('.inner-link').smoothScroll({
        offset: -navHeight,
        speed: 800
    });

    /************** Parallax Scripts **************/

    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    var isChrome = !!window.chrome;
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var prefix;

    if (isFirefox) {
        prefix = '-moz-';
    } else if (isIE) {

    } else if (isChrome || isSafari) {
        prefix = '-webkit-';
    }

    $('.parallax-background').each(function() {
        $(this).attr('data-bottom-top', prefix + 'transform: translate3d(0px,-100px, 0px)');
        $(this).attr('data-center', prefix + 'transform: translate3d(0px,0px, 0px)');
        $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,100px, 0px)');
    });

    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false
        });
    }
}); 
