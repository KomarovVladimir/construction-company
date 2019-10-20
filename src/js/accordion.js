import $ from 'jquery';
import 'jquery-ui/ui/widgets/accordion';

$( function() {
    $( "#accordion" ).accordion({
        active: false,
        collapsible: true,
    });
});