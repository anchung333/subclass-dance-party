///////////////////////////////////////////////////////////////////////
// INITIALIZE
///////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  window.dancers = [];
  window.dancerPos = [];

  ///////////////////////////////////////////////////////////////////////
  // BLINKY DANCER CLICK HANDLER
  ///////////////////////////////////////////////////////////////////////
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancerTop = $("body").height() * 0.8 * Math.random();
    var dancerLeft = $("body").width() * 0.8 * Math.random();
    var dancer = new dancerMakerFunction(
      dancerTop,
      dancerLeft,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.dancerPos.push([dancerTop, dancerLeft]);
  });


  ///////////////////////////////////////////////////////////////////////
  // BOUNCY DANCER CLICK HANDLER
  ///////////////////////////////////////////////////////////////////////
  $('.addBouncyDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var bouncyDancerTop = $("body").height() * 0.8 * Math.random();
    var bouncyDancerLeft = $("body").width() * 0.8 * Math.random();
    var dancer = new dancerMakerFunction(
      bouncyDancerTop,
      bouncyDancerLeft,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancerPos.push([bouncyDancerTop, bouncyDancerLeft]);
    window.dancers.push(dancer);
  });


  ///////////////////////////////////////////////////////////////////////
  // BIG DANCER CLICK HANDLER
  ///////////////////////////////////////////////////////////////////////
  $('.addBigDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var bigDancerTop = $("body").height() * 0.7 * Math.random();
    var bigDancerLeft = $("body").width() * 0.7 * Math.random();
    var dancer = new dancerMakerFunction(
      bigDancerTop,
      bigDancerLeft,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.dancerPos.push([bigDancerTop, bigDancerLeft]);
    console.log(window.dancerPos);
  });

  ///////////////////////////////////////////////////////////////////////
  // MONEY DANCER CLICK HANDLER
  ///////////////////////////////////////////////////////////////////////
  $('.addMoneyDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var randIndex = Math.floor(Math.random() * window.dancerPos.length);
    if (window.dancerPos.length === 0) {
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
    } else {
      var copyDancer = new dancerMakerFunction(
        window.dancerPos[randIndex][0],
        window.dancerPos[randIndex][1] + 100,
        Math.random() * 1000
      );
      window.dancerPos.splice(randIndex, 1);
      console.log(window.dancerPos);
      $('body').append(copyDancer.$node);
      window.dancers.push(copyDancer);
    }

  });

  ///////////////////////////////////////////////////////////////////////
  // LINE UP CLICK HANDLER
  ///////////////////////////////////////////////////////////////////////
  $('.lineUpButton').on('click', function (event) {
    var leftFix = 20;

    for (let i = 0; i < window.dancers.length; i++) {
      var newLeft = leftFix + "px";
      window.dancers[i].top = 400;
      var fixedStyleSettings = {
        top: window.dancers[i].top,
        left: newLeft
      };
      window.dancers[i].$node.css(fixedStyleSettings);
      leftFix += 40;
    }
  });
});
