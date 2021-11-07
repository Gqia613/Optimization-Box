# Laravelコマンドまとめ
### よく使いすぎるコマンドは省く

* シーダー実行
` php artisan db:seed `

* シーダー個別で実行
` php artisan db:seed --class=ExampleSeeder `

* マイグレーションロールバック(直前に行ったマイグレーションを無かったことにする)
` php artisan migrate:rollback `

* 全てのマイグレーションを無かったことにする
` php artisan migrate:reset `

* 全てのマイグレーションをロールバックしてから再びマイグレーションする
` php artisan migrate:refresh `