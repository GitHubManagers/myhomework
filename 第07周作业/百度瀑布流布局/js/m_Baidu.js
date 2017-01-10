$(document).ready(function(){
  var dataImg = {
    "data":[{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"12.jpg"},{"src":"11.jpg"},{"src":"10.jpg"},{"src":"9.jpg"},{"src":"8.jpg"}]
  };
  //监听window的onload事件
  $(window).on("load",function(){
    //调用
    imgLocation();
  });

  $(window).on("scroll",function(){
    if(checkScrollSlide()){
      $.each(dataImg.data,function(index,value){
        var box =$("<div>").addClass("box").appendTo($("#container"));
        var content = $("<div>").addClass("content").appendTo($(box));
        var img = $("<img>").attr("src","images/"+$(value).attr("src")).appendTo(content);
      });
      imgLocation();
    }
  })
});

/*
* <div id="container" class="wrapper">
      <div class="box">
          <div class="content">
              <img src="images/1.jpg" alt="动漫图片"/>
          </div>
      </div>
      .......
  </div>
* */
function imgLocation(){
  var box = $(".box");
  var boxWidth = box.eq(0).width();//获取第一个盒子的宽度 = 170;

  //获得水平方向最大能放几张等宽的图片
  var maxWidth = parseInt($(".wrapper").css("width"));// 1190
  var num = Math.floor(maxWidth/boxWidth);//6

  var boxArr = [];
  box.each(function(index,value){//index是每个box的下标，value为每个box的标签对象
    var boxHeight = box.eq(index).height();//得到每个盒子的高度
    if(index<num){//水平方向的第一行图片的高度 = 每个盒子的高度
      boxArr[index] = boxHeight;
    }else{
      //设置摆放？？
      //从boxArr中 获取上一行中“盒子中最小的高度”
      var minboxHeight = Math.min.apply(null,boxArr);
      //console.log(minboxHeight);//107

      //获取最小高度图片的位置
      var minboxIndex = $.inArray(minboxHeight,boxArr);
      //console.log(minboxIndex);//3

      //通过位置进行摆放
      //console.log(value);//是每个div.box标签 设置了属性position:absolute;
      //console.log(box.eq(minboxIndex).style.marginLeft());
      //console.log(box.eq(minboxIndex).position.left());
      $(value).css({
        "position":"absolute",
        "top":minboxHeight+"px",
        //左边的位置
       // "left":box.eq(minboxIndex).position.left
       "left":minboxIndex*boxWidth+"px"

      });
      //重新计算当前盒子的位置的高度
      boxArr[minboxIndex]+=box.eq(index).height();
    }
  });
}

//监听滚动事件
function checkScrollSlide () {
  var $lastBox=$("#container>div").last();
  var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
  var scrollTop=$(window).scrollTop();
  var documentH=$(document).height();
  return (lastBoxDis<scrollTop+documentH)?true:false;
}