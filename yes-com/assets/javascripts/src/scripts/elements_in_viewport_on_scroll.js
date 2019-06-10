// Elements in viewport on scroll

$(function() {
  var $elements = $('[data-apply-class-on-scroll]');

  if ( !$elements.length ) return;

  $(window).on('scroll.elementsInViewport', $.throttle(250, function() {
    $elements.each(function() {
      var $el = $(this);

      if ( App.inViewport( $el ) ) {
        var classToApply = $el.attr('data-apply-class-on-scroll');

        $el.addClass(classToApply);

        $elements = $elements.not($el);

        if ( !$elements.length ) {
          $(window).off('scroll.elementsInViewport');
        }
      }
    });
  }));

  $(window).trigger('scroll.elementsInViewport');
});
