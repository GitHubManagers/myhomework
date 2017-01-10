var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'baidunews'
});
/* 后台页面 */
//后台界面——获取所有新闻列表并展示
router.get('/getnews', function (req, res) {
  connection.query('SELECT * FROM `news` order by id desc', function (err, rows, fields) {
    res.json(rows);
  })
});

//后面界面——编辑后确认按钮（更改数据库内的数据）
router.post('/update', function (req, res) {
    var newsid = req.body.uid,
    newstype = req.body.unewstype,
    newstitle = req.body.unewstitle,
    newsimg = req.body.unewsimg,
    newstime = req.body.unewstime,
    newssrc = req.body.unewssrc;
  connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?',[newstitle,newstype,newsimg,newstime,newssrc,newsid], function (err, rows, fields) {
    res.json(rows);
  })
});

//编辑点击后的模态框内值（从数据库查询回来的）
router.get('/modalNews', function (req, res) {
  var newsid = req.query.newsid;
  connection.query('SELECT * FROM `news` WHERE `id`=?', [newsid], function (err, rows) {
    res.json(rows);
  })
});

//删除新闻
router.post('/delete',function(req, res, next){
    var newsid = req.body.newsid;
  connection.query('DELETE FROM `news` WHERE `news`.`id`=?',[newsid], function (err, rows) {
    res.json(rows);
  });
});

//增加（插入）新闻信息
router.post('/insert',function(req, res, next){
  var newstitle = req.body.newstitle,
      newstype = req.body.newstype,
      newsimg = req.body.newsimg,
      newstime = req.body.newstime,
      newssrc = req.body.newssrc;
  connection.query('INSERT INTO `news`(`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`)VALUES(?,?,?,?,?)',[newstitle,newstype,newsimg,newstime,newssrc],function(err, rows){
    if(!err){
      res.json(rows);
    }
  });
});
module.exports = router;