var makeJumpyDancer = function(top, left, timeBetweenSteps){
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.jumpDistance = Math.floor(Math.random() * 90 + 10);
};

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function() {
  this.oldStep();
  //change direction
  this.top = this.$node.position().top + this.randomDirection(this.jumpDistance);
  this.left = this.$node.position().left + this.randomDirection(this.jumpDistance);
  // debugger;
  this.setPosition(this.top, this.left);
}

makeJumpyDancer.prototype.randomDirection = function(jumpDistance) {
  // return jumpDistance % 2 === 0 ? jumpDistance : -jumpDistance;
  if (Math.floor(Math.random()*2) % 2 === 0) {
    return this.jumpDistance;
  }
  else return -this.jumpDistance;
  // return 10;
}