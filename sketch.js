var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3;
var rectbody1,rectbody2,rectbody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(600, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color(255)

	rect1 = createSprite((packageSprite.x)/2, 400, 10, 100);
	rect1.shapeColor = "red";
	rect2 = createSprite((packageSprite.x),455,310,10)
	rect2.shapeColor = "red";
	rect3 = createSprite((packageSprite.x)*3/2, 400, 10, 100);
	rect3.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	var packageOptions = {
		isStatic : true ,
		restitution : 0.6

	}

	packageBody = Bodies.circle(width/2 , 100 , 12 , packageOptions);

	World.add(world, packageBody);
	
	var Options = {
		isStatic:true
	}

	ground = Bodies.rectangle(width/2, height-35, width, 20 , Options );
 	World.add(world, ground);

	rectbody1 = Bodies.rectangle(rect1.x, rect1.y, rect1.width, rect1.height , Options );
 	World.add(world, rectbody1);

	rectbody2 = Bodies.rectangle(rect2.x , rect2.y , rect2.width , rect2.height , Options );
 	World.add(world, rectbody2);
	
	rectbody3 = Bodies.rectangle(rect3.x , rect3.y , rect3.width , rect3.height , Options );
 	World.add(world, rectbody3);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed()
  Engine.update(engine);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {

		Matter.Body.setStatic(packageBody, false);
	}

}
