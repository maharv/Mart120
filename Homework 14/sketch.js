//array variables
var myXs =[];
var myYs=[];
var myDs=[];
var mySpeedX=[];
var mySpeedY=[];
//keyboard keys
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
//character variables
var charY = 100
var charX = 100
//mouse click shapes
var mouseShapeX;
var mouseShapeY;
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;

}

function setup() 
{
  createCanvas(500, 600);
  //enemy
  for (var f = 0; f < 20; f++)
     {
  mySpeedY[f] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  mySpeedX[f] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  myXs[f] = getRandomNumber(500);
  myYs[f] = getRandomNumber(600);
  myDs[f] = getRandomNumber(20);
     }
  //array
  for(var i = 0; i < 50; i++)
    {
  mySpeedY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  mySpeedX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  myXs[i] = getRandomNumber(500);
  myYs[i] = getRandomNumber(600);
  myDs[i] = getRandomNumber(20);
    }
}
function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }
function draw() {
  background(103, 187, 239);
  fill(24, 200, 29);
  rect(490,550,50,80);
  controlCircle();
  createBorders(10);
  drawCharacter();
  exit();
  youWon();
  drawMouseShape();

  for (var f = 0; f < myXs.length; f++) {
        circle(myXs[f], myYs[f], myDs[f]);
    fill (222, 72, 27);
  myXs[f] += mySpeedX[f];
  myYs[f] += mySpeedY[f];
    
      if(myXs[f] > width)
    {
        myXs[f] = 0;
    }
    if(myXs[f] < 0)
    {
        myXs[f] = width;
    }
    if(myYs[f] > height)
    {
        myYs[f] = 0;
    }
    if(myYs[f] < 0)
    {
        myYs[f] = height;
    }
}
}
  for (var i = 0; i < myXs.length; i++) {
        circle(myXs[i], myYs[i], myDs[i]);
  fill (66, 245, 132);
  myXs[i] += mySpeedX[i];
  myYs[i] += mySpeedY[i];
    
      if(myXs[i] > width)
    {
        myXs[i] = 0;
    }
    if(myXs[i] < 0)
    {
        myXs[i] = width;
    }
    if(myYs[i] > height)
    {
        myYs[i] = 0;
    }
    if(myYs[i] < 0)
    {
        myYs[i] = height;
    }
}

function controlCircle(){
  if(charX > width)
    {
        charX = 0;
    }
    if(charX < 0)
    {
        charX = width;
    }
    if(charY > height)
    {
        charY = 0;
    }
    if(charY < 0)
    {
        charY = height;
    }

  if (keyIsDown(s)) {
    charY += 3;
  } else if (keyIsDown(w)) {
    charY -= 3;
  }

  if (keyIsDown(d)) {
    charX += 3;
  } else if (keyIsDown(a)) {
    charX -= 3;
  }
}
function exit()
{
  fill(14, 0, 174 );
  textSize(16);
  text("EXIT", width-50,height-50)
}
function drawMouseShape()
{
  fill(232, 85, 238);
  square(mouseShapeX, mouseShapeY, 25);
}

function youWon (){
  if(charX > width && charY > width-50)
    {
        fill(245, 85, 255);
        stroke(5);
        textSize(26);
        text("You Won", width/2-50, height/2-50);
    }
}
//draw borders
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}
//create character
function createCharacter(x,y)
{
    charX = x;
    charY = y;
    console.log(charX);
}
//draw character function
  function drawCharacter () 
  {
  fill(162, 226, 79);
  circle(charX,charY,25);
  }