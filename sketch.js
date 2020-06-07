const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup() {
	createCanvas(1350,780);

	engine = Engine.create();
  world = engine.world;
  
  paper = new Paper();

  ground = new Ground(715,770,1350,50);

  side1 = new Dustbin(913,660,10,170);

  side2 = new Dustbin(994,739,170,10);

  side3 = new Dustbin(1075,660,10,170);

	Engine.run(engine);
  
}

function draw() {
  background(0);

  paper.display();

  ground.display();

  side1.display();

  side2.display();

  side3.display();


  text("x:"+mouseX,100,100); 
  text("y:"+mouseY,100,130);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-210});
	}
}
