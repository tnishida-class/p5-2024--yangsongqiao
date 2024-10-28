// テキスト「キーボード操作に反応する」
let x, y;
const g = 1;
const jump = 20;
let ground;
let vy = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  ground = height;
}

function draw()
{
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; y = height - 25;}
  if(keyIsDown(RIGHT_ARROW)){ x += 5; y = height - 25;}
  if(keyIsDown(LEFT_ARROW) && keyIsDown("B".charCodeAt(0))){ x -= 10; y = height - 25;}
  if(keyIsDown(RIGHT_ARROW) && keyIsDown("B".charCodeAt(0))){ x += 10; y = height - 25;}
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  if(keyIsDown(" ".charCodeAt(0)))
  {
    if (y >= height - 25) 
    { 
      vy = 30;
    }
  }
    y -= vy;
    vy -= g;
    if (y > height - 25) 
    {
      y = height - 25;
      vy = 0;
    }

}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
