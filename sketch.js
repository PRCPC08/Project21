
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
 world = engine.world;

   groundObj=new Ground(width/2,670,width,20);
   leftSide=new Ground(500,600,20,120);
   rightSide=new Ground(650,600,20,120);

   var ball_options={
    isStatic:false,
	  restitution:0.3,
	  friction:0,
	  density:1.2
   }

   

   ball=Matter.Bodies.circle(400,350,15,ball_options);
	 World.add(world,ball);



	Engine.run(engine);
//  rectMode(CENTER);
 
  
}


function draw() {
  background(50);
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20);
 leftSide.show();
  // leftSide.display();
  rightSide.show();
  groundObj.show();
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){

  //Matter.Body.applyForce(ball.Body,{x:4,y:0});
Matter.Body.applyForce(ball,{x:0,y:0},{x:6,y:7})
}

}

