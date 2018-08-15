/*
 * Mobile navigation
 */
// Burger menu click opens navigation
function mobileNavigation(){
    jQuery('.header-burger').on('click', function(){
        if( !jQuery(this).hasClass('active') ){
            jQuery(this).addClass('active');
            jQuery('#menu').addClass('active');
        } else {
            jQuery(this).removeClass('active');
            jQuery('#menu').removeClass('active');
        }
    });

// Close button for mobile navigation
    jQuery('.mobile-close').on('click', function(){
        jQuery('.header-burger').removeClass('active');
        jQuery('#menu').removeClass('active');
    });
}

/**
 * Init
 */
(function( $ ) {
    'use strict';
    mobileNavigation();
})( jQuery );