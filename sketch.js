var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var rand



function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
ground = createSprite(200,430,600,100) 
monkey = createSprite(50,350,20,20)
monkey.addAnimation("monkey",monkey_running)
monkey.scale=0.1
score=0

}


function draw() {
background("white")
if(keyDown("space")){
monkey.velocityY=-10
}
monkey.velocityY=monkey.velocityY+0.5;
spawnBananas();
monkey.collide(ground);
if(ground.x===100){
  ground.x=200 
  ground.velocityX=-2}


if(frameCount%100===0){
obstacle = createSprite(400,350,20,20)
obstacle.addImage("obstacle",obstacleImage)
obstacle.velocityX=-4
obstacle.scale=0.1
obstacle.lifetime=250
}

drawSprites();
}
function spawnBananas(){
if(frameCount%80===0){
 banana=createSprite(200,340,20,20)
 banana.addImage("banana",bananaImage)
 banana
}
}