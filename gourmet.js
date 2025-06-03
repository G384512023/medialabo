let b = document.querySelector('button#kensaku');
b.addEventListener('click', sendRequest);

function a() {
  let keyword = document.querySelector("#left").value;
  console.log("検索キー:", keyword);
}

// 課題5-1 の関数 printDom()
function printDom(data) {
  let oldResult = document.getElementById('result');
  if (oldResult) oldResult.remove();

  let resultDiv = document.createElement('div');
  resultDiv.id = 'result';

  let shops = data.results.shop;

  let countP = document.createElement('p');
  countP.textContent = `検索結果：${shops.length}件ヒットしました`;
  resultDiv.appendChild(countP);

  shops.forEach(function(shop, index) {
    let shopDiv = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = `検索結果${index + 1}件目`;
    shopDiv.appendChild(h3);

    let nameP = document.createElement('p');
    nameP.textContent = `名前: ${shop.name}`;
    shopDiv.appendChild(nameP);

    let accessP = document.createElement('p');
    accessP.textContent = `アクセス: ${shop.access}`;
    shopDiv.appendChild(accessP);

    let addressP = document.createElement('p');
    addressP.textContent = `住所: ${shop.address}`;
    shopDiv.appendChild(addressP);

    let budgetP = document.createElement('p');
    budgetP.textContent = `予算: ${shop.budget.name}`;
    shopDiv.appendChild(budgetP);

    let catchP = document.createElement('p');
    catchP.textContent = `キャッチコピー: ${shop.catch}`;
    shopDiv.appendChild(catchP);

    let genreP = document.createElement('p');
    genreP.textContent = `ジャンル: ${shop.genre.name}`;
    shopDiv.appendChild(genreP);

    let openP = document.createElement('p');
    openP.textContent = `営業時間: ${shop.open}`;
    shopDiv.appendChild(openP);

    let stationP = document.createElement('p');
    stationP.textContent = `最寄駅: ${shop.station_name}`;
    shopDiv.appendChild(stationP);

    let subGenreP = document.createElement('p');
    subGenreP.textContent = `サブジャンル: ${shop.sub_genre ? shop.sub_genre.name : 'なし'}`;
    shopDiv.appendChild(subGenreP);

    resultDiv.appendChild(shopDiv);
  });

  document.body.appendChild(resultDiv);
}

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let genre = document.getElementById('left').value.trim();
  if (!genre) {
    alert('ジャンルコードを入力してください');
    return;
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';

  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      printDom(data);
    } else {
      showError(xhr);
    }
    finish();
  };
  xhr.onerror = function () {
    showError(xhr);
    finish();
  };
  xhr.send();
}

function showResult(resp) {
  printDom(resp);
}

// 通信エラー時の処理
function showError(err) {
  console.log('通信エラーが発生しました：', err);
}

// 通信終了後の処理
function finish() {
  console.log('Ajax 通信が終わりました');
}