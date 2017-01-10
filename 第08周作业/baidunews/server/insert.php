<?php
   header("Content-type:application/json;charset=utf-8");
//访问数据库
    require_once("db.php");
    if($link){
//链接成功插入新闻
        $newstitle = addslashes(htmlspecialchars($_POST['newstitle']));
        $newstype = addslashes(htmlspecialchars($_POST['newstype']));
        $newsimg = addslashes(htmlspecialchars($_POST['newsimg']));
        $newstime = addslashes(htmlspecialchars($_POST['newstime']));
        $newssrc = addslashes(htmlspecialchars($_POST['newssrc']));

//sql插入语句
$sql = "INSERT INTO news(newstype,newstitle,newsimg,newstime,newssrc)VALUES('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')";

          mysqli_query($link,"SET NAMES UTF8");
          mysqli_query($link,$sql);
          echo json_encode(array("success"=>"ok"));
         }
          mysqli_close($link);
?>