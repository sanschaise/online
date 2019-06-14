// Nav

(function() {
  var transitionDuration = 300;

  var isNavTransitioning = function() {
    return App.$body.hasClass('is-transitioning-nav');
  }

  var openNav = function() {
    if ( isNavTransitioning() ) return;

    App.$body.addClass('is-viewing-nav is-transitioning-nav');
    App.$nav.css({ opacity: 0 }).show().transition({ opacity: 1 }, transitionDuration, function() {
      App.$body.removeClass('is-transitioning-nav');
    });

    // $('.headerBorder').addClass('headerBorder_none');

    // $('.headerBorder').removeClass('headerBorder');
  };

  var closeNav = function() {
    if ( isNavTransitioning() ) return;

    App.$body.removeClass('is-viewing-nav is-transitioning-nav');
    App.$nav.transition({ opacity: 0 }, transitionDuration, function() {
    App.$nav.hide();
    App.$body.removeClass('is-transitioning-nav');

    // $('.headerBorder_none').addClass('headerBorder');
    // $('.headerBorder_none').removeClass('.headerBorder_none');
    });
  };

  var isNavOpen = function() {
    return App.$body.hasClass('is-viewing-nav');
  };

  var toggleNav = function() {
    if ( isNavOpen() ) {
      closeNav();
    } else {
      openNav();
    }
  };

  $(document).on('click', '#hamburger', function() {
    toggleNav();
  });
})();
