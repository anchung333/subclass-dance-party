// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  //this.top = top;
  //this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  //no anonymous function
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

/*stylistic choices:
background: spongebob-background-blank-template-imgflip.jpg
add'l functionality: disable button when dancer is at 5 elements
interaction: create array of other dancers' position; spongebob dancer will go to each position, go to next position after setTimeout(), and offset his position based off their position so they won't overlap
spongebob: https://gph.is/1EgqihX [sameclass1]
patrick: https://gph.is/2cuVhpo [sameclass1]
squidward: https://gph.is/1UPXrtd [sameclass2]
mr krabs: https://gph.is/2efIEgI [sameclass2]
plankton: https://gph.is/1J4xYsf [sameclass3]
gary: https://gph.is/1tKMYCf [sameclass3]

lineup: create button, onClick() set position all on fixed height
mouseover: change image of dancer to http://25.media.tumblr.com/515de21cce3036d9ef9c3fdb41c912f8/tumblr_mlvuj1YW6A1sp5292o1_500.gif
