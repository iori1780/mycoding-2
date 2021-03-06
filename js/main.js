$(function(){
  // スティッキーヘッダー
  let $win = $(window),
      $fv = $(".fv"),
      $header = $(".header"),
      fvHeight = $fv.outerHeight(),
      fixedClass = "fixed";


    $win.on("scroll", function(){
      let value = $(this).scrollTop();
      if($win.width()>768){

        if( value > fvHeight){
          $header.addClass(fixedClass);

        } else {
          $header.removeClass(fixedClass);
        }
      }
    });

    // ハンバーガーメニュー
    $(".menu-btn").on("click", function(){
      $(".header-nav").fadeToggle(300);
      $(this).toggleClass("cross");
      $("body").toggleClass("noscroll");
    });
});
