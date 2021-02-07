var cat ,garden,catRunning,catSitting,mouse, mouseStanding,mouseTeasing, cat1, mouse1;
var background1;

function preload() {
    //load the images here
    cat = loadImage("cat1.png");   
    catRunning = loadAnimation("cat2.png","cat3.png");
    catSitting = loadImage("cat4.png");
    garden = loadImage("garden.png");
    mouseStanding = loadImage("mouse1.png");
    mouseTeasing = loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
   
    //create cat and mouse sprites here
   background1 = createSprite(500,400,10,50);
   background1.addImage(garden);
  

  cat1 = createSprite(700,660)
  cat1.addImage(cat);
  cat1.scale = 0.1;

  mouse1 = createSprite(100,660)
  mouse1.addImage(mouseStanding);
  mouse1.scale = 0.1;

}
function draw() {

    background(255);
    //Write condition here to evalute if cat and mouse collide

if(keyDown("LEFT_ARROW")){

cat1.velocityX = -5;
cat1.addAnimation("cat",catRunning);
cat1.changeAnimation("cat");
mouse1.addAnimation("mouseTease",mouseTeasing);
mouse1.changeAnimation("mouseTease");

}



if (cat1.x-mouse1.x < (cat1.width-mouse1.width)/2)
{
    cat1.velocityX = 0;
    mouse1.addAnimation("mouseTease",mouseTeasing);
    mouse1.changeAnimation("mouseTease");
    cat1.addAnimation("catSit",catSitting);
    cat1.changeAnimation("catSit");
}


text(mouseX+','+mouseY,10,45);

    drawSprites();
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
