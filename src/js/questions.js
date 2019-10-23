import $ from 'jquery';
import 'jquery-ui/ui/widgets/accordion';

$( function() {
    $( '#questions' ).accordion({
        active: false,
        collapsible: true,
    });

    $( '.questions__title' ).click(function() {
        $('.questions__title').find('i').removeClass('questions--arrow-open');
        if ($(this).hasClass('questions--current')) {
            $(this).removeClass('questions--current');
            $(this).find('i').removeClass('questions--arrow-open');
        } else {
            $(this).addClass('questions--current');
            $(this).find('i').addClass('questions--arrow-open');
        }
    });
});