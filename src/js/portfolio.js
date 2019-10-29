import $ from 'jquery';
import 'jquery-ui/ui/widgets/accordion';

$( function() {
    $( "#portfolio" ).accordion({
        active: false,
        heightStyle: "content",
        collapsible: true,
    });

    $( "#portfolio-btn" ).click(function() {
        $(this).find('i').toggleClass('portfolio--arrow-open');
    });
});