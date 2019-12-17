var makeBigDancer = function (top, left, timeBetweenSteps) {
  //var BigDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('BigDancer');
};

makeBigDancer.prototype = Object.create(makeDancer.prototype);
makeBigDancer.prototype.constructor = makeBigDancer;
makeBigDancer.prototype.oldStep = makeDancer.prototype.step;
makeBigDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  this.oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped htmltag.
  //need growing/shrink here, not toggle
  this.$node.toggle();
};