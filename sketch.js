const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1,box3,box4;
var pig3,log3,box5,log4,log5;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new pig(810, 350);
    log1 = new log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new pig(810, 220);
    bird1 = new bird(100,100);
    log3 =  new log(810,180,300, PI/2);
   
    box5 = new Box(810,160,70,70);
    log4 = new log(760,120,150, PI/7);
    log5 = new log(870,120,150, -PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig3.display();
    log1.display();
    log3.display();
    log4.display();
    log5.display();
    bird1.display();
}