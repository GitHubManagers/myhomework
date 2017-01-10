$(function(){
  var thisskin;
  thisskin=getCookie("color");
  if(thisskin!=""){//cookie里面有主题值就设置，没有就什么都不做。

    $("#main_nav ul>li a").css("background", thisskin);
  }

});
//切换主题
function  changeTheme(obj) {
  var themeColor = obj.getAttribute("value");
  //console.log(themeColor);
  $("#main_nav ul>li a").css("background", themeColor);

  var  expires = new Date(new Date().getTime() + 1000 * 60 * 5);
  //console.log(expires);
  setCookie("color",themeColor,expires);
}


//设置cookie
function setCookie(c_name,value,expiredays){
  var exdate=new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  document.cookie=c_name+ "=" +escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}
//读取cookie
function getCookie(c_name)
{
  if (document.cookie.length>0)
  {
    c_start=document.cookie.indexOf(c_name + "=");
    if (c_start!=-1)
    {
      c_start=c_start + c_name.length+1;
      c_end=document.cookie.indexOf(";",c_start);
      if (c_end==-1) c_end=document.cookie.length;
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
  return ""
}
