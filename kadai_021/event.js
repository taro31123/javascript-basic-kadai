// 非同期処理を実行
const pushBtn = document.getElementById("btn");
const txt = document.getElementById("text");

pushBtn.addEventListener("click", () => {
  setTimeout(() => {
    txt.textContent = "ボタンをクリックしました";
  }, 2000);
});
