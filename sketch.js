const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var Balls = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  
  cannon = new Cannon(180, 110, 130, 100, angle);
  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);
 

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

for (var i = 0; i < Balls.length; i++) {
 showCannonBalls(balls[i]);
}
}
cannon.display

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
  var cannonball = new CannonBall(cannon.x,Cannon.y)
  cannonball.trajectory = [];
  Matter.Body.setAngle(cannonBall.body, cannon.angle);
  balls.push(cannonball)

  }
}

function showCannonBalls(ball) {
  if(ball){
    ball.display
  }
}

function keyReleased() {
  if (keyCode ===DOWN_ARROW){
    balls[ball.length -1].shoot();
  }
}