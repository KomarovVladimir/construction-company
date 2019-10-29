import $ from 'jquery';

$(window).scroll(function(){
    if($(window).scrollTop() >= $('.header').outerHeight()) {
        $('.header').addClass('header--scrolled')
    } else {
        $('.header').removeClass('header--scrolled')
    }
});