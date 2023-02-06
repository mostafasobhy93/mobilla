$(document).ready(function () {
    'use strict';
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('bi-list bi-x-lg');
    });
    
// Accordion Active
    $('.accordion-button').click(function() {
        $('.accordion-item').removeClass('active');
        if (!$(this).hasClass("collapsed")) {
            $(this).parents('.accordion-item').addClass('active');
        }
    });
    
// Show/Hide Payment Type
    $('[name="pay-type"]').change(function() {
        if($('#visa').is(':checked')) {
            $('.paypal-form').hide();
            $('.visa-form').show();
        } else {
            $('.visa-form').hide();
            $('.paypal-form').show();
        }
    });
});


// Copy to Clipboard
function copyClipboard() {
    // Get the text field
    var copyText = document.getElementById("copyInput");
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}
