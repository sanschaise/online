// Smooth scroll

$(function() {
  if(location.hash.length > 1) {
    var hash = location.hash.substr(1);
    var $el = $('[name="' + hash + '"], #' + hash);

    // carousel modules can mess up spacing of page, so wait a second before scrolling
    setTimeout(function() {
      $el = $('[name="' + hash + '"], #' + hash);
      if($el.length) App.scrollTo($el);
    }, 250);
  }

});

$(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
  // If you want to disable the call to `e.preventDefault()` you can add a ` data-default-jump-link` attribute to the link.
  // This is good if e.g. you want to enable the default history behavior for jump links.
  // <a href="#jump-link" data-default-jump-link>the hash in this jump link get's added to the current URL as usual</a>

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname && location.search == this.search) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      App.scrollTo(target);
      if( $(this).attr('data-default-jump-link') == undefined ) {
        e.preventDefault();
      }
    }
  }
});

App.scrollTo = function($target) {
  var smoothScrollOffset = 0;
  var duration = 2000;

  if(!$target.length) {
    console.warn('Can\'t find target to scroll to.', $target);
    return;
  }

  $('html, body').animate({
    scrollTop: $target.offset().top - smoothScrollOffset
  }, {
    duration: duration,
    easing: 'easeInOutQuart',
    complete: function() {
      // App.hideOnPageNav();
    }
  });
};
