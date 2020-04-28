///////////////////////////////////////////////////////////////////////
// BIG DANCER SUBCLASS
///////////////////////////////////////////////////////////////////////
var makeBigDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bigDancer');
  this.top = top;
  this.left = left;
};

makeBigDancer.prototype = Object.create(makeDancer.prototype);
makeBigDancer.prototype.constructor = makeBigDancer;
makeBigDancer.prototype.oldStep = makeDancer.prototype.step;
makeBigDancer.prototype.step = function () {
  this.oldStep.call(this);
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped htmltag.
  this.$node.animate({height: "150px", width: "150px"}, 2000, "swing").animate({height: "350px", width: "350px"}, 2000, "swing");
  // attempted to animate and shift element to give impression of central slide animation
  // this.$node.animate({top: this.top - 100, left: this.left - 100, height: "400px", width: "400px"}, 2000).animate({top: this.top, left: this.left, height: "200px", width: "200px"}, 2000);
};