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
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
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

describe('flippyDancer', function() {

  var flippyDancer, clock;
  var timeBetweenSteps = 80;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flippyDancer = new makeFlippyDancer(20, 40, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it ('should have a step function that makes its node do a flip', function() {
    sinon.spy(blinkyDancer.$node, 'flip');
    flippyDancer.step();
    expect(flippyDancer.$node.flip.called).to.be.true;
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
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it ('should have a step function that makes its node grow and shrink', function() {
    sinon.spy(blinkyDancer.$node, 'big');
    flippyDancer.step();
    expect(flippyDancer.$node.big.called).to.be.true;
  });
});