<?php

// 画像ファイルをS3にアップロードする

use Illuminate\Support\Facades\Storage;

class ToS3ImageUpload
{
  public function store(Request $request)
  {
    // リクエストから画像ファイルを取得
    $image = $request->file('image');

    // バケットのimagesフォルダへアップロード
    $path = Storage::disk('s3')->putFile('images', $image, 'public');

    $content = new Recipe;
    $form = $request->all();
    // アップロードした画像のフルパスを取得
    $form['image'] = Storage::disk('s3')->url($path);
    unset($form['_token']);
    $content->fill($form)->save();

    return response()->json($recipe, 200);
  }
}