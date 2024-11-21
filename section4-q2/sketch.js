// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);
  let cx = width / 2;
  let cy = height / 2;
  let r = 360;

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }

  // BLANK[1]
  let pp = 0;
  let start = 0;
  let stop = 0;
  ellipse(cx, cy, r, r);
  for (let i = 0; i < scores.length; i++) 
  {
    start = pp;
    stop = start + (TWO_PI * scores[i] / total);
    arc(cx, cy, r, r, start, stop, PIE);

    let midAngle = (start + stop) / 2;
    let labelX = cx + (r / 3) * cos(midAngle);
    let labelY = cy + (r / 3) * sin(midAngle);

    text(scores[i].toFixed(1), labelX, labelY);

    pp = stop;
  }
}
