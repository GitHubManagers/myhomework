$(document).ready(function () {
  refreshNews("精选");
  $('nav a').click(function(e){
    e.preventDefault();
    var type = $(this).text();
    refreshNews(type);
  });
});

function refreshNews(type) {
  //刷新之前，想把之ul的内容给清空
  var $lists = $('article ul');
  $lists.empty();

  //异步请求php
  $.ajax({
    //url:"../baidunews/server/getnews.php",
    url:"/news",
    type:"get",
    data:{newstype:type},
    dataType:"json",
    success:function(datas){
      console.log(datas);
      datas.forEach(function (item,index,array){
        //请求成功，则添加一条新闻
        var $lists = $('article ul');
        var $list = $('<li></li>').addClass('news-list').prependTo($lists);
        var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
        var $img = $('<img/>').attr('src',item.newsimg).appendTo($newsImg);

        var $newsConten = $('<div></div>').addClass('newscontent').appendTo($list);
        var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsConten);
        var $p = $('<p></p>').appendTo($newsConten);
        var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
        var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
      });
    }
  });
}
