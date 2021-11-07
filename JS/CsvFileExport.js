// カンマ区切りのデータをCSVファイルとしてダウンロードさせる
// 文字コード：SJIS

import Encoding from 'encoding-japanese';

let data = 'base64形式のデータ';

// UTF-8からSJISに変換
const detected = Encoding.detect(data);
const unicodeList = [];

for (let i = 0; i < data.length; i += 1) {
    unicodeList.push(data.charCodeAt(i));
}

const sjisArray = Encoding.convert(unicodeList, {
    to: 'SJIS',
    from: detected
})
let sjis =  new Uint8Array(sjisArray);

const blob = new Blob([sjis], { type: 'text/csv' });
let link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = result.data.fileName;
link.click();