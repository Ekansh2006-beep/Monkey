var monkey,monkey_running
var banana,bananaImage,obstacle,obstacleImage
var FoodGroup,obstacleGroup
var score=0
var survivalTime=0;

function preload(){
 
  monkey_running=loadAnimation("monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");
   bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(300,400,900,15);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
 
  obstacleGroup=new Group()
  FoodGroup=new Group()
  
}


function draw() {
background(200);
  
 if(ground.x<0) {
   ground.x=ground.width/2;
 }
  if(keyDown("space")){
    monkey.velocityY=-5;
  }
    monkey.velocityY=monkey.velocityY+0.8;

  if(monkey.isTouching(obstacleGroup)){
    gameState="END"
  }
  monkey.collide(ground);
  
  spawnObstacles()
  spawnFood()
 

stroke("black");
textSize(20);
fill("black");

text("survival time:"+survivalTime,100,50)

  drawSprites()
}

function spawnObstacles(){
  if(frameCount % 200 ===0){
    var obstacle = createSprite(800,375,10,40);
    obstacle.velocityX = -6
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle)
  }
}
function spawnFood(){
  if(frameCount % 80 ===0){
    var banana = createSprite(600,250,10,40);
    banana.y=random(150,230)
    banana.velocityX = -6
    banana.addImage(bananaImage)
    banana.scale=0.1;
    banana.lifetime=300;
    FoodGroup.add(banana)
  }        
}
