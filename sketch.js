
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var fan1,fan2,fan3,fan4;
var ball1,ball2;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   ground = Bodies.rectangle(0,400,400,20,ground_options);
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

 fan = new Ground(50,370,50,30);
 fan1 = new Ground(150,370,50,30);
 fan2 = new Ground(250,370,50,30);
 fan3 = new Ground(350,370,50,30);

 ball1 = new ball(50,100,60);
 ball2 = new ball(100,150,20);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  
  
  rect(ground.position.x,ground.position.y,750,20);
  fan.show(); fan1.show(); fan2.show();
  fan3.show();
  ball1.show();
  ball2.show();
  Engine.update(engine);

  
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  