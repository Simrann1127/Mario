var Player 
var obstacles
var road
var background
var ground
var stairs 
var turtles

function preload(){
Marioleft=loadAnimation
obstacles=loadImage
ground=loadImage
stairs=loadImage
Marioright=loadAnimation
bricks=loadImage
cactus=loadImage
treasure=loadImage
flag=loadImage
stick=loadImage
coins=loadImage
background=loadImage
heart=loadImage
restartImage=loadImage
gameOverimg=loadImage
coinCollectSound=loadSound
jumpsound=loadSound
DieSound=loadSound
pipe=loadImage
}

function setup(){
  createCanvas(1300,650)
  pipe1=createSprite(400,570)
  pipe1.addImage(pipe)
  pipe1.scale=0.1  
  pipe2=createSprite(500,570)
  pipe2.addImage(pipe)
  pipe2.scale=0.1
  pipe3=createSprite(600,570)
  pipe3.addImage(pipe)
  pipe3.scale=0.1
  pipe4=createSprite(700,570)
  pipe4.addImage(pipe)
  pipe4.scale=0.1
  pipe5=createSprite(800,570)
  pipe5.addImage(pipe)
  pipe5.scale=0.1
  pipe6=createSprite(900,570)
  pipe6.addImage(pipe)
  pipe6.scale=0.1
  pipe7=createSprite(1000,570)
  pipe7.addImage(pipe)
  pipe7.scale=0.1
  pipe8=createSprite(1100,570)
  pipe8.addImage(pipe)
  pipe8.scale=0.1  
  pipe9=createSprite(1200,570)
  pipe9.addImage(pipe)
  pipe9.scale=0.1
  pipe10=createSprite(1300,570)
  pipe10.addImage(pipe)
  pipe10.scale=0.1

  brick1=createSprite(450,600)
  brick1.addImage(bricks)
  brick1.scale=0.2
  brick2=createSprite(550,600)
  brick2.addImage(bricks)
  brick2.scale=0.2
  brick3=createSprite(650,600)
  brick3.addImage(bricks)
  brick3.scale=0.2
  brick4=createSprite(750,600)
  brick4.addImage(bricks)
  brick4.scale=0.2
  brick5=createSprite(850,600)
  brick5.addImage(bricks)
  brick5.scale=0.2
  brick6=createSprite(950,600)
  brick6.addImage(bricks)
  brick6.scale=0.2
  brick7=createSprite(1050,600)
  brick7.addImage(bricks)
  brick7.scale=0.2
  brick8=createSprite(1150,600)
  brick8.addImage(bricks)
  brick8.scale=0.2
  brick9=createSprite(1250,600)
  brick9.addImage(bricks)
  brick9.scale=0.2
  brick10=createSprite(1350,600)
  brick10.addImage(bricks)
  brick10.scale=0.2
  
  coin1=createSprite(100,650)
  coin1.addImage(coins)
  coin1.scale=0.2
  coin2=createSprite(200,650)
  coin2.addImage(coins)
  coin2.scale=0.2
  coin3=createSprite(300,650)
  coin3.addImage(coins)
  coin4.scale=0.2
  coin5=createSprite(400,650)
  coin5.addImage(coins)
  coin5.scale=0.2
  coin6=createSprite(500,650)
  coin6.addImage(coins)
  coin6.scale=0.2
  coin7=createSprite(600,650)
  coin7.addImage(coins)
  coin7.scale=0.2
  coin8=createSprite(700,650)
  coin8.addImage(coins)
  coin8.scale=0.2
  coin9=createSprite(800,650)
  coin9.addImage(coins)
  coin9.scale=0.2
  coin10=createSprite(900,650)
  coin10.addImage(coins)
  coin10.scale=0.2
  
  heart1=createSprite(1050,700)
  heart1.addImage(heart)
  heart1.scale=0.1
  heart2=createSprite(1200,700)
  heart2.addImage(heart)
  heart2.scale=0.1
  heart3=createSprite(1250,700)
  heart3.addImage(heart)
  heart3.scale=0.1

  Treasure=createSprite(1200,780)
  Treasure.addImage(treasure)
  Treasure.scale=0.1

 bg=createSprite(1300,650)
 bg.addImage(background)

restartImg=createSprite(300,450)
restartImg.addImage(restartImage)

gameoverImage=createSprite(300,450)
gameoverImage.addImage(gameOverimg)

stick1=createSprite(600,560)
stick1.addImage(stick)

flag1=createSprite(650,570)
flag1.addImage(flag)

cactus1=createSprite(300,500)
cactus1.addImage(cactus)
cactus1.visible=false
}

