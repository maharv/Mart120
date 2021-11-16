//keyboard keys
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
//character variables
var charY = 100
var charX = 100
//food1 variables
var food1X = 400;
var food1Y = 300;
var food1XSpeed;
var food1YSpeed;
//food2 variables
var food2X = 400;
var food2Y = 300;
var food2XSpeed;
var food2YSpeed;
//enemy variables
var badguy1X = 400;
var badguy1Y = 300;
var badguy1XSpeed;
var badguy1YSpeed;
//mouse click shapes
var mouseShapeX;
var mouseShapeY;
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;

}

function setup() {
  createCanvas(500, 600);
  //food random speeds
    food1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    food1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    food2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    food2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    badguy1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
    badguy1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
}

function draw() {
  background(103, 187, 239);
  fill(24, 200, 29);
  rect(490,550,50,80);
  //exit
  fill(14, 0, 174 );
  textSize(16);
    text("EXIT", width-50,height-50)
  //character
  fill(162, 226, 79);
  circle(charX,charY,25);
  //controls
  if(keyIsDown(w))
    {
        charY -= 3;   
    }
    if(keyIsDown(s))
    {
        charY += 3;   
    }
    if(keyIsDown(a))
    {
        charX -= 3;   
    }
    if(keyIsDown(d))
    {
        charX += 3;   
    }
  //food1
  fill(13,145,14);
  circle(food1X, food1Y, 10);
  food1X += food1XSpeed;
  food1Y += food1YSpeed;
  if(food1X > width)
    {
        food1X = 0;
    }
    if(food1X < 0)
    {
        food1X = width;
    }
    if(food1Y > height)
    {
        food1Y = 0;
    }
    if(food1Y < 0)
    {
        food1Y = height;
    }
  //food2
  fill(237, 242, 76);
  circle(food2X, food2Y, 10);
  food2X += food2XSpeed;
  food2Y += food2YSpeed;
  if(food2X > width)
    {
        food2X = 0;
    }
    if(food2X < 0)
    {
        food2X = width;
    }
    if(food2Y > height)
    {
        food2Y = 0;
    }
    if(food2Y < 0)
    {
        food2Y = height;
    }
  //badguy1
  fill(233, 113, 113);
  circle(badguy1X, badguy1Y, 100);
  badguy1X += badguy1XSpeed;
  badguy1Y += badguy1YSpeed;
  if(badguy1X > width)
    {
        badguy1X = 0;
    }
    if(badguy1X < 0)
    {
        badguy1X = width;
    }
    if(badguy1Y > height)
    {
        badguy1Y = 0;
    }
    if(badguy1Y < 0)
    {
        badguy1Y = height;
    }
   fill(232, 85, 238);
    square(mouseShapeX, mouseShapeY, 25);
  
if(charX > width && charY > width-50)
    {
        fill(245, 85, 255);
        stroke(5);
        textSize(26);
        text("You Won", width/2-50, height/2-50);
    }
}
