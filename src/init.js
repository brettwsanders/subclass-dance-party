$(document).ready(function(){
  window.dancers = [];
  window.totalCars = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     var dancerNames = [ 
    "makeBlinkyDancer",
    "makeJumpyDancer",
    "makeTransformerDancer",
    "makeCarDancer"
    ]

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    if (dancerMakerFunctionName === "addFifty") {
      for (var i = 0; i < 50; i++) {
        addDancer(dancerNames[Math.floor(Math.random() * dancerNames.length)]);
      }
      // debugger;
    }
    else {
      addDancer(dancerMakerFunctionName);
    }

    
    function addDancer(dancerName) {
      // get the maker function for the kind of dancer we're supposed to make
      var dancerMakerFunction = window[dancerName];

      // make a dancer with a random position

      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      if (dancer.constructor === makeCarDancer) {
        window.totalCars.push(dancer);
      }
      $('body').append(dancer.$node);
      window.dancers.push(dancerMakerFunction);
    }
  });
  
  $(".lineUpDancersButton").on("click", function(event){
    var left = 0;
    var lineUp = $(this).data("line-up");
    console.log($('.dancer'));
    //$('.dancer').css("top", "100px");
    $('.dancer').each(function(index) {
      
      $(this).animate({ "top":  $("body").height()/2, "left":left}, 1000);
      console.log(left);
      var offset;
      //if car dancer, use $(this).css("width"), else use $(this).css("border-left-width")
      if ($(this).hasClass('car')) {
        offset = parseInt($(this).css("width"))/ 2;
      } else {
        offset = $(this).css("border-left-width")
      }
      // var offset = $(this).css("width") || $(this).css("border-left-width")
      left += parseInt(offset, 10);
    })
  });
});

