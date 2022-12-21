var killer,killer_running,killer_collided;
var bgImg;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver,restart;

var enemy,enemy_running;
var pnemy,pnemy_running;
var knemy,knemy_running;

var ground,groundImg;
var score=0;

function preload (){
  bgImg = loadImage("bg.jpg")
  killer_running = loadAnimation("1k.png","2k.png","3k.png","4k.png","5k.png");
  killer_collided = loadAnimation("kt1.png","kt2.png","kt3.png","kt4.png","kt5.png");

  enemy_running = loadAnimation("eny1.png","eny2.png","eny3.png","eny4.png","eny5.png","eny6.png",);
  penemy_running = loadAnimation("pny1.png","pny2.png","pny3.png","pny4.png","pny5.png","pny6.png","pny7.png","pny8.png","pny9.png","pny10.png","pny11.png","pny12.png");
  knemy_running = loadAnimation("kny1.png","kny2.png","kny3.png","kny4.png","kny5.png","kny6.png",)
  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("ret.png");
  groundImg = loadImage("gret.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight)

 killer =  createSprite(200,height-250,25,25);
  killer.addAnimation("running",killer_running);
  killer.addAnimation(killer_collided);
  killer.scale = 1;

  enemy = createSprite(2250,height-250,10,10);
  enemy.addAnimation("runneing",enemy_running);
  enemy.velocityX = - 5;

  penemy = createSprite(2000,height-250,20,20);
  penemy.addAnimation("running",penemy_running);
  penemy.velocityX = - 5;

  knemy = createSprite(1500,height-250,20,20);
  knemy.addAnimation("running",knemy_running);
  knemy.velocityX = - 5;

  gameOver = createSprite(width/2,height/2- 30);
  gameOver.addImage(gameOverImg)

  restart = createSprite(width/2,height-350,10,10);
  restart.addImage(restartImg);
  restart.scale = 0.5;

  ground = createSprite(width/2,height,width,100);
  ground.addImage("ground",groundImg);
  ground.scale = 2.70;


gameOver.visible = false;
restart.visible = false;

score = 0;

}

function draw(){
background(bgImg);
textSize(25)
fill("wihte")
text("Score: "+score,30,50);


 if(gameState===PLAY){
  score = score + Math.round(getFrameRate()/60);
  ground.velocityX = -(6 + 3*score/100);

  

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  

}

if(penemy.isTouching(killer)){
  gameState = END;
 
}
 else if(gameState === END){ 
  gameOver.visible = true;
  restart.visible = true;
  
  if(touches.length>0 || keyDown("SPACE") || mousePressedOver(restart)){
    reset();
    touches = []
  }

  ground.velocityX = 0;
  enemy.velocityX = 0;
  knemy.velocityX = 0;
  penemy.velocityX = 0;
  
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  score = 0;
}



drawSprites();

}