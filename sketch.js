
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){

}

function setup() {
var canvas =	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,1200,20)
	ball = new Ball(100,200,20,20)
	dustbinline1 = new Dustbin(865,350,10,90)
	dustbinline2= new Dustbin (755,350,10,90)
	dustbinline3= new Dustbin (810,380,100,20)

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  dustbinline1.display();
  dustbinline2.display();
  dustbinline3.display();
  
  drawSprites();
 
}



