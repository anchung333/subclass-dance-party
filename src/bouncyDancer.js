///////////////////////////////////////////////////////////////////////
// BOUNCY DANCER SUBCLASS
///////////////////////////////////////////////////////////////////////
var makeBouncyDancer = function (top, left, timeBetweenSteps) {
  //var BouncyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncyDancer');
  this.top = top;
  this.left = left;
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;
makeBouncyDancer.prototype.oldStep = makeDancer.prototype.step;
makeBouncyDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  this.oldStep.call(this);
  //var bouncyTop = (this.$node.css('top').bind(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped htmltag.
  // need to refine how Patrick lineup. he will after some time but only when he wants!!!
  this.$node.animate({top: this.top + 20 + "px"}).animate({top: this.top - 20 + "px"});
};