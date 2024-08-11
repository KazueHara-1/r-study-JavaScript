(function updateClock() {
  // SVG 時計の画像を更新して現在時刻を表示する。
  const now = new Date(); // 現在時刻。
  const sec = now.getSeconds(); // 秒。
  const min = now.getMinutes() + sec / 60; // 小数部を持つ分。
  const hour = (now.getHours() % 12) + min / 60; // 小数部を持つ時。
  const minangle = min * 6; // 1 分あたり 6 度。
  const hourangle = hour * 30; // 1 時間あたり 30 度。
  // 時計の針の SVG 要素を取得する。
  const minhand = document.querySelector("#clock .minutehand");
  const hourhand = document.querySelector("#clock .hourhand");
  // SVG 属性を設定して、時計盤の中で回転する。
  minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
  hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);
  // 10 秒後にこの関数を再度実行する。
  setTimeout(updateClock, 10000);
})(); // ここで関数を即座に実行していることに注意。
