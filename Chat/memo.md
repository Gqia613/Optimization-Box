## 前提条件
* 必要なテーブルは作成されているものとする

## 手順
1. Pusherに登録する(https://dashboard.pusher.com/accounts/sign_up)

2. Laravel側でブロードキャストの準備をする
・PUSHERへの接続情報を.envファイルに書き込む
・BROADCAST_DRIVERをpusherへ変更
・config/app.phpのprovidersのApp\Providers\BroadcastServiceProvider::classがデフォルトではコメントアウトになっているため、コメントアウトをはずす
・PUSHER用のパッケージをインストール
Laravel: 
```
composer require pusher/pusher-php-server
```

React: 
```
npm install --save laravel-echo pusher-js
```

・React側でsrc直下のindex.jsでpusher-jsとの接続とlaravel-echoをインポートする様に記述
```
import Echo from 'laravel-echo';
// Reactの環境変数を使用するために必要
import dotenv from 'dotenv'
window.Pusher = require('pusher-js');
// Reactの環境変数を使用するために必要
dotenv.config();

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.REACT_APP_PUSHER_APP_KEY,
    cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
    encrypted: true
});
```

3. 通知イベントを作成する
・Laravelでイベントを作成する（./laravel/Events/MessageCreated.phpを参照）
```
php artisan make:event MessageCreated
```
・作成したイベントを使用する（./laravel/Controllers/ExampleController.phpを参照）

4. React側で通知を受け取るようにする（./React/pages/Example.jsxを参照）



## 参考記事

Laravel+Vueでリアルタイム・チャットをつくる
* https://blog.capilano-fw.com/?p=1418#Pusher