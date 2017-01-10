$(document).ready(function () {
  
  kuaiLayout();
  var flag=getCookie("flag");
  if(flag==""||flag==1){
    $("#changeId").show();
    $("#listLayout").hide();
  }else if(flag==2){
      $("#changeId").hide();
      $("#listLayout").show();
    }



/*
   if(flag!=""){//cookie里面有主题值就设置，没有就什么都不做。
    if(flag=="1"){
      kuaiLayout();
      $("#changeId").show();
      $("#listLayout").hide();
    }else if(flag==2){
      $("#changeId").hide();
      $("#listLayout").show();
    }
  }
  */

  //关闭顶部导航的搜索框
  $("#close_btn").click(function () {
    $("#searchBox").hide();
  });

  //左侧课程库选择 纵向导航
  $(".aside_cList li").each(function (index) {
    var mtop = (index + 1) * 47;//每个li距离顶部的距离
    $(this).mouseover(function () {
      $(this).find(".kck_listShow").css({
        "display": "block",
        "top": "-" + mtop + "px"
      });
    }).mouseout(function () {
      $(this).find(".kck_listShow").css("display", "none");
    });
  });

//右侧全部课程+视频类型 横向导航
  $("#kck_navMiddle dl").each(function () {
    $(this).mouseover(function () {
      $(this).find("dd").css({
        "display": "block"
      });
    }).mouseout(function () {
      $(this).find("dd").css("display", "none");
    });
  });
//---------------横向与纵向布局 begin---------------

  var $kuai_btn = $(".kuai-icon");//块级按钮
  var $list_btn = $(".list-icon");//列表按钮
  $kuai_btn.on("click",function(){

    $("#changeId").show();
    $("#listLayout").hide();
    kuaiLayout();
    flag = "1";
    var  expires = new Date(new Date().getTime() + 1000 * 60 * 5);
   setCookie("flag",flag,expires);
   // var b = getCookie("flag");
   // console.log(b);
  });
  $list_btn.on("click",function(){
    $("#changeId").hide();
    $("#listLayout").show();
    flag = "2";
    var  expires = new Date(new Date().getTime() + 1000 * 60 * 5);
    setCookie("flag",flag,expires);
   // var a1 = getCookie("flag");
   // console.log(a1);
  });
//-------------横向与纵向布局 end--------------
});


//通过js修改块布局的样式函数
function kuaiLayout(){
  $("#changeId ul>li").each(function () {

    $(this).mousemove(function () {
      $(this).css("z-index","10");
      $(this).children("div.lesson_info").css("height", "180px");
      $(this).find("p").css("display", "block");
      $(this).find("dd.zhongji").css("display", "block");
      $(this).find(".cloud").css("top", "25px");
      $(this).find("div.time>div>em").css({
        "display": "block"
      });

    }).mouseout(function () {
      $(this).css("z-index","1");
      $(this).children("div.lesson_info").css("height", "90px");
      $(this).find("p").css("display", "none");
      $(this).find("dd.zhongji").css("display", "none");
      $(this).find(".cloud").css("top", "2px");
      $(this).find("div.time>div>em").css("display", "none");
    });
  });
}


//头部导航的搜索
function search() {
  $("#searchBox").css("display", "block");
}

//---------------------cookie的方法 begin--------------
//设置cookie
function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) +
  ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}


//读取cookie
function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return "";
}
//---------------------cookie的方法 end--------------
