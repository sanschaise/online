// Color palette and swatches

$(function() {
  // Code to control the randomized swatch styles

  var lightOrDark = function(color) {
    // https://awik.io/determine-color-bright-dark-using-javascript/
    // Variables for red, green, blue values
    var r, g, b, hsp;
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
      // If HEX --> store the red, green, blue values in separate variables
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

      r = color[1];
      g = color[2];
      b = color[3];
    }
    else {
      // If RGB --> Convert it to HEX: http://gist.github.com/983661
      color = +('0x' + color.slice(1).replace(
      color.length < 5 && /./g, '$&$&'));

      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
    }
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if ( hsp > 127.5 ) {
      return 'light';
    } else {
      return 'dark';
    }
  };

  var getRandomHexColor = function() {
    return "#000000".replace(/0/g,function() {
      return (~~(Math.random()*16)).toString(16);
    });
  };

  var getRandomFloat = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var getRandomBool = function() {
    return (Math.random() >= 0.5);
  };

  var generateBackground = function(backgroundColorOnly) {
    var styles = {};

    if ( backgroundColorOnly || getRandomBool() ) {
      // A plain old background color
      var backgroundColor = getRandomHexColor();
        styles.borderWidth= '1.2';
        styles.borderColor ='rgba(0,0,0,0)'
      if ( lightOrDark( backgroundColor ) == 'dark' ) {
        styles.color = '#ffffff';
      } else {
        styles.color = '';
      }

      styles.background = backgroundColor;
    } else {
      // A background gradient

      var rotation = '0deg';
      var randomNumber = Math.random();

      if ( getRandomBool() ) {
        if ( randomNumber > 0.75 ) {
          rotation = '270deg';
        } else if ( randomNumber > 0.5 ) {
          rotation = '180deg';
        } else if ( randomNumber > 0.25 ) {
          rotation = '90deg';
        } else {
          rotation = '0deg';
        }
      }

      var colors = [];
      var darkColors = 0;
      var colorCount = 2;

      for (var i = colorCount - 1; i >= 0; i--) {
        var color = getRandomHexColor()

        colors.push( color );

        if ( lightOrDark(color) == 'dark' ) {
          darkColors++;
        }
      }

      if ( darkColors >= 1 ) {
        styles.color = '#ffffff';
      }

      var gradient = 'linear-gradient(' + rotation + ', ' + colors.join(', ') + ')';

      styles.background = colors[0];
      styles.backgroundImage = gradient;
    }

    return styles;
  };

  var generateBoxShadow = function() {
    var styles = {};

    if ( getRandomBool() ) {
      styles.boxShadow = '';
    } else {
      var r = getRandomInt(100, 255);
      var g = getRandomInt(100, 255);
      var b = getRandomInt(100, 255);
      var a = getRandomFloat(0, 1);
      var color = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
      var attributes = [
        getRandomInt(1, 5) + 'px',
        getRandomInt(1, 5) + 'px',
        getRandomInt(0, 5) + 'px',
        getRandomInt(1, 1) + 'px'
      ];
      var shadowStyle = getRandomBool() ? '' : ''

      styles.boxShadow = [
        attributes.join(' '),
        color,
        shadowStyle
      ].join(' ');
    }

    return styles;
  };



  var generateBorder = function(minBorder) {
    var styles = {};

    minBorder = minBorder === undefined ? 0 : minBorder;

    if ( getRandomBool() ) {
      // styles.borderWidth = getRandomInt(minBorder, 2);
      styles.borderWidth = 1.2;
    } else {
      // styles.borderWidth = getRandomInt(minBorder, 3);
      styles.borderWidth = 1.2;
    }

    styles.borderStyle = 'solid';

    return styles;
  };

  var generateBorderRadius = function() {
    var styles = {};

    styles.borderRadius = getRandomFloat(0, 2) + 'em';

    return styles;
  };

  var generateBorderColor = function() {
    var styles = {};

    var color = getRandomHexColor();

     while ( lightOrDark(color) == 'light' ) {
          color = getRandomHexColor();
      }

    styles.borderColor = color;
    styles.color = color;
    return styles;
  };

  var generatePageBackground = function() {
    var styles = {};
    var options = [
      'white',
      'white',
      'white',
      'aliceblue',
      'bisque',
      'ghostwhite',
      'honeydew',
      'lavender',
      'lavenderblush',
      // 'lightgreen',
      // 'lightgray',
      'lightblue',
      'lightred'

      // 'lightcoral',
      // 'palegreen'
    ];

    styles.background = options[Math.floor(Math.random()*options.length)];

    return styles;
  }

  // Logic that controls generating a random style on the fly.
  var generateStyle = function(index) {
    var styles = {

      allStyleableElements: {},
      styleableButtons: {},
      smallElements: {},
      page: {}
    };

    var borderRadius = generateBorderRadius();
    var smallBorderRadius = {
      'border-radius': ( parseFloat( borderRadius['borderRadius'] ) / 4 ) + 'em'
    };

    // All elements
    if ( index === undefined || index > 0 ) {
      var backgroundOnly = (index == 1);

      styles.allStyleableElements = $.extend( generateBackground(backgroundOnly), styles.allStyleableElements );
      styles.allStyleableElements = $.extend( generateBoxShadow(), styles.allStyleableElements );
    }

    styles.allStyleableElements = $.extend( generateBorderColor(), styles.allStyleableElements );

    // Buttons
    var minBorder = 0;
    if ( index == 0 ) minBorder = 1;

    styles.styleableButtons = $.extend( generateBorder(minBorder), styles.styleableButtons );
    styles.styleableButtons = $.extend( borderRadius, styles.styleableButtons );

    // Elements with smaller radius
    styles.smallElements = $.extend(smallBorderRadius, styles.smallElements );

    styles.allStyleableElementsAndButtons = $.extend( {}, styles.allStyleableElements, styles.styleableButtons );

    // Page styles
    styles.page = $.extend( generatePageBackground(), styles.page );

    return styles;
  };

  var generateSmallStrokeStyle = function() {
    var styles = {
      'border-width': '1px'
    };

    return styles;
  }

  // A list of all CSS properties that can be applied to a styleable element.
  var styleReset = {
    'background': '',
    'background-image': '',
    'color': '',
    'box-shadow': '',
    'border-radius': '',
    'border-color': '',
    'border-style': '',
    'border-width': ''
  };

  var pageStyleReset = {
    'background': ''
  }

  var resetStyleableElements = function() {
    App.$html.removeClass('has-styled-elements has-styled-background-elements').css(pageStyleReset);
    App.$nav.css(pageStyleReset);
    $allStyleableElements.css(styleReset).data('styles', null);
  };

  // A list of all elements that can be styled.
  var allStyleableElementSelectors = [
    '.styleable',
    '.button',
    '.square-button',
    '.rounded'
  ];

  if ( Modernizr.svgclippaths ) {
    // allStyleableElementSelectors.push('.star');
  }

  var $allStyleableElements = $( allStyleableElementSelectors.join(', ') );

  // Styleable buttons can have some additional styles added to them (like border-radius).
  var $styleableButtons = $allStyleableElements.filter('.yes-button');

  // Randomizes the swatches by choosing from the styles array.
  var randomizeSwatches = function($swatches) {
    $swatches.each(function(index) {
      var $swatch = $(this);
      var styles = generateStyle(index);

      $swatch.css(styles.allStyleableElementsAndButtons)
             .css(styles.smallElements)
             .data('styles', styles);
    });
  };

  var performElementStyle = function(styles, options) {
    options = options ? options : {};

    var skipReset = options.skipReset;
    var skipPageStyle = options.skipPageStyle;


    if ( !skipReset ) {
      resetStyleableElements();
    }

    if ( !skipPageStyle && styles.page ) {
      App.$html.add(App.$nav).css( styles.page );
    }

    App.$html.addClass('has-styled-elements');

    if ( styles.allStyleableElements.background ) {
      App.$html.addClass('has-styled-background-elements');
    }

    $allStyleableElements.css( styles.allStyleableElements )
    $styleableButtons.css( styles.styleableButtons );
  }

  randomizeSwatches( $('[data-swatch]') );

  $(document).on('click', '[data-swatch-refresh]', function() {
    var $swatchParent = $(this).closest('[data-swatch-parent]');

    randomizeSwatches( $swatchParent.find('[data-swatch]') );
  });

  $(document).on('click', '[data-swatch-reset]', function() {
    resetStyleableElements();
  });





  // When a user clicks a swatch, all styleable elements are applied
  // with that swatch's styles.
  $(document).on('click', '[data-swatch]', function() {
    paintPaused = true;
    var $swatch = $(this);
    var styles = $swatch.data('styles');

    if ( typeof styles === 'undefined' ) {
      console.warn('Could not find swatch style for swatch', $swatch);
      return;
    }
    performElementStyle(styles);
  });




  // Special case for preset swatches, e.g. to match a brand's styles
  $(document).on('click', '[data-preset-swatch]', function() {
    paintPaused = true;
    var $swatch = $(this);
    var swatchStyleName = $swatch.attr('data-preset-swatch');
    var styles = {};

    if ( swatchStyleName == 'bank1' ) {
      styles = {
        allStyleableElements: {
          'color': '#ffffff',
          'background': '#EA3323'
        },
        styleableButtons: {
          'border-radius': '15px',
          'border': 'none'
        }
      };
    } else if ( swatchStyleName == 'bank2' ) {
      styles = {
        allStyleableElements: {
          'color': '#ffffff',
          'background': '#ED702E'
        },
        styleableButtons: {
          'border-radius': '1px',
          'boxShadow': 'rgba(0,0,0,0.2) 2px 2px 2px 0px',
          'border': 'none'
        }
      };
    } else {
      console.warn('Could not find preset swatch style for swatch.', $swatch);
      return;
    }

    performElementStyle(styles);
  });

  var $styleguideSwatchSelector = $('#styleguide-swatch-selector');
  var $styleguideSwatches = $styleguideSwatchSelector.find('[data-swatch-attribute]');
  var $styleguideSwatchRefreshors = $styleguideSwatchSelector.find('[data-styleguide-swatch-refresh]');

  var randomizeStyleguideSwatches = function($swatches) {
    $swatches.each(function() {
      var $swatch = $(this);
      var swatchAttributeName = $swatch.attr('data-swatch-attribute');
      var swatchAttributeValue = $swatch.attr('data-swatch-attribute-value');
      var styles = {
        allStyleableElements: {},
        styleableButtons: {},
        page: {},
        smallElements: {}
      };

      if ( swatchAttributeName == 'border-color' ) {
        styles.allStyleableElements = $.extend( generateBorderColor(), styles.allStyleableElements );
        styles.allStyleableElements = $.extend( generateBorder(1), styles.allStyleableElements );
      } else if ( swatchAttributeName == 'background-color' ) {
        styles.allStyleableElements = $.extend( generateBackground(true), styles.allStyleableElements );
      } else if ( swatchAttributeName == 'random' ) {
        styles = generateStyle();
      } else if ( swatchAttributeName == 'border-radius' ) {
        if ( swatchAttributeValue ) {
          styles.styleableButtons = {
            'border-radius': swatchAttributeValue
          }
        } else {
          styles.styleableButtons = $.extend( generateBorderRadius(), styles.styleableButtons );
        }
      }

      if ( swatchAttributeName != 'border-radius' ) {
        styles.page = $.extend( generatePageBackground(), styles.page );
      }

      var swatchStyles = styles.allStyleableElementsAndButtons ? styles.allStyleableElementsAndButtons : styles.allStyleableElements;

      $swatch.css(swatchStyles)
             .css(styles.smallElements)
             .data('styles', styles);
    });
  };

  randomizeStyleguideSwatches($styleguideSwatches);

  $(document).on('click', '[data-styleguide-swatch-refresh]', function() {
    var $wrapper = $(this).closest('[data-swatch-parent]');
    var $swatches = $wrapper.find('[data-swatch-attribute]');
    randomizeStyleguideSwatches($swatches);
  });

  //pedro edit
  var instructions = [ "Login with your bank", "Verify your Identity", "Pay with your bank", "Skip forms with your bank" , "Sign documents with your bank" ];
  var i_count = 0;
  $(document).on('click', '.yes-button, .header__paintbucket-button', function() {

          var $swatches = $('#header__palette [data-swatch]');
      var $randomSwatch = $( $swatches[Math.floor(Math.random()*$swatches.length)] );
      


      $randomSwatch.trigger('click');
       randomizeSwatches( $('[data-swatch]') );
     
       console.log("test");
       i_count++;
        $(".header__page-title--home").text(instructions[i_count%instructions.length]);

      //   if( paintPaused ){
      //   slideshow = setInterval(function(){ 
      //     paintPaused = true;
      //   $("#jumbo-button").trigger('click');
      //   // alert("Hello"); 
      //   console.log('switch');
      // }, 5000);
      // } else {
      //   stopSideshow();
      // }


     
  });

   $(document).on('click', '.header__paintbucket-button', function() {
          paintPaused = !paintPaused;
      console.log(paintPaused);
      window.clearInterval(slideshow);
      slideshow = window.setInterval(ticker, 5000);

     

    });

// function stopSideshow() {
//   paintPaused = false;
//   clearInterval(slideshow);
// }
var ticker = function() {

  if (paintPaused == false) {
      var $swatches = $('#header__palette [data-swatch]');
      var $randomSwatch = $( $swatches[Math.floor(Math.random()*$swatches.length)] );
      


      // $randomSwatch.trigger('click');
       styles = $randomSwatch.data('styles')
      performElementStyle(styles);

       randomizeSwatches( $('[data-swatch]') );
  // $("#jumbo-button").trigger('click');
  // alert("Hello"); 
  console.log('switch');
  }
};

var slideshow = window.setInterval(ticker, 5000);







  //end of edit

  // Styleguide swatch selector
  $(document).on('click', '[data-swatch-attribute]', function() {
    paintPaused = true;
    var $swatch = $(this);
    var styles = $swatch.data('styles');
    var swatchAttribute = $swatch.attr('data-swatch-attribute');
    var skipReset = false;
    var skipPageStyle = false;

    if ( typeof styles === 'undefined' ) {
      console.warn('Could not find swatch style for swatch', $swatch);
      return;
    }

    if ( swatchAttribute == 'border-radius' ) {
      skipReset = true;
      skipPageStyle = true;
    }

    performElementStyle(styles, {
      skipReset: skipReset,
      skipPageStyle: skipPageStyle
    });
  });
});



