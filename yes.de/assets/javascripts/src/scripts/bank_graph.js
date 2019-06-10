// Bank Graph

$(function() {
  var $graph = $('#bank__graph');

  if ( !$graph.length ) return;

  var $sets = $graph.find('.bank__graph__col__scene-item-wrapper');

  var animate = function($items, isFirstSequence) {
    if ( !$items.length ) return;

    var $item = $items.first();
    var $button = $item.find('.button');
    var $arrow = $item.find('.down-arrow');
    var $star = $item.find('.star');
    var duration = isFirstSequence ? 0 : 1000;

    isFirstSequence = true;

    $items = $items.not($item);

    window.setTimeout(function() {
      $item.addClass('scene-item-active animation-complete');
      animate($items);
      window.setTimeout(function() {
        $arrow.addClass('active');
      }, 200);
    }, duration);
  };

  var beginAnimation = function() {
    $sets.each(function() {
      var $items = $(this).find('.bank__graph__col__scene-item');

      animate($items, true);
    });
  };

  $(window).on('scroll.bankGraph', $.throttle(250, function() {
    if ( App.inViewport( $graph ) ) {
      $(window).off('scroll.bankGraph');

      beginAnimation();
    }
  }));

  $(window).trigger('scroll.bankGraph');
});
