var ball, ground;
var dustbin1, dustbin, dustbin3;
var dustbinImage;
var launch;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;

function preload() {
    dustbinImage = loadImage("pictures/dustbingreen.png");
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

    ground = Bodies.rectangle(width / 2, height - 25, width, 15, { isStatic: true });
    World.add(world, ground);

    ball = new Paper(200, 200, 60, 60);

    dustbin1 = new Dustbin(725, height - 120, 30, 150);
    dustbin2 = new Dustbin(975, height - 120, 30, 150);
    dustbin3 = new Dustbin(850, height - 80, 250, 40);

    launch = new Launcher(ball.body, { x: 200, y: 340 });

	Engine.run(engine);
}


function draw() {
    background(255);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 15);
    ball.display();
    imageMode(CENTER);
    image(dustbinImage, 850, 450, 250, 260);
    launch.display();

    drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    launch.fly();
    console.log("mouseReleased");
}