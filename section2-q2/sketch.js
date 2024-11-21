// チェッカー
function setup() 
{
  createCanvas(200, 200);
  background(255);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++)
  {
    for(let j = 0; j < 8; j++)
    {
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      let x = i*size;
      let y = j*size;
      if((i+j)%2 == 1)
      {
        fill(122);
        rect(x,y,size,size);
      }
    }
  }
  for(let i = 0; i < 8; i++)
  {
    for(let j = 0; j < 8; j++)
    {
      let x = i*size;
      let y = j*size;
      if(j<3 && ((i+j)%2 == 1))
      {
        fill(255,0,0);
        ellipse(x+(size/2), y+(size/2), size-4, size-4);
      }
      if(j>4 && j<8 && ((i+j)%2 == 1))
      {
        fill(0,0,0);
        ellipse(x+(size/2), y+(size/2), size-4, size-4);
      }
    }
  }
}
