// Typewriter

$(function() {
  var $typeSetWrappers = $('[data-typewriter-set-wrapper]');
  var debug = false;

  if ( !$typeSetWrappers.length ) return;

  var isFirstInstance = true;

  var animateRightCustomerGraph = function() {
    var $scene = $('#customer__graph__col--right');
    var $sceneItems = $scene.find('.customer__graph__col--right__scene__item');
    // var $item = $sceneItems.first();
    // var $button = $item.find('.yes-button');
    // var $cursor = $item.find('.mouse-cursor');
    // var $arrow = $item.find('.down-arrow');



    var animateSceneItem = function($item) {
      var $arrow = $item.find('.down-arrow');
      var $cursor = $item.find('.mouse-cursor');
      var $button = $item.find('.yes-button');

      $item.addClass('scene-item-active animation-complete');

      $cursor.transition({ x: 80, y: 30 }, 0);
      $cursor.css({ opacity: 1 }).transition({ x: 0, y: 0 }, 1000, function() {
        $button.data( 'originalStyle', $button.attr('style') );
        $button.css({ background: 'black', color: 'white', transitionDuration: '0s' });

        window.setTimeout(function() {
          if ( $button.data('originalStyle') ) {
            $button.attr('style', $button.data('originalStyle'));
          } else {
            $button.removeAttr('style');
          }

          $arrow.addClass('active');

          window.setTimeout(function() {
            $cursor.transition({ opacity: 0 }, 50, function() {
              $cursor.remove();
            });

            $button.css({ transitionDuration: '' });

            console.log($item);

            
            $sceneItems = $sceneItems.not($item);


            if ( $sceneItems.length ) {
              window.setTimeout(function() {
                animateSceneItem( $sceneItems.first() );
              }, 250);
            }
          }, 100);

        }, 50);
        
      });
    };

    animateSceneItem( $sceneItems.first() );
  };

  var animateScene = function($typeSets) {
    // console.log('animateScene', $typeSets.length);

    var $typeSet = $typeSets.first();
    var $wrapper = $typeSet.closest('[data-typewriter-set-wrapper]');
    var $initialTypes = $typeSet.find('[data-typewriter]');
    var sceneLength = $initialTypes.length;
    var $arrow = $typeSet.find('.down-arrow');
    var instanceIndex = 0;
    var isComplete = $typeSet.attr('data-typewriter-complete') != undefined;

    $typeSets = $typeSets.not( $typeSet );

    $typeSet.addClass('active');

    if ( $arrow.length ) {
      $arrow.addClass('active');
    }

    var animateTypeInstance = function($types) {
      // console.log('animateTypeInstance', $types);

      var $type = $types.first();
      var text = $type.text();

      $types = $types.not($type);

      $types.css({ opacity: 0, position: 'absolute' });
      $type.css({ opacity: 1, position: 'relative' }).empty();

      var instance = new TypeIt($type.get(0), {
        speed: (debug ? 1 : 60),
        startDelay: (debug ? 0 : 250),
        waitUntilVisible: true,
        afterStep: function(step, queue, thisInstance) {
          if ( isFirstInstance ) {
            if ( $wrapper.hasClass('customer__graph__col--left') ) {
              animateRightCustomerGraph();
            }
          }

          isFirstInstance = false;
        },
        afterComplete: function(thisInstance) {
          instance.destroy();
          $type.html( $type.text().replace('*', '<span class="required">*</span>') );

          if ( (sceneLength == instanceIndex + 1) && $typeSets.length ) {
            animateScene($typeSets);
            instanceIndex = 0;
          } else {
            animateTypeInstance($types);
            instanceIndex++;
          }
        }
      })
      .type(text)
      .go();
    };

    var animateCompletionState = function($types) {
      $types.addClass('animation-complete');
    };

    if ( !isComplete ) {
      animateTypeInstance($initialTypes);
    } else {
      $typeSet.addClass('animation-complete');
    }
  };

  $typeSetWrappers.each(function() {
    var $typeSetWrapper = $(this);
    var $typeSets = $typeSetWrapper.find('[data-typewriter-set]');

    animateScene($typeSets);
  });
});
