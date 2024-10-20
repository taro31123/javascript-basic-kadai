// btnというidを持つHTML要素を取得し、定数に代入する
const pushBtn = document.getElementById("btn");
// textというidを持つHTML要素を取得し、定数に代入する
const txt = document.getElementById("text");
// HTML要素がクリックされたときにイベント処理を実行
pushBtn.addEventListener("click", () => {
  txt.textContent = "ボタンをクリックしました";
});
