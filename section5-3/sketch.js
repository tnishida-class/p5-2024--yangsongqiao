// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup()
{
  createCanvas(200, 200);
  calendar(2024,11);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m)
{
  let dow = dayOfWeek(y, m, 1);
  let dx = width / 7;
  let dy = height /5;
  for(let i = 0; i < 7; i++)
  {
    stroke(0,255,0);
    line(i*dx, 0, i*dx, height);
  }
  for(let i = 0; i < 5; i++)
    {
      stroke(0,255,0);
      line(0, i*dy, width, i*dy);
    }
  for(let d = 1; d <= daysInMonth(y, m); d++)
  {
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
    let dayofweek = dayOfWeekAsString(dayOfWeek(y, m, d));
    text(d, (d-1)%7*dx+dx/2, Math.floor((d-1)/7)*dy+dy/2);
    text(dayofweek, (d-1)%7*dx+dx/2, Math.floor((d-1)/7)*dy+dy/2+dy/4);
    text(y+'年'+ m + '月', width/4, height);
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  if(isLeapYear(y))
    return 366;
  else return 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  let count = 0;
  for(i = 1982; i < y ; i++)
  {
    count += daysInYear(i);
  }
  count += dayOfYear(y, m, d) + daysInYear(1981) - dayOfYear(1981,7,17);
  return (count + 5)% 7;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
