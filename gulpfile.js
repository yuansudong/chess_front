// 获取 gulp
const gulp = require('gulp');
// 获取 uglify 模块（用于压缩 JS）
const uglify = require('gulp-uglify');
//导入clean-css压缩插件
const cleanCss = require("gulp-clean-css");
//导入rename重命名插件
const rename = require("gulp-rename");
// 编译sass
const sass = require('gulp-sass');
// 兼容浏览器前缀
const autoprefixer = require('gulp-autoprefixer');
// es6转es5
const babel = require("gulp-babel");
// 编译sass
gulp.task('sass', function(){
    gulp.src('assets/scss/index.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            // cascade: false //  是否美化属性值
        }))
        .pipe(gulp.dest('css'))
});
// 压缩css
gulp.task("cleanCss",function(){
    gulp.src("./css/*.css")
        .pipe(cleanCss()) // 压缩css
        .pipe(rename({suffix:".min"})) // 从命名
        .pipe(gulp.dest("./dest/css"));
});



gulp.task("default", function () {
    return gulp.src("js/*.js")// ES6 源码存放的路径
        .pipe(babel())
        .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});
