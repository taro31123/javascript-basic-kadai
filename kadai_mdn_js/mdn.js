/*合格レビューがついたもの
// todayを定義して日付取得
const today = new Date();

//取得した日付の出力
console.log(
  `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`
);
 */

//　↓ 模範解答
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

console.log(year + "年" + month + "月" date + "日");