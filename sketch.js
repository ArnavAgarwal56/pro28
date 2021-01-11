
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  dustbinImg = loadImage("Images/dustbingreen.png");
  Background = loadImage("Images/Background.jpg")
}

function setup() {
	createCanvas(1516, 720);


	engine = Engine.create();
	world = engine.world;

	  left = new Dustbin(1140, 487, 20, 255);
    bottom = new Dustbin(1250 , 605, 200, 20);
    right = new Dustbin(1360, 487, 20, 255);
    

    paper = new Paper(200, 600,60,60);
	  ground =new Ground(width / 2, 620, width, 10,{isStatic: true});
    World.add(world, ground);

    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(Background);


  
  
  ground.display();
  paper.display();
  image(dustbinImg,1122, 360, 257, 255);
  

  fill(255, 0, 225);
	strokeWeight(10)
	stroke("yellow");
	textSize(50);
	textFont("joker");
  text("CRUMPLED BALLS - 2", width/2 - 205 , 75);  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x: 275,y: -275});
	}
}


