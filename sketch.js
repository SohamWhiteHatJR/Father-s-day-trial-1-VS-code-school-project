var father , fatherImage;
var son, sonImage1, sonImage2 , sonImage3, sonImage4, happyboi;
var attack1,attack2;
var park , parkImage;
var house, houseImage;
var pancake, pancakeImage;
var iceCone , iceConeImage;
var chocobar, chocobarImage;
var clown, cloawnImage;
var ground , backgroundImage;
var wall, wall2 , wall3;

function preload(){

  sonImage1 = loadImage("kid-15 walking-1.png");
  sonImage2 = loadImage("kid-15 walking-2.png");
  sonImage3 = loadImage("turn-kid.png");
  sonImage4 = loadImage("kid-cry.png");
  happyboi = loadImage("yay-kid.png")
  attack1 = loadImage("attck-1.png");
  attack2 = loadImage("attck-2.png");
  fatherImage = loadImage("fatherImage-07.png");
  houseImage = loadImage("building-005.png");
  pancakeImage = loadImage("pancakes-90.png");
  iceConeImage = loadImage("ice-cone-11.png");
  clownImage = loadImage("clown-1-.png");
  backgroundImage = loadImage("bck.png");
  
}

function setup(){

  createCanvas(800, 310);
  
  foodGrp = new Group();
  wallGrp = new Group()

  ground = createSprite(400,305,1000,10);
  ground.shapecolor = 0;

  wall2 = createSprite(799,150,10,310);
  wall2.shapecolor = 0;
  wall2.visible = false;

  wall3 = createSprite(1,150,10,310);
  wall3.shapecolor = 0;
  wall3.visible = false;

  house = createSprite(650,210,10,10);
  house.addImage(houseImage);
  house.scale = 1;

  son = createSprite(400,265,20,50);
  son.addImage(sonImage2);
  son.scale = 0.7;
  

  father = createSprite(680,240);
  father.addImage(fatherImage);
  father.scale = 0.3;
 
  iceCone = createSprite(80,270,10,10);
  iceCone.addImage(iceConeImage);
  iceCone.scale = 0.7;
  foodGrp.add(iceCone);

  pancake = createSprite(30,270,10,10);
  pancake.addImage(pancakeImage);
  pancake.scale = 0.7;
  foodGrp.add(pancake);

  wall = createSprite(190,230,10,120);
  wall.shapecolor = "red"
  wall.visible = false;
  wallGrp.add(wall);

  clown = createSprite(150,250,10,10);
  clown.addImage(clownImage);
  clown.scale = 1;
  clown.visible = false;


}

function draw(){
  background(backgroundImage);

  son.collide(ground);
  son.bounceOff(wall2);
  son.collide(wall);
  son.bounceOff(wall3);

  if(keyIsDown(LEFT_ARROW)){
    son.x -=10
    son.addImage(sonImage1);
  }

  if(keyIsDown(RIGHT_ARROW)){
    son.x +=10
    son.addImage(sonImage3);
  }

  if(keyDown("space") && son.y >=250){
    son.velocityY = -12;
  }
  son.velocityY = son.velocityY + 0.8;

  if(son.x <= 300){
  clown.visible = true;
  
  }

  if(son.y <= 260 && son.x <= 250){
    son.addImage(sonImage4);
  }

  if (son.x <= 700 && (keyDown(DOWN_ARROW)) && keyIsDown(LEFT_ARROW)){
    son.addImage(attack2);
    son.velocityX -= 3;

    if(son.isTouching(wall)) {
      wall.velocityY -= 20;
      son.velocityX = 0;
      son.velocityY = 0;
      son.collide(wall3);
      }
             
  }
  if (son.isTouching(clown)|| son.x <= 100){
    clown.visible = false;
    son.velocityX = 0;
    son.velocityY = 0;
  }

  if (son.isTouching(pancake) || son.isTouching(iceCone)){
    son.addImage(happyboi);
  }
  

drawSprites();
}
