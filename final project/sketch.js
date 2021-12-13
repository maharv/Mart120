var bullets = [];
var enemies = [];
var score = 0;
var health = 3;

function setup() {
  createCanvas(400, 400);
  var health =3;
  for (var i = 0; i < 10; i++) {
    var enemy = {
      x: random(0, width),
      y: random(-800, -40),
    };
    enemies.push(enemy);
  }
}

function draw() {
  background(100);
  // player
  fill (3, 48, 252)
  circle(mouseX, 350, 25);
  if (health == 0){
    fill(0,0,0)
    text("Game Over!", 180, 200)
    noLoop()
  }
  for (var bullet of bullets) {
    bullet.y -= 10;
    fill(3, 252, 65)
    circle(bullet.x, bullet.y, 5);
  }
  for (var enemy of enemies) {
    for (var bullet of bullets) {
      if (enemy.y > height){
        enemies.splice(enemies.indexOf(enemy), 1);
      }
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        var newEnemy = {
          x: random(0, width),
          y: random(-800, -40),
        };
        enemies.push(newEnemy);
        score +=1
      }
    }
  }
    for (var enemy of enemies) {
    enemy.y += 2;
      fill (222, 20, 94)
    circle(enemy.x, enemy.y, 20);
    if (enemy.y > height){
    health -=1
    }
  }
  fill(0,0,0)
  text(score, 25, 25)
  text(health ,200,25)
  fill(3, 252, 65)
  text ("Health:", 150, 25)
}

function mousePressed() {
  var bullet = {
    x: mouseX,
    y: 350,
  };
  bullets.push(bullet);
}
