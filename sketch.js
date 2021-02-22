const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box17,box18,box19,box20,box21,box22,box23,box24,box25;
var engine, world;
var box1,box2,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ground;
var box3;
var box4,box5;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    //level 1
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    //level 2
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12= new Box(450,235,30,40);
    //level 3
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    //top
    box16 = new Box(390,155,30,40);
    //next level
    box17 = new Box(800,275,30,40);
    box18 = new Box(830,275,30,40);
    box19 = new Box(860,275,30,40);
    box20 = new Box(890,275,30,40);
    box21 = new Box(920,275,30,40);
    //level 2
    box22 = new Box(830,235,30,40);
    box23 = new Box(860,235,30,40);
    box24 = new Box(890,235,30,40);
    //level 3
    box25 = new Box(860,195,30,40);
    
    ground = new Ground(600,height,1200,20);
    bird = new rock(100,100);
}

function draw(){
    background("cyan");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    //next level
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    ground.display();
    bird.display();
}