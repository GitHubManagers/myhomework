$(document).ready(function(){
  var theme;
  var self;
  var time;

  theme=$.cookie("theme");
  if(theme!=""){
    $("body").attr("background", theme);
  }else{
    $("body").attr("background", "none");
  }

  var index ={
    init:function(){
      this.render();
      this.bind();
    },
    render:function(){
      self = this;
      //返回顶部
      self.aside = $("#aside");
      self.span = $("#aside_box>span");
      self.a = $("a.content_a");
      //导航手风琴效果
      self.li = $("#notice li");
      self.mine = $("#my_content");
      self.video = $(".video_content");
      self.news = $(".news_content");
      //换肤功能显示与隐藏之间的切换
      self.change = $(".changeColor");
    },
    bind:function(){
      self = this;
      self.reTop();
      self.navChange();
      self.themeChange();
    },
    //返回顶部
    reTop:function(){
      self = this;
      self.aside.on('mouseover',function(){
        self.span.hide();
        self.a.show();
      }).on('mouseleave',function(){
        self.span.show();
        self.a.hide();
      });

      var windowInnerHeight = $(window).height();
      $(window).bind("scroll", function(){
        var top = $(this).scrollTop();
        top>windowInnerHeight/6?self.aside.show():self.aside.hide();
      });
    },
    navChange:function(){
      self = this;
      self.li.on('click',function(){
        //var index = self.li.index();//0-0-0
        var index = $(this).index();//0-1-2
        //console.log(index);
        switch (index){
          case 0:
            //self.mine.show(1000);
            //self.video.hide(1000);
            //self.news.hide(1000);
            //console.log(self.mine);//#my_content
            $("#my_content").show(1000);
            $(".video_content").hide(1000);
            $(".news_content").hide(1000);
            break;
          case 1:
            //self.mine.show(1000);
            //self.video.hide(1000);
            //self.news.hide(1000);
            $(".video_content").show(1000);
            $("#my_content").hide(1000);
            $(".news_content").hide(1000);
            break;
          case 2:
            //self.mine.show(1000);
            //self.video.hide(1000);
            //self.news.hide(1000);
            $(".news_content").show(1000);
            $("#my_content").hide(1000);
            $(".video_content").hide(1000);
            break;
          default :
            break;
        }
      });
    },
    themeChange: function () {
      self = this;
      self.change.click(function(){
        time = setTimeout(function(){
          $(".bg_color").toggle();
        },200);
      });
    }
  };

  index.init();
});

//切换主题的方法
function  changeTheme(obj) {
  var themeImg = $(obj).find("img").attr("src");
  $("body").attr("background", themeImg);
  $.cookie("theme",themeImg);
}