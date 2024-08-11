const hands = document.querySelector(".hands");
const sechand = document.createElementNS("http://www.w3.org/2000/svg", "line");
sechand.setAttribute("class", "secondhands");
// x1="50" y1="50" x2="50" y2="20"
sechand.setAttribute("x1", "50");
sechand.setAttribute("y1", "50");
sechand.setAttribute("x2", "50");
sechand.setAttribute("y2", "20");
sechand.setAttribute("stroke-width", "1");
hands.appendChild(sechand);

(function updateClock() {
  // SVG 時計の画像を更新して現在時刻を表示する。
  const now = new Date(); // 現在時刻。
  const sec = now.getSeconds(); // 秒。
  const min = now.getMinutes() + sec / 60; // 小数部を持つ分。
  const hour = (now.getHours() % 12) + min / 60; // 小数部を持つ時。
  const secangle = sec * 6; // 1 秒あたり 6 度。
  const minangle = min * 6; // 1 分あたり 6 度。
  const hourangle = hour * 30; // 1 時間あたり 30 度。
  // 時計の針の SVG 要素を取得する。
  const sechand = document.querySelector("#clock .secondhands");
  const minhand = document.querySelector("#clock .minutehand");
  const hourhand = document.querySelector("#clock .hourhand");
  // SVG 属性を設定して、時計盤の中で回転する。
  sechand.setAttribute("transform", `rotate(${secangle},50,50)`);
  minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
  hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);
  // 1 秒ごとにこの関数を再度実行する。
  setTimeout(updateClock, 1000);
})(); // ここで関数を即座に実行していることに注意。
