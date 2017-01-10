<?php
   header("Content-type:application/json;charset=utf-8");
//访问数据库
    require_once("db.php");

    if($link){
        $newsid = addslashes(htmlspecialchars($_POST["newsid"]));
        $sql = "DELETE FROM news WHERE id='{$newsid}'";
        mysqli_query($link,"SET NAMES UTF8");
        mysqli_query($link,$sql);
        echo json_encode(array("删除状态"=>"成功"));
    }
        mysqli_close($link);
?>