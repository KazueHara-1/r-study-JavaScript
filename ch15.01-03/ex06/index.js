const date = new Date();
document.getElementById("date").innerHTML =
  `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}時${date.getMinutes()}分${date.getSeconds()}秒`;
document.getElementById("provider").innerHTML = window.navigator.oscpu;
fetch("https://ipinfo.io?callback")
  .then((res) => res.json())
  .then((json) => {
    document.getElementById("ipAddress").innerHTML = json.ip;
  });
