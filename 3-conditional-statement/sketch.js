//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;

let mySound;

function preload() {
  soundFormats('wav', 'ogg');
  mySound = loadSound('snowball.wav');
}




function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3,10);
}

function draw(){
	background("lightblue");
  fill("gray")
  triangle(500,400,450,300,400,400)
  triangle(450,400,400,350,350,400)
  fill("white")
  triangle(455,310,450,300,445,310)
  triangle(410,360,400,350,390,360)


  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(random(0,width), 0, -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed,diameter){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.diameter = diameter;
	}

	drawMe(){  // draw the running person
      noStroke();
    		fill("white");
		    ellipse(this.x,this.y,this.diameter+10,this.diameter+10);
        ellipse(this.x,this.y+24,this.diameter+20,this.diameter+20);
        ellipse(this.x,this.y+55,this.diameter+30,this.diameter+30);
        fill("black")
        ellipse(this.x,this.y+19,3,3);
        ellipse(this.x,this.y+24,3,3);
        ellipse(this.x,this.y+29,3,3);
        ellipse(this.x-3,this.y-2,3,3);
        ellipse(this.x+3,this.y-2,3,3);
        fill("orange")
        triangle(this.x-3,this.y+4,this.x,this.y-3,this.x+1,this.y+4)
	}

	moveMe(){
    if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x += this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	noStroke();
    	fill("white");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){

		this.y = this.y+ 1.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
            me.diameter = me.diameter+1
            mySound.setVolume(0.1);
            mySound.play();
            // this.speed = -this.speed;

    		}
  	}

}
