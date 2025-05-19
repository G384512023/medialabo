// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('button#hantei');
  b.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name="input"]');
  let n = Number(yoso.value);
  let r = document.querySelector('span#answer');
  r.textContent = n
  
  // 課題3-1: 正解判定する
  kaisu = kaisu + 1;
  let k = document.querySelector('span#kaisu');
  k.textContent = kaisu;
  let a = document.querySelector('p#result');
  if (kaisu >= 4){
   a.textContent=('答えは'+kotae+'でした．すでにゲームは終わっています');
  }
  if (kotae === n){
    a.textContent=('正解です.おめでとう！');
    kaisu = kaisu + 3;
  }
  else if (kotae !== n){ 
   if (kaisu === 3){
    a.textContent = ('まちがい. 残念でした答えは'+kotae+'です');
  }  else if (kaisu < 3 && n < kotae){
   　 a.textContent = ('まちがい. 答えはもっと大きいですよ');
  } else if (kaisu < 3 &&  n > kotae){
    a.textContent = ('まちがい. 答えはもっと小さいですよ');
  }
}
}