var makeTransformerDancer = function(top, left, timeBetweenSteps){
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.radius = 10;
  this.borderSize = 10;
  this.increasing = false;
};

makeTransformerDancer.prototype = Object.create(makeDancer.prototype);
makeTransformerDancer.prototype.constructor = makeTransformerDancer;

makeTransformerDancer.prototype.step = function() {
  this.oldStep();
  //change direction

  // this.top = this.$node.position().top + this.randomDirection(this.jumpDistance);
  // this.left = this.$node.position().left + this.randomDirection(this.jumpDistance);
  // debugger;
  this.transform();
  var rad = this.radius.toString() + "px";
  var bord = this.borderSize.toString() + "px"
  this.$node.css('border-radius', rad);
  this.$node.css('border-width', bord);
  // this.setPosition(this.top, this.left);
}

makeTransformerDancer.prototype.transform = function() {
  //if increasing, check if radius is max(default 10)  
    //if radius is max set increasing to false, else increment radius
  if (this.increasing) {
    if(this.radius === 10) {
      this.increasing = false;
    } else {
      this.radius += 1;
      this.borderSize -= 1;
    }
  } 
  else { //decreasing
    if(this.radius === 0) {
      this.increasing = true;
    } else {
      this.radius -= 1;
      this.borderSize += 1;
    }
  }
  //if decreasing, check if radius is zero
    //if radius is zero set increasing to true, else decrement radius
}