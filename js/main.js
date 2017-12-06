// Sitewide Custom JS.
(function ($) {
  Drupal.behaviors.tsBase = {
    attach: function(context, settings) {

      /**
       * base theme Object
       */
      var _base = {
        // This is where you actually create functions. Use the syntax:
        // isMobile: function(){
        //  var mobileMenuDisplay = $('.mobile-menu-icon').css('display');
        //  return mobileMenuDisplay != 'none';
        // },

      init: function() {
        // Call functions here using the syntax:
        // this.functionName();
      }
    } // end _base{}

    _base.init();

    console.log( "foo" )

  } // attach
}; // tsBase
})(jQuery, Drupal, window);
