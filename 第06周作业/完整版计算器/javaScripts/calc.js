/**
 * Created by Administrator on 2016/12/9.
 * 计算器
 */
//定义一个函数获取ID
function $(str) {
  return document.getElementById(str);
}
//全局变量str，用于记录点击的值
var str = "";
var is_kh = false;
//通过switch判断语句用户的点击位置
function calc(ag) {
  //点击的是计算符号时
  switch (ag) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
    case ".":
      //if(str=="/"){
      //  var temp = eval(str);
      //  if(temp.split("/").indexOf(1)== "0"){
      //    str="被除数不能为0"
      //  }else{
      //    str = eval(str);
      //  }
      //}
      if (str == "0") {
        switch (ag) {
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "0":
            str = str.slice(1, 0);
            break;
          default :
            break
        }
      }

      str = str + ag;
      break;
    //通过eval执行表达式
    case "=":
      try {
        str = eval(str);
      } catch (e) {
        alert(e.name);
      }
      break;
    //清空显示的内容
    case "AC":
      str = "";
      break;
    //切换正负号
    case "+/-":
      var temp = eval(str);
      str = parseInt(temp);
      str = -str;
      break;
    case "1/x":
      var temp = eval(str);
      if(temp=="0"){
        str="被除数不能为0"
      }else{
        str = 1 / temp;
      }
      break;
    case "()":
      if (is_kh) {
        str = str + ")";
        is_kh = false;
      } else {
        str = str + "(";
        is_kh = true;
      }
      break;
    //后退一个字符
    case"back":
      str = String(str);
      str = str.slice(0, -1);
      if (str == "") {
        str = "";
      }
      break;
    case "√":
      var temp = eval(str);
      str = Math.sqrt(temp);
      break

    default :
      str = "ERROR";
      break;
  }
  $("output").value = str;
  return;
}
