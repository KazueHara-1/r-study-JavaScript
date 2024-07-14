const front = document.getElementById("editor-front");
const back = document.getElementById("editor-back");
front.style.backgroundColor = "white";

front.addEventListener("click", () => {
  back.focus();
});

back.addEventListener("focus", () => {
  front.style.backgroundColor = "silver";
});

back.addEventListener("blur", () => {
  front.style.backgroundColor = "white";
});

back.addEventListener("input", (event) => {
  front.innerText = event.target.value;
});
