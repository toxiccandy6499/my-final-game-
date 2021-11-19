
function preload(){
  bg1 = loadAnimation("bg1.jpg","bg2.jpg","bg3.jpg");
  bg2 = loadImage("bg2.jpg");
}

function setup() {
  createCanvas(400,400);
 
  bg1.frameDelay = (120);
  b1 =  createSprite(200,200);
  b1.addAnimation("bg1",bg1)

}



function draw() 
{
  background(0);
  drawSprites();
  
}




