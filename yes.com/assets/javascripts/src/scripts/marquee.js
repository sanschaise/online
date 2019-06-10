// Marquee

$(function() {
  var $marquees = $('.marquee');

  var animate = function($frame, marqueeTextWidth) {
    $frame.stop().transition({ x: 0 }, 0);
    $frame.stop().transition({ x: -marqueeTextWidth }, 6000, 'linear', function() {
      animate($frame, marqueeTextWidth);
    });
  };

  var initialize = function() {
    $marquees.each(function() {
      var $marquee = $(this);
      var $frame = $marquee.find('.marquee__frame');
      var $marqueeText = $marquee.find('.marquee__text');
      var marqueeWidth = $marquee.width();
      var marqueeTextWidth = $marqueeText.outerWidth(true);
      var num = Math.ceil( marqueeWidth / marqueeTextWidth );

      if ( !$marquee.data('originalFrame') ) {
        $marquee.data( 'originalFrame', $marquee.html() );
      }

      for (var i = num - 1; i >= 0; i--) {
        $frame.append( $marqueeText.clone() );
      }

      animate($frame, marqueeTextWidth);
    });
  };

  var destroy = function() {
    $marquees.each(function() {
      var $marquee = $(this);

      $marquee.empty().html( $marquee.data('originalFrame') );
    });
  };

  $(window).on('resize', $.debounce(500, function() {
    destroy();
    initialize();
  }));

  $marquees.css({ opacity: 0 });

  initialize();

  window.setTimeout(function() {
    destroy();
    initialize();

    $marquees.transition({ opacity: 1 }, 300);
  }, 500);
});
