const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground ,engine, world,ball;



function setup() {
  var canvas= createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic: true}
    var ball_options={
      restitution: 1.0
    }
    ball=Bodies.circle(200,200,30,ball_options)
World.add(world,ball)
  

  ground=Bodies.rectangle(200,390,200,20,ground_options)
  World.add(world,ground);
  console.log(ground);

  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,350,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  //drawSprites();
}