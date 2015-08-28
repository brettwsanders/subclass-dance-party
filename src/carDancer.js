var makeCarDancer = function(top, left, timeBetweenSteps){
  this.oldStep = makeDancer.prototype.step;
  this.directions = {
    left:true,
    right:false,
    up:false,
    down:false
  } //left, top, right, down
  makeDancer.call(this, top, left, 10);
  this.moveDistance = 2;
  this.cars = ['red-ferrarri.png', 'blue-cobra.png', 'silver-mercedes.png'];
  this.$node = $('<img class="dancer car" src="img/' + this.cars[Math.floor(Math.random()*2)] + '"/>');
  this.setPosition(top, left);
  this.direction = 270;
  this.goingLeft = true;
  this.directions = {
    left:true,
    right:false,
    up:false,
    down:false
  } //left, top, right, down

};

makeCarDancer.prototype = Object.create(makeDancer.prototype);
makeCarDancer.prototype.constructor = makeCarDancer;

makeCarDancer.prototype.step = function() {
  this.oldStep();
  //change direction
  // this.top = this.$node.position().top + this.randomDirection(this.moveDistance);
  // debugger;
  debugger;
  this.checkAllCollisions.bind(this)();

  this.drive();
  // this.left = this.$node.position().left - 1;
  // // debugger;
  // this.setPosition(this.top, this.left);
}

makeCarDancer.prototype.randomDirection = function(moveDistance) {
  // return moveDistance % 2 === 0 ? moveDistance : -moveDistance;
  if (Math.floor(Math.random()*2) % 2 === 0) {
    return this.moveDistance;
  }
  else return this.moveDistance;
  // return 10;
}
makeCarDancer.prototype.drive = function(moveDistance) {
  // if next location is off the board, turn around
  //  ;
  // debugger;

  //if hits left side, turn right

  this.reverseDirection();
  // if next location is on the board, continue going
  if(this.directions['left']) {
    this.left = this.left - 5;
  } else if(this.directions['right']) {
    this.left = this.left + 5;
  }

  if(this.directions['up']) {
    this.top = parseInt(this.top, 10)- 5;
  } else if(this.directions['down']) {
    this.top = parseInt(this.top, 10) + 5;
  }
  
  // randomly turns left or right every 10 seconds
  if(Math.floor(Math.random() * 100) === 0) {
    // debugger;
    this.turnRight();
  }
  this.setPosition(this.top, this.left);
}

makeCarDancer.prototype.reverseDirection = function() {
  if (this.$node.position().left < 0 && this.directions['left']) {//left side of board
    this.directions['left']= false;
    this.directions['right']= true;
    this.$node.css('transform' , 'rotate('+ 180 +'deg)');
  }else {
    //if hits right side, turn left
    if (parseInt(this.$node.position().left, 10) + parseInt(this.$node.css("width"), 10) > parseInt($("body").css("width"), 10)
      && this.directions['right']) {
      //right side of board 
      this.directions['right'] = false;
      this.directions['left'] = true;
      this.$node.css('transform' , 'rotate('+ 0 +'deg)');
    }
  }
  //if hits top, turn down
  if(parseInt(this.$node.position().top, 10) < 0 && this.directions['up']) {
    // debugger;
    this.directions['up'] = false;
    this.directions['down'] = true;
    this.$node.css('transform' , 'rotate('+ 270 +'deg)');

  //if hits bottom, turn up
  }else if (parseInt(this.$node.position().top, 10) + parseInt(this.$node.css("height"), 10) > parseInt($("body").css("height"), 10)
    && this.directions['down']) {
    this.directions['down'] = false;
    this.directions['up'] = true;
    this.$node.css('transform' , 'rotate('+ 90 +'deg)');
  }
};

makeCarDancer.prototype.turnRight = function(degrees) {
  // this.$node.css('transform' , 'rotate('+ 90 +'deg)');
  var direction = this.directions;
  if (direction.left) {
    direction.left = false;
    direction.up = true;
    this.$node.css('transform' , 'rotate('+ 90 +'deg)');
  } else if (direction.up) {
    direction.up = false;
    direction.right = true;
    this.$node.css('transform' , 'rotate('+ 180 +'deg)');
  } else if (direction.right) {
    direction.right = false;
    direction.down = true;
    this.$node.css('transform' , 'rotate('+ 270 +'deg)');
  } else {
    direction.down = false;
    direction.left = true;
    this.$node.css('transform' , 'rotate('+ 0 +'deg)');
  }
}
// call on all car objects in window
makeCarDancer.prototype.checkAllCollisions = function() {
  // debugger;
  $('.car').each(function(index, element) {
    var position = $(element).position();
    
    this.checkCollision(parseInt(position.left, 10), parseInt(position.top, 10));
  }).bind(this);
};

//make method that handles single collision
makeCarDancer.prototype.checkCollision = function(targetLeft, targetTop) {
  var right = this.left + parseInt(this.$node.css("width"), 10);
  var bottom = this.left + parseInt(this.$node.css("height"), 10);

  if (this.left <= targetLeft && targetLeft <= right) {
    if (this.top <= targetTop && targetTop <= bottom) {
      this.reverseDirection();
      return true;
    }
  }
  return false;
};