// Scroll up down buttons

$(document).on('click', '#home__carrot', function() {
  App.scrollTo( $('#section--customer') );
});

$(document).on('click', '#back-to-top-button', function() {
  App.scrollTo( App.$html );
});
