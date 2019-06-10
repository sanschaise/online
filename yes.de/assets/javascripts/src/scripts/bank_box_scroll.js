// Bank box scroll

$(function() {
  var $bankCol = $('#customer__graph__col--right')

  if ( !$bankCol.length ) return;

  var $bankBox = $('#customer__banks-using-yes-container');

  $(window).on('scroll.bankBox', $.throttle(500, function() {
    if ( App.breakpoint.isMobile() ) return;

    if ( $bankBox.offset().top > $bankCol.offset().top + 300 ) {
      $bankBox.addClass('active');
    } else {
      $bankBox.removeClass('active');
    }
  }));

  $(window).trigger('scroll.bankBox');
});
