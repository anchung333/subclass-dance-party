var makeFlippyDancer = function (top, left, timeBetweenSteps) {
  //var FlippyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('FlippyDancer');
};

makeFlippyDancer.prototype = Object.create(makeDancer.prototype);
makeFlippyDancer.prototype.constructor = makeFlippyDancer;
makeFlippyDancer.prototype.oldStep = makeDancer.prototype.step;
makeFlippyDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  this.oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped htmltag.
  //need flip here, not toggle
  this.$node.toggle();
};