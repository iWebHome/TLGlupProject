var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require("gulp-minify-css");
var minifyHtml = require("gulp-minify-html");
var concat = require("gulp-concat");
var less = require("gulp-less");
// var sass = require("gulp-sass");
// var imagemin = require('gulp-imagemin');

// 0 如何使用gulp
// gulp.task('default',function(){
//
//    console.log('hello world');
//
// });


// gulp API介绍

// 1 Gulp.src(globs[,options])
// gulp.task("uglify-js",function(){
// return gulp.src("src/js/*.js")
//      .pipe(uglify())
//      .pipe(gulp.dest('build'));
// });
//
// gulp.task('default',['uglify-js']);


// 2 使用base字段来继续
// gulp.task("uglify-js",function(){
//    return gulp.src("src/js/*.js",{ base: 'src' })
//      .pipe(uglify())
//      .pipe(gulp.dest('build'));
// });
// gulp.task('default',['uglify-js']);

// 3 gulp.task(name[,deps],fn)  one任务异步执行
// gulp.task('one',function(){
//    //one是一个异步执行的任务
//    setTimeout(function(){
//       console.log('one is done')
//    },5000);
// });
// //two任务虽然依赖于one任务,但并不会等到one任务中的异步操作完成后再执行
// gulp.task('two',['one'], function(){
//    console.log('two is done');
// });
// gulp.task('default',['two']);


// 4 gulp.task(name[,deps],fn)  two任务同步执行
// gulp.task('one',function(fn){
//    // fn 为任务函数提供的回调 用来通知该任务已经完成
//    //one是一个异步执行的任务
//    setTimeout(function(){
//       console.log('one is done');
//       fn();
//    },1000);
// });
// //two任务虽然依赖于one任务,会等到one任务中的异步操作完成后再执行
// gulp.task('two',['one'], function(){
//    console.log('two is done');
// });
// gulp.task('default',['two']);


// gulp一些常用插件

// 1.gulp-rename（重命名）

// gulp.task('rename', function () {
//   gulp.src('src/**/*.js')
//     .pipe(uglify())  //压缩
//     .pipe(rename('index.min.js'))
//     .pipe(gulp.dest('build/js'));
// });
// gulp.task('default',['rename']);
// //关于gulp-rename的更多强大的用法请参考https://www.npmjs.com/package/gulp-rename

// 2.gulp-uglify(JS压缩)
// gulp.task('rename', function () {
//   gulp.src('src/**/*.js')
//     .pipe(uglify())  //压缩
//     .pipe(rename('index.min.js'))
//     .pipe(gulp.dest('build/js'));
// });
// gulp.task('default',['rename']);


// 3.gulp-minify-css(css文件压缩)
//
// gulp.task('minify-css', function () {
//   gulp.src('src/**/*.css') // 要压缩的css文件
//     .pipe(minifyCss()) //压缩css
//     .pipe(gulp.dest('build'));
// });
// gulp.task('default',['minify-css']);

// 4.gulp-minify-html（html压缩）
//
// gulp.task('minify-html', function () {
//   gulp.src('src/**/*.html') // 要压缩的html文件
//     .pipe(minifyHtml()) //压缩
//     .pipe(gulp.dest('build'));
// });
//
// gulp.task('default',['minify-html']);

// 5.gulp-concat（JS文件合并）
//
// gulp.task('concat', function () {
//   gulp.src('src/**/*.js')  //要合并的文件
//     .pipe(concat('index.js'))  // 合并匹配到的js文件并命名为 "index.js"
//     .pipe(gulp.dest('build/js'));
// });
//
// gulp.task('default',['concat']);

// 6.gulp-less (less编译)
//
// gulp.task('compile-less', function () {
//   gulp.src('src/less/*.less')
//     .pipe(less())
//     .pipe(gulp.dest('build/css'));
// });
//
// gulp.task('default',['compile-less']);

// 7.gulp-sass(sass编译)
//
// gulp.task('compile-sass', function () {
//   gulp.src('src/sass/*.sass')
//     .pipe(sass())
//     .pipe(gulp.dest('build/css'));
// });
//
// gulp.task('default',['compile-sass']);

// 8.gulp-imagemin（图片压缩）
//
// gulp.task('uglify-imagemin', function () {
//   return gulp.src('src/images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('build/images'));
// });
// gulp.task('default',['uglify-imagemin']);