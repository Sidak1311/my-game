const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var oliver, loog, basketball
var rope

function setup() {
  createCanvas(1600,800);
  engine = Engine.create()
  world = engine.world
  oliver = new Oliver(800,600,50,50)
  ground = new Gliver(800,700,2600,20)
  topGround = new Gliver(800,50,2600,20)
  leftGround = new Gliver(50,400,20,2600)
  rightGround = new Gliver(1550,400,20,2600)
  basketball = new ball(800,400,20)
  
}

function draw() {
  background(255,255,255); 
  rope = new launcher(basketball.body, {x:oliver.body.position.x,y:oliver.body.position.y})
  Engine.update(engine)
  console.log(loog)
  oliver.display()
  ground.display()
  topGround.display()
  leftGround.display()
  rightGround.display()
  basketball.display()
  rope.display()
  loog = Matter.SAT.collides(oliver.body,ground.body)
  loog2 = Matter.SAT.collides(oliver.body,rightGround.body)
  loog3 = Matter.SAT.collides(oliver.body,leftGround.body)
  loog4 = Matter.SAT.collides(oliver.body,topGround.body)
  if(keyIsDown(87)){
    pos= oliver.body.position; 
    Matter.Body.setPosition(oliver.body,{x:pos.x,y:pos.y-10}); 
  }
  if(keyIsDown(65)){
    pos= oliver.body.position; 
    Matter.Body.setPosition(oliver.body,{x:pos.x -10,y:pos.y}); 
  }
  if(keyIsDown(83)){
    pos= oliver.body.position; 
    Matter.Body.setPosition(oliver.body,{x:pos.x,y:pos.y+10}); 
  }
  if(keyIsDown(68)){
    pos= oliver.body.position; 
    Matter.Body.setPosition(oliver.body,{x:pos.x +10,y:pos.y}); 
  }

  if(loog.collided){
    position = oliver.body.position
    Matter.Body.setPosition(oliver.body, {x:position.x,y:660})
  }
  if(loog2.collided){
    position = oliver.body.position
    Matter.Body.setPosition(oliver.body, {x:1490,y:position.y})
  }
  if(loog3.collided){
    position = oliver.body.position
    Matter.Body.setPosition(oliver.body, {x:110,y:position.y})
  }
  if(loog4.collided){
    position = oliver.body.position
    Matter.Body.setPosition(oliver.body, {x:position.x,y:100})
  }
}


