$(document).ready(function () {
  var $newsTable = $("#newstable tbody");
  refreshNews();
  //添加新闻
  $("#btnsubmit").click(function (event) {
    event.preventDefault();
    //输入判断
    if ($("#newstitle").val() === "" || $("#newssrc").val() === "" || $("#newstype option:selected").val() === "" || $("#newstime").val() === "" || $("#newsimg").val() === "") {

      if ($("#newstitle").val() === "") {
        $("#newstitle").parent().addClass("has-error");
      } else {
        $("#newstitle").parent().removeClass("has-error");
      }

      if ($("#newssrc").val() === "") {
        $("#newssrc").parent().addClass("has-error");
      } else {
        $("#newssrc").parent().removeClass("has-error");
      }

      if ($("#newstype").val() === "") {
        $("#newstype").parent().addClass("has-error");
      } else {
        $("#newstype").parent().removeClass("has-error");
      }

      if ($("#newstime").val() === "") {
        $("#newstime").parent().addClass("has-error");
      } else {
        $("#newstime").parent().removeClass("has-error");
      }

      if ($("#newsimg").val() === "") {
        $("#newsimg").parent().addClass("has-error");
      } else {
        $("#newsimg").parent().removeClass("has-error");
      }
    } else {
      var jsonNews = {
        newstitle: $("#newstitle").val(),
        newstype: $("#newstype").val(),
        newsimg: $("#newsimg").val(),
        newstime: $("#newstime").val(),
        newssrc: $("#newssrc").val()
      };
      //提交新闻
      $.ajax({
        url: "/admin/insert",
        type: "post",
        data: jsonNews,
        datatype: "json",
        success: function (data) {
          $("#newstitle").val("");
          $("#newstype").val("精选");
          $("#newsimg").val("");
          $("#newstime").val("");
          $("#newssrc").val("");
          refreshNews();
        }
      });
    }
  });

  //删除新闻
  var deleteId = null;
  $newsTable.on("click", ".btn-danger", function () {
    $("#deteleModal").modal("show");
    deleteId = $(this).parent().prevAll().eq(3).html();
  });
  $("#confirmDelete").click(function () {
    if (deleteId) {
      $.ajax({
        url: "/admin/delete",
        type: "post",
        data: {newsid: deleteId},
        success: function (datas) {
          // console.log("删除成功");
          $("#deteleModal").modal("hide");
          refreshNews();//刷新界面
        }
      });
    }
  });

  //修改新闻
  //点击编辑
  var updateId = null;
  $newsTable.on("click", ".btn-success", function (e) {
    $("#updateModal").modal("show");
    updateId = $(this).parent().prevAll().eq(3).html();
    //根据ID查询数据库
    $.ajax({
      url: "/admin/modalNews",
      type: "get",
      data: {newsid: updateId},
      success: function (datas) {
        datas.forEach(function (item, index, array) {
          $('#unewstitle').val(item.newstitle);
          $('#unewstype').val(item.newstype);
          $('#unewsimg').val(item.newsimg);
          $('#unewssrc').val(item.newssrc);
          var utime = item.newstime.split('T')[0];
          console.log(utime);
          $('#unewstime').val(utime);
        });
      }
    });
  });
//点击确定按钮
  $("#confirmUpdate").click(function () {
    //把ID值与修改后了的数据提交到update.php
    var jsonUpdateNews = {
      uid: updateId,
      unewstitle: $("#unewstitle").val(),
      unewstype: $("#unewstype").val(),
      unewsimg: $("#unewsimg").val(),
      unewstime: $("#unewstime").val(),
      unewssrc: $("#unewssrc").val()
    };

    $.ajax({
      url: "/admin/update",
      type: "post",
      data: jsonUpdateNews,
      success: function (datas) {
        $("#updateModal").modal("hide");
        refreshNews();//刷新界面
      }
    });
  });

  function refreshNews() {
    //清空所有的新闻
    $newsTable.empty();
    $.ajax({
      //url: "../baidunews/server/getnews.php",
      url: "/admin/getnews",
      type: "get",
      dataType: "json",
      success: function (datas) {
        //如果有很多条新闻，则需要遍历data
        //debugger;
        //console.log(datas);
        datas.forEach(function (item, index, array) {
          var $tRow = $("<tr>");
          var $tdId = $('<td>').html(item.id);
          var $tdType = $('<td>').html(item.newstype);
          var $tdTitle = $('<td>').html(item.newstitle);
          var $tdTime = $('<td>').html(item.newstime);
          var $td = $('<td>');
          var $btnupdate = $("<button>").addClass("btn btn-success btn-xs").html("编辑");
          var $btndelete = $("<button>").addClass("btn btn-danger btn-xs").html("删除");
          $td.append($btnupdate, $btndelete);
          $tRow.append($tdId, $tdType, $tdTitle, $tdTime, $td);
          $newsTable.append($tRow);
        });
      }
    });
  }
});















