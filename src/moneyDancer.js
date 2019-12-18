///////////////////////////////////////////////////////////////////////
// MONEY DANCER SUBCLASS
///////////////////////////////////////////////////////////////////////
var makeMoneyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moneyDancer');
  this.index = 0;
};

makeMoneyDancer.prototype = Object.create(makeDancer.prototype);
makeMoneyDancer.prototype.constructor = makeMoneyDancer;
makeMoneyDancer.prototype.oldStep = makeDancer.prototype.step;
makeMoneyDancer.prototype.step = function () {
  this.oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped htmltag.

};