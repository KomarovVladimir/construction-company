import $ from 'jquery';

$(function() {
    'use strict'

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
})