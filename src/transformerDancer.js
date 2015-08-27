var makeTransformerDancer = function(top, left, timeBetweenSteps){
  this.oldStep = makeDancer.prototype.step;
  
  this.size = Math.floor(Math.random() * 20  + 5);
  this.radius = this.size;
  this.borderSize = this.size;
  this.increasing = false;
  this.rotate = 0;
  makeDancer.call(this, top, left, timeBetweenSteps/4);
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
  this.rotate += 5;
  this.$node.css('border-radius', rad);
  this.$node.css('border-width', bord);
  this.$node.css('transform' , 'rotate('+ this.rotate +'deg)');
  // this.setPosition(this.top, this.left);
}

makeTransformerDancer.prototype.transform = function() {
  //if increasing, check if radius is max(default 10)  
    //if radius is max set increasing to false, else increment radius
  if (this.increasing) {
    if(this.radius === this.size) {
      this.increasing = false;
    } else {
      this.radius += 1;
      //this.borderSize -= 1;
    }
  } 
  else { //decreasing
    if(this.radius === 0) {
      this.increasing = true;
    } else {
      this.radius -= 1;
      //this.borderSize += 1;
    }
  }
  //if decreasing, check if radius is zero
    //if radius is zero set increasing to true, else decrement radius
}