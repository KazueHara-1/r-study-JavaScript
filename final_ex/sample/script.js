let startTime = null;
let endTime = null;
let totalOvertime = 0; // 今月の総残業時間（時間）
let progressBar = document.getElementById("progressRing");
let progressText = document.getElementById("progressText");

// 業務開始
function startWork() {
  startTime = new Date(); // 現在の時間を業務開始時間として記録
  document.getElementById("startButton").disabled = true;
  document.getElementById("endButton").disabled = false;
  progressText.textContent = "業務中...";
}

// 業務終了
function endWork() {
  if (startTime) {
    endTime = new Date(); // 現在の時間を業務終了時間として記録
    let workDuration = (endTime - startTime) / 1000 / 60 / 60; // 時間単位に変換
    let maxOvertime = 160; // 最大の残業時間（例えば160時間が上限）

    // 残業時間を計算（例えば定時が8時間、残業がその分）
    let overtime = Math.max(workDuration - 8, 0);
    totalOvertime += overtime;

    // 残業時間を進捗バーで反映
    let progress = Math.min((totalOvertime / maxOvertime) * 100, 100);
    progressBar.style.strokeDashoffset = 565.48 - (progress / 100) * 565.48;

    // 残業時間を表示
    progressText.textContent = `今月の残業時間: ${totalOvertime.toFixed(
      1
    )}時間`;

    // ボタンの状態を更新
    document.getElementById("startButton").disabled = false;
    document.getElementById("endButton").disabled = true;
  }
}

// 過去の業務時間を編集
function editPastTimes() {
  alert("過去の業務時間を編集する機能は現在準備中です。");
}
