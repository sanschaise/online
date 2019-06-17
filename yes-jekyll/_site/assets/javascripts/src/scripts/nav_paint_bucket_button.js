// Nav paint bucket button

$(function() {
  var delayBeforeFadeOut = 4000;
  var transitionDuration = 300;
  var transitionTimer;
  

  var isColorPickerTransitioning = function() {
    return App.$body.hasClass('is-transitioning-color-picker');
  }

  var closeColorPicker = function() {
    if ( isColorPickerTransitioning() ) return;

    App.$body.removeClass('is-viewing-color-picker is-transitioning-color-picker');
    App.$colorPicker.transition({ opacity: 0 }, transitionDuration, function() {
      App.$colorPicker.hide();
      App.$body.removeClass('is-transitioning-color-picker');
    });

    $(document).off('click.closeHeaderColorPalette');

    if ( transitionTimer ) window.clearTimeout(transitionTimer);
  };

  var openColorPicker = function() {
    if ( isColorPickerTransitioning() ) return;

    App.$body.addClass('is-viewing-color-picker is-transitioning-color-picker');
    App.$colorPicker.css({ opacity: 0 }).show().transition({ opacity: 1 }, transitionDuration, function() {
      App.$body.removeClass('is-transitioning-color-picker');
    });

    $(document).on('click.closeHeaderColorPalette', function(e) {
      if ( !$(e.target).closest('#header__palette').length ) {
        closeColorPicker();
      }
    });
  };

  var isColorPickerOpen = function() {
    return App.$body.hasClass('is-viewing-color-picker');
  };

  $(document).on('click', '#jumbo-button', function() {
     // openColorPicker();
     
  });


  var toggleColorPicker = function() {
    // var $swatches = $('#header__palette [data-swatch]');
    //   var $randomSwatch = $( $swatches[Math.floor(Math.random()*$swatches.length)] );

    //   $randomSwatch.trigger('click');
    
      
    if ( App.breakpoint.isMobile() ) {

      // var $swatches = $('#header__palette [data-swatch]');
      // var $randomSwatch = $( $swatches[Math.floor(Math.random()*$swatches.length)] );

      // $randomSwatch.trigger('click');
      return;
    } else {
      if ( isColorPickerOpen() ) {
         closeColorPicker();
      } else {
        openColorPicker();
      }
    }
  };

  $(document).on('click', '#header__paintbucket-button', function() {
    toggleColorPicker();
  });

  $(document).on('click.initialHeaderColorPaletteClick', function(e) {
    if ( !$(e.target).closest('#header__palette').length ) {
      closeColorPicker();
      $(document).off('click.initialHeaderColorPaletteClick');
    } else {
      if ( transitionTimer ) window.clearTimeout(transitionTimer);
    }
  });

  transitionTimer = window.setTimeout(function() {
    closeColorPicker();
  }, delayBeforeFadeOut);

  if ( App.breakpoint.isMobile() ) {
    App.$body.removeClass('is-viewing-color-picker');
  }

  if ( App.$body.hasClass('is-viewing-color-picker') ) {
     openColorPicker();
  } else {
    $(document).off('click.initialHeaderColorPaletteClick');
    if ( transitionTimer ) window.clearTimeout(transitionTimer);
  }
});
