//create a variable to hold one ball
let b;
let anotherBall;
let anotherBalltwo;
let f;

function setup() {
  createCanvas(800, 400);
  b = new Ball(0, 100,"red", 80, 2); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,"green",40, 2);
anotherBalltwo = new Ball(400,50,"purple",70, 4);
  f = new Faces(10,100,"pink");
}


function draw(){
	background("lightblue");
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
      anotherBalltwo.drawBall();
    anotherBalltwo.moveBall();
    f.drawface();

}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color,diameter,speed){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.diameter = diameter;
        this.speed = speed;

	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,this.diameter, 40);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen

  this.x = this.x+this.speed;

if (this.x===800){
  this.speed = -this.speed
  this.diameter = this.diameter-10
}
  if (this.x===0){
    this.speed = -this.speed
    this.diameter = this.diameter-10
}

  this.y = this.y+this.speed;

    if (this.y===400){
      this.speed = -this.speed
      this.diameter = this.diameter-10
}
      if (this.y===0){
        this.speed = -this.speed
        this.diameter = this.diameter-10

  }
 }
}




class Faces {
  constructor(x,y, color){
    this.x = x;
    this.y = y;
    this.color = color

  }

   drawface() {
   fill(this.color);
    ellipse(this.x+100,this,this.y+100,50)
    fill(0)
  ellipse(this.x+90,this.y+95,15)
   ellipse(this.x+110,this.y+95,15)
   line(this.x+95,this.y+115,this.x+105,this.y+115)

  }
}
