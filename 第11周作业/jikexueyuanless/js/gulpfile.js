/**
 * Created by Administrator on 2017/1/4.
 */
var gulp = requier('gulp'),
    mininfycss = requier('gulp-minify-css'),
    uglify = requier('gulp-uglify'),
    concast = requier('gulp-concat'),
    less = require('gulp-less');

//定义任务less-->css
gulp.task('less2css', function () {
    return    gulp.src('stylesheets/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('./build')); //将会在stylesheets下生成css
});
//合并、压缩CSS
gulp.task('css',function () {
    return gulp.src('stylesheets/*.css')
        .pipe(concat('all/min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./build'));
});
//合并、压缩JS文件
gulp.task('js',function () {
    return gulp.src('js/*.js')
        .pipe(concat('all/min.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('default',['testLess', 'elseTask'],function(){
    gulp.src('js/*.js')
        .pipe(uglify)
        .pipe(concat('all/min.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('default',['testLess', 'elseTask']); //定义默认任务
