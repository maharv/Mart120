var leftEyeX = 80;
var rightEyeX = 200;
var rightEyePointY = 211;
var movementEyeLeft = 0.2;
var movementPointLeft = 0.2;
var movementEyeRight = 0.2;
var movementPointRight = 0.2;
var leftEyePointY = 211;
var sizeText = 32;
var movementTextSize = 0.5;
var count = 0;
var faceX = 150;
var faceY = 250;
var movementFaceX = 0.5;
var movementFaceY = 0.5;
function setup() {
  createCanvas(300, 500);
  movementEyeLeft = Math.floor(Math.random() * 10) + 1;
  movementEyeRight = Math.floor(Math.random() * 10) + 1;
}

function draw() {
  background(220);

}

function draw() {
  background(240);
  strokeWeight(4);
    ellipse(faceX,faceY,200,300);
  if (faceX >= 170 || faceX <= 130) {
    movementFaceX *= -1;
  }
  faceX += movementFaceX;
        faceY += movementFaceY;
    if(faceY <= 230 || faceY >= 270 )
    {
        movementFaceY *= -1;
    }
  triangle(140, 240, 150, 220, 160, 240);
  square(leftEyeX,200,20);
   if (leftEyeX >= 85 || leftEyeX <= 75) {
    movementEyeLeft *= -1;
  }
  leftEyeX += movementEyeLeft;
  square(rightEyeX,200,20);
    if (rightEyeX >= 205 || rightEyeX <= 195) {
    movementEyeRight *= -1;
  }
  rightEyeX += movementEyeRight;
  line(83,178,127,193);
  line(168,193,215,178);
  point(107,leftEyePointY);
    leftEyePointY += movementPointLeft;
    if(leftEyePointY <= 206 || leftEyePointY >= 216 )
    {
        movementPointLeft *= -1;
    }
  point(189,rightEyePointY);
      rightEyePointY += movementPointRight;
    if(rightEyePointY <= 206 || rightEyePointY >= 216 )
    {
        movementPointRight *= -1;
    }
  triangle(80,276,150,385,220,276);
  textSize(sizeText)
  sizeText+= movementTextSize;
    count++;
    if(count > 5)
    {
        movementTextSize *=-1;
        count = 0;
    }
  text('MARK', 10, 30);
  //circle(mo395useX, mouseY, 25);
}