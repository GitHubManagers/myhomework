var timeoutid;
$(document).ready(function () {
  //返回顶部
  $("#aside").mouseover(function () {
    timeoutid = setTimeout(function () {
      $("#aside_box>span").hide();
      $("a.content_a").show();
    }, 0);
  }).mouseout(function () {
    $("#aside_box>span").show();
    $("a.content_a").hide();
    clearTimeout(timeoutid);
  });

    var windowInnerHeight = $(window).height()

    $(window).bind("scroll", function(){
        var top = $(this).scrollTop(); // 当前窗口的滚动距离顶部的距离
        // console.log(top);
        if(top>windowInnerHeight/5){
            $("#aside").show();
        }else{
            $("#aside").hide();
        }
    });

  //导航手风琴
  $("#notice li").click(function () {
      var index = $(this).index();
      if(index==0){
          $("#my_content").show(1000);
          $(".video_content").hide(1000);
          $(".news_content").hide(1000);
      }else if(index==1){
          $(".video_content").show(1000);
          $("#my_content").hide(1000);
          $(".news_content").hide(1000);
      }else if(index==2){
          $(".news_content").show(1000);
          $("#my_content").hide(1000);
          $(".video_content").hide(1000);
      }
  });

  //换肤功能显示与隐藏之间的切换
  $(".changeColor").click(function(){
    timeoutid = setTimeout(function(){
        $(".bg_color").toggle();
    },200);
  });
//一刷新，读取cookie，判断是否有值
  var theme;
    theme=$.cookie("theme");
    // console.log("cookie为："+theme);
  if(theme!=""){//cookie里面有主题值就设置，没有就什么都不做。
      $("body").attr("background", theme);
    }else{
      $("body").attr("background", "none");
  }
  //切换主题end
});
// //切换主题封装的方法
function  changeTheme(obj) {
  var themeImg = $(obj).find("img").attr("src");
    $("body").attr("background", themeImg);
    $.cookie("theme",themeImg);//设置cookie
}