var box;
function setup() 
{
  createCanvas(400, 400);
  box=new Box(10,200,20,20,3,4);
}

function draw() 
{
  background(220);
box.show();
box.move();
box.moveup();
}

