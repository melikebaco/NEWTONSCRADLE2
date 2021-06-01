
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var constrainedlog;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(600,100,600,20);

	ball1 = new Ball(400);
	ball2 = new Ball(500);
	ball3 = new Ball(600);
	ball4 = new Ball(700);
	ball5 = new Ball(800);

	chain1 = new Chain(ball1.ball,roof.body,-100);
	chain2 = new Chain(ball2.ball,roof.body,-50);
	chain3 = new Chain(ball3.ball,roof.body,0);
	chain4 = new Chain(ball4.ball,roof.body,50);
	chain5 = new Chain(ball5.ball,roof.body,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  //chain.display();

  drawSprites();
 
}



function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.ball,ball1.ball1.position,{x:-85,y:85})
	}
}

function mouseDragged(){
	Matter.Body.setPosition(ball1.ball,{x: mouseX, y: mouseY});
}