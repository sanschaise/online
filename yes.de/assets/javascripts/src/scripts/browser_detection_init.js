// Browser detection init

$(function() {
  if ( BrowserDetect.browser == 'Explorer' || BrowserDetect.browser == 'MS Edge' ) {
    App.$html.removeClass('svgclippaths').addClass('no-svgclippaths');
    Modernizr.svgclippaths = false;
  }
});
