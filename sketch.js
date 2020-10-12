
var fixed,moving;

function setup() {
  createCanvas(800,400);

  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(600,200,70,70);
 
  fixed.debug=true;
  moving.debug=true;
}

function draw() {
  background(0); 
  fixed.shapeColor="red";
  moving.shapeColor="red";
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if(moving.x-fixed.x< moving.width/2+fixed.width/2
    &&fixed.x-moving.x<moving.width/2+fixed.width/2
    && moving.y-fixed.y<moving.height/2+fixed.height/2
    && fixed.y-moving.y<fixed.height/2+moving.height/2  )

  {
    fixed.shapeColor="green";
  moving.shapeColor="green";
  }

  drawSprites();
}