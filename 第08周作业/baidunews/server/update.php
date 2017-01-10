<?php
   header("Content-type:application/json;charset=utf-8");
    //访问数据库
    require_once("db.php");

    if($link){
        $id = addslashes(htmlspecialchars($_POST['uid']));
        $newstitle = addslashes(htmlspecialchars($_POST['unewstitle']));
        $newstype = addslashes(htmlspecialchars($_POST['unewstype']));
        $newsimg = addslashes(htmlspecialchars($_POST['unewsimg']));
        $newstime = addslashes(htmlspecialchars($_POST['unewstime']));
        $newssrc = addslashes(htmlspecialchars($_POST['unewssrc']));

        if(isset($_POST['uid'])){
     $sql="UPDATE  news SET newstitle='{$newstitle}',newstype='{$newstype}',newsimg='{$newsimg}',newstime='{$newstime}',newssrc='{$newssrc}'where id='{$id}'";

                mysqli_query($link,"SET NAMES UTF8");
                mysqli_query($link,$sql);
                echo json_encode(array("success"=>"ok"));
        }
   }
        mysqli_close($link);
?>