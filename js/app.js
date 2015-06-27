/*
  By Osvaldas Valutis, www.osvaldas.info
  Available for use under the MIT License
*/



;(function( $, window, document, undefined )
{
  $.fn.doubleTapToGo = function( params )
  {
    if( !( 'ontouchstart' in window ) &&
      !navigator.msMaxTouchPoints &&
      !navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

    this.each( function()
    {
      var curItem = false;

      $( this ).on( 'click', function( e )
      {
        var item = $( this );
        if( item[ 0 ] != curItem[ 0 ] )
        {
          e.preventDefault();
          curItem = item;
        }
      });

      $( document ).on( 'click touchstart MSPointerDown', function( e )
      {
        var resetItem = true,
          parents   = $( e.target ).parents();

        for( var i = 0; i < parents.length; i++ )
          if( parents[ i ] == curItem[ 0 ] )
            resetItem = false;

        if( resetItem )
          curItem = false;
      });
    });
    return this;
  };
})( jQuery, window, document );

// Hamburger animation function specific to callmenick.com/post/animating-css-only-hamburger-menu-icons


// (function() {

//   "use strict";

//   var toggles = document.querySelectorAll(".c-hamburger");

//   for (var i = toggles.length - 1; i >= 0; i--) {
//     var toggle = toggles[i];
//     toggleHandler(toggle);
//   };

//   function toggleHandler(toggle) {
//     toggle.addEventListener( "click", function(e) {
//       e.preventDefault();
//       (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
//     });
//   }

// })();