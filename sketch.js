var object1;
var object2;
var object3;
var object4;

function setup() {
  createCanvas(800,400);
  object1=createSprite(400, 200, 50, 100);
  object2=createSprite(400, 200, 100, 50);

  object1.shapeColor="green";
  object2.shapeColor="green";

  object3=createSprite(100, 100, 50, 50);
  object4=createSprite(400, 100, 50, 50);

  object3.velocityX=2;
  object4.velocityX=-2;
  object3.shapeColor="blue";
  object4.shapeColor="yellow";

}

function draw()
 {
  background(255,255,255);  

  object1.x=mouseX;
  object1.y=mouseY;

  

   console.log(object1.width/2+object2.width/2);
   console.log(object1.x-object2.x);
   console.log(object2.x-object1.x);

   if (isTouching(object1,object2))
   {
    
      object1.shapeColor="red";
      object2.shapeColor="red";
    }
    else
    {
      object1.shapeColor="green";
    object2.shapeColor="green";
    }

    bounce(object3,object4);
  drawSprites();
}