//设置规则的配置接口：

//.添加md5戳：对 js、css、png 图片引用 URL 添加 md5 戳：
fis.match('*.{js,css,png}', {
  useHash: true
});

//js压缩：使用fis-optimizer-uglify-js 插件，已内置
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

//CSS压缩：使用fis-optimizer-clean-css 插件，已内置
fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

//合并打包需加
fis.match('::package', {
  postpackager: fis.plugin('loader')
});


//css打包配置
fis.match('*.css', {
  packTo: '/static/aio.css'
});
//js打包配置
fis.match('*.js', {
  packTo: '/static/aio.js'
});


// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})
// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});


//定位JS：所有的 js   发布到/static/js/xxx目录下
fis.match('**.js', {
    release : '/static/js$0'
});
//定位CSS：所有的 css 发布到/static/css/xxx目录下
fis.match('**.css', {
    release : '/static/css$0'
});
//定位图片：所有image目录下的.png，.gif文件发布到/static/pic/xxx目录下
fis.match('/img/(*.{png,gif})', {
    release: '/static/pic/$1$2'
});
