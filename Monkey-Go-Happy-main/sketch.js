var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime = 0;
var survival;
var jungle;
function preload(){
  
  
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  jung = loadImage("jungle.jpg");
  
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("stone.png");
 
}



function setup() {
  
  createCanvas(820,600);
  
  
  
  ground = createSprite(50,480,1100,19);
  ground.shapeColor = "darkred";
  ground.velocityX = -6;
  ground.x = ground.width / 2;
  
  obstacleGroup = new Group();
  fruitGroup = new Group();
  
  jungle = createSprite(200,200,50,50);
  jungle.addImage(jung);
  jungle.velocityX = -4;
  jungle.scale = 1.5;
 
  
  
  monkey = createSprite(150,300,25,25);
  monkey.addAnimation( "moving",monkey_running);
  monkey.scale = 0.2;
  
  ground.visible = false;
}


function draw() {
background("white");
  
   if(jungle.x<0){
     jungle.x = jungle.width / 2;
   }
    
  
  if(keyDown("space")){
    monkey.velocityY = -20;
  }
  
  if(monkey.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
    score = score + 1;
    
    
  }
  if(monkey.isTouching(obstacleGroup)){
    fruitGroup.destroyEach();
   
    obstacleGroup.destroyEach();
    fruitGroup.visible = false;
    obstacleGroup.visible = false;
    
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;                  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score = ",score + 1,300,300);

  
  
  
  fruit();
  obstacles();
  
  drawSprites();
}


function fruit(){
  
  if(frameCount%80 === 0){
  banana = createSprite(700,25,25);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.y = Math.round(random(120,200));  
  banana.velocityX = -4;
  banana.lifetime = 200;  
  
  fruitGroup.add(banana);  
    
  }
  
  
  
}

function obstacles(){
  
  if(frameCount%200 === 0){
  obstacle = createSprite(400,405,26,26);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.3;
  obstacle.x = Math.round(random(500,700));
  obstacle.velocityX = -6;
  obstacle.lifetime = 120;
    
  obstacleGroup.add(obstacle);  
    
  }
  
  
  
}



