$(function(){
  var dis = 250;

  // アイコンをクリック
  $("button").click(function(){
    // bodyの子要素のmargin-leftを、それぞれ変数disの値だけ増やす
    $("body").children().animate({"margin-left" : "+=" + dis + "px"}, 200);

    // disに-1を掛ける
    dis *= -1;
  });
  // ナビゲーションをクリック
  $("a[href*=#]:not([href=#])").click(function(){
    // 移動先のコンテンツの位置を取得
    var target = $($(this).attr("href")).offset().top;

    // 70px減らす
    target -= 70;

    // コンテンツへスクロール
    $("html, body").animate({scrollTop : target}, 500);

    return false;
  });
  //topへをクリックした時の処理
  $("a[href = #top0]").click(function(){
    //windowの一番上に戻る。
    var target1 = $($(this).attr("href")).offset().top;
    $("html, body").animate({scrollTop : target}, 500);
  });
});
