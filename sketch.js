var playerTank;
var nonPlayerTank;
var germ1;
var germ2;
var germ3;



function preload(){
  germ1Image = loadImage("images/germs-1.png");
  germ2Image = loadImage("images/germs-2.png");
  germ3Image = loadImage("images/germs-3.png");
  playerTankImage = loadImage("images/player-tank.png");
  nonPlayerTankImage = loadImage("images/non-player-tank.png");
  
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  playerTank = createSprite(width/2-100,height-75,400,250);
  playerTank.addImage(playerTankImage);
  playerTank.scale = 0.2

  nonPlayerTank = createSprite(width/2-100,height-475,200,400);
  nonPlayerTank.addImage(nonPlayerTankImage);
  nonPlayerTank.scale = 0.2

  
}


function draw() 
{
  background("black");
  
  tankControls()
  spawnGerms1();
  spawnGerms2();
  spawnGerms3();
 

  drawSprites()
}

function spawnGerms1(){
  if(frameCount%120 === 0){
    germs1 = createSprite(width/2, height/2, 20, 20);
    germs1.x = random(width,height);
    germs1.y = random(width,height);
    germs1.addImage(germ1Image);
    germs1.scale = 1
  }

}

function spawnGerms2(){
  if(frameCount%120 === 0){
    germs2 = createSprite(width/2, height/2, 20, 20);
    germs2.x = random(width,height);
    germs2.y = random(width,height);
    germs2.addImage(germ2Image);
    germs2.scale = 1
  }

}

function spawnGerms3(){
  if(frameCount%120 === 0){
    germs3 = createSprite(width/2, height/2, 20, 20);
    germs3.x = random(width,height);
    germs3.y = random(width,height);
    germs3.addImage(germ3Image);
    germs3.scale = 1
  }
}
  function tankControls(){
    if(keyDown(UP_ARROW)) {
      playerTank.y -= 2
    }

    if(keyDown(DOWN_ARROW)) {
      playerTank.y += 2
    }

  }


