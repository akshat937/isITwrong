const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var particle;
var turn = 0
var gameState = "play";

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,500,10);

function draw() {
  background(0,0,0);  

  textSize(20);
  text("SCORE: " + score,70,40);

  Engine.update(engine);

  for(var k = 0; k <= width; k = k + 80){

    divisions.push(new Division(k, divisionHeight/2, 10 , divisionHeight));
  
    }

    for(var j = 40; j <= width; j = j+50){
      plinkos.push(new Plinko(j,75))
     }
   
     for(var l = 15; l <= width - 10; l = l+50){
      plinkos.push(new Plinko(l,175))
     }

     if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }

}

  for(var k = 0; k < particles.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

   for(var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }

   for(var j = 0; j < particles.length; j++){
     particles[j].display();
   }

   if(particle.body.position.y >= 150){
     score = score + 200
   }

   if(turn === 5){
     gameState = end;
   }

   if(gameState === end){
     textSize(40);
     text("Game Over",220,400);
   }

  drawSprites();

  ground.display();
}

function mousePressed(){
  if(gameState !== "end"){
    turn = turn + 1;
    particle = new Particle(mouseX,10,10,10)
  }
}