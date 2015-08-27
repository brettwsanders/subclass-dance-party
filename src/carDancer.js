var makeCarDancer = function(top, left, timeBetweenSteps){
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, 10);
  this.moveDistance = 2;
  this.cars = ['red-ferrarri.png', 'blue-cobra.png', 'silver-mercedes.png'];
  this.$node = $('<img class="dancer car" src="img/' + this.cars[Math.floor(Math.random()*2)] + '"/>');
  this.setPosition(top, left);

};

makeCarDancer.prototype = Object.create(makeDancer.prototype);
makeCarDancer.prototype.constructor = makeCarDancer;

makeCarDancer.prototype.step = function() {
  this.oldStep();
  //change direction
  this.top = this.$node.position().top + this.randomDirection(this.moveDistance);
  this.left = this.$node.position().left + this.randomDirection(this.moveDistance);
  // debugger;
  this.setPosition(this.top, this.left);
}

makeCarDancer.prototype.randomDirection = function(moveDistance) {
  // return moveDistance % 2 === 0 ? moveDistance : -moveDistance;
  if (Math.floor(Math.random()*2) % 2 === 0) {
    return this.moveDistance;
  }
  else return this.moveDistance;
  // return 10;
}