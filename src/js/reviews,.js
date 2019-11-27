$(function() {
    'use strict'

    $('#reviews-carousel').owlCarousel({
        margin: 32,
        nav:true,
        responsive : {
            0 : {
                items : 1,
            },
            992 : {
                items: 3,
            }
        }
    });
})