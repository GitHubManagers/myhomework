<?php
       header("Content-type:application/json;charset=utf-8");
        /*链接数据库，访问数据*/
       require_once("db.php");

         if($link){
                     if(isset($_GET['newstype'])){
                         $newstype = $_GET['newstype'];
                         //sql查询语句
                         $sql = "SELECT * FROM news WHERE newstype='{$newstype}'";
                         mysqli_query($link,"SET NAMES UTF8");
                         $result = mysqli_query($link,$sql);
                         $sendData  = array();
                         while($row = mysqli_fetch_assoc($result)){
                               array_push($sendData ,array(
                                    'id'=>$row['id'],
                                    'newstype'=>addslashes(htmlspecialchars_decode($row['newstype'])),
                                    'newstitle'=>addslashes(htmlspecialchars_decode($row['newstitle'])),
                                    'newsimg'=>addslashes(htmlspecialchars_decode($row['newsimg'])),
                                    'newstime'=>addslashes(htmlspecialchars_decode($row['newstime'])),
                                    'newssrc'=>addslashes(htmlspecialchars_decode($row['newssrc']))
                               ));
                          }
                               echo json_encode($sendData);
                     }else if(isset($_GET['newsid'])){

                         $newsid = $_GET['newsid'];
                         $sql = "SELECT * FROM news WHERE id ='{$newsid}'";

                         mysqli_query($link,"SET NAMES UTF8");
                         $result = mysqli_query($link,$sql);
                         $senddata = array();
                         while($row = mysqli_fetch_assoc($result)){
                                array_push($senddata,array(
                                    'id'=>$row['id'],
                                    'newstype'=>addslashes(htmlspecialchars_decode($row['newstype'])),
                                    'newstitle'=>addslashes(htmlspecialchars_decode($row['newstitle'])),
                                    'newsimg'=>addslashes(htmlspecialchars_decode($row['newsimg'])),
                                    'newssrc'=>addslashes(htmlspecialchars_decode($row['newssrc']))
                             ));
                         }
                                echo json_encode($senddata);
                     }else{
                         $sql = "SELECT * FROM news";
                         mysqli_query($link,"SET NAMES UTF8");
                         $result = mysqli_query($link,$sql);
                         $sendData  = array();
                         while($row = mysqli_fetch_assoc($result)){
                               array_push($sendData ,array(
                                    'id'=>$row['id'],
                                    'newstype'=>addslashes(htmlspecialchars_decode($row['newstype'])),
                                    'newstitle'=>addslashes(htmlspecialchars_decode($row['newstitle'])),
                                    'newsimg'=>addslashes(htmlspecialchars_decode($row['newsimg'])),
                                    'newstime'=>addslashes(htmlspecialchars_decode($row['newstime'])),
                                    'newssrc'=>addslashes(htmlspecialchars_decode($row['newssrc']))
                               ));
                          }
                               echo json_encode($sendData);
                     }
                }else{
                      echo json_encode(array("success"=>"none"));
                      }

       mysqli_close($link);
?>