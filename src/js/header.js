$(function() {
    'use strict'

    if($(window).scrollTop() >= $('.header').outerHeight()) {
        $('.header').addClass('header_scrolled')
    }

    $(window).scroll(function(){
        if($(window).scrollTop() >= $('.header').outerHeight()) {
            $('.header').addClass('header_scrolled')
        } else {
            $('.header').removeClass('header_scrolled')
        }
    });

    $('#header-btn').click(function() {
        $('.header').toggleClass('header_mobile_show')
    });

    $('.header__nav-item').click(() => {
        $('.header').removeClass('header_mobile_show');
    });
})