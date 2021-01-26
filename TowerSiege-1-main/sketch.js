const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingshot;
var polygon;

function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //LEVEL 1
    block1 = new Box(550,160,30,40);
    block2 = new Box(580,160,30,40);
    block3 = new Box(610,160,30,40);
    block4 = new Box(640,160,30,40);
    block5 = new Box(670,160,30,40);
    block6 = new Box(700,160,30,40);
    block7 = new Box(730,160,30,40);

    //LEVEL 2 
    block8 = new Box(580,120,30,40);
    block9 = new Box(610,120,30,40);
    block10 = new Box(640,120,30,40);
    block11 = new Box(670,120,30,40);
    block12 = new Box(700,120,30,40);

    //LEVEL 3
    block13 = new Box(610,80,30,40);
    block14 = new Box(640,80,30,40);
    block15 = new Box(670,80,30,40);

    //LEVEL 4
    block16 = new Box(640,40,30,40);

    mainGround = new Ground(600,390,1200,10);
    platform = new Ground(640,200,240,10);

    polygon = new Polygon(50,200,50,50);

    slingshot = new SlingShot(polygon.body,{x:100,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    mainGround.display();
    platform.display();

    polygon.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}