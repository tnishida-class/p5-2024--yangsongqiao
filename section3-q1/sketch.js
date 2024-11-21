// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let increment;

function setup()
{
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw()
{
  if(mouseIsPressed)
    increment = 2;
  else
    increment = 1;
  background(160, 192, 255);
  count = (count + increment) % cycle;
  // BLANK[1]
  if(count < cycle/2)
  {
    size = count;
  }
  else
  {
    size = cycle - count;
  }
  ellipse(width / 2, height / 2, size);
}
