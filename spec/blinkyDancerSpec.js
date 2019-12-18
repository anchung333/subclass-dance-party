describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'fadeToggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.fadeToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 80;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new makeBouncyDancer(20, 40, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it ('should have a step function that makes its node bounce', function() {
    sinon.spy(bouncyDancer.$node, 'animate');
    bouncyDancer.step();
    expect(bouncyDancer.$node.animate.called).to.be.true;
  });
});

describe('bigDancer', function() {

  var bigDancer, clock;
  var timeBetweenSteps = 80;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bigDancer = new makeBigDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bigDancer.$node).to.be.an.instanceof(jQuery);
  });

  it ('should have a step function that makes its node grow and shrink', function() {
    sinon.spy(bigDancer.$node, 'animate');
    bigDancer.step();
    expect(bigDancer.$node.animate.called).to.be.true;
  });
});

describe('moneyDancer', function() {

  var moneyDancer, clock;
  var timeBetweenSteps = 80;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    moneyDancer = new makeMoneyDancer(20, 40, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(moneyDancer.$node).to.be.an.instanceof(jQuery);
  });


});