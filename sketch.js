
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;


var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var roof, sling1, sling2, sling3, sling4, sling5;
var pendulumDiameter = 50;
var engine, world, canvasmouse, mConstraint, canvas;


function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};

	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	//Create the Bodies Here.
	
	pendulum1 = new Pendulum(200, 500, "red");
	pendulum2 = new Pendulum(210, 500, "red");
	pendulum3 = new Pendulum(220, 500, "red");
	pendulum4 = new Pendulum(230, 500, "red");
	pendulum5 = new Pendulum(240, 500, "red");


	sling1 = new Sling(pendulum1.body, {x : 100, y : 50});
	sling2 = new Sling(pendulum2.body, {x : 150, y : 50});
	sling3 = new Sling(pendulum3.body, {x : 200, y : 50});
	sling4 = new Sling(pendulum4.body, {x : 250, y : 50});
	sling5 = new Sling(pendulum5.body, {x : 300, y : 50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  display();
  drawSprites();
 
}

function display(){
	pendulum1.display();
	pendulum2.display();
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();

//	roof.display();

	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();
}

function mouseDragged() {
	 Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY}); 
	
}





  