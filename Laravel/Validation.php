<?php

// バリデーション適用

// モデルファイルにカラムにルールを適用する$rulesとルールに引っかかった際に表示するメッセージを格納する$messagesを用意
class ExampleModel extends Model
{
    public static $rules = [
        'name'        => 'required',
        'image'       => 'required',
        'category_id' => 'required|min:1|numeric',
        'material'    => 'required',
        'description' => 'required',
        'time'        => 'nullable|numeric',
        'open_flag'   => 'numeric',
        'delete_flag' => 'numeric',
    ];

    public static $messages = [
        'name.required'        => '＊レシピ名は必須です',
        'image.required'       => '＊画像は必須です',
        'image.file'           => '＊画像ファイルを添付してください',
        'image.mimes'          => '＊指定のファイル形式(jpeg,jpg,png,webp)以外は添付できません',
        'category_id.required' => '＊カテゴリーは必須です',
        'category_id.min'      => '＊カテゴリーは必須です',
        'material.required'    => '＊材料は必須です',
        'description.required' => '＊レシピは必須です',
        'time.numeric'         => '＊時間は数字で入力してください',
        'open_flag.numeric'    => '＊公開フラグは数字で入力してください',
        'delete_flag.numeric'  => '＊削除フラグは数字で入力してください',
    ];
}


// コントローラー等でModelで作成したルールでバリデーションを行うように指定
class ExampleController extends Controller
{
  public function example(Request $request)
  {
      $this->validate($request, ExampleModel::$rules, ExampleModel::$messages);
  }
}