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
// 浏览器热更新功能
const livereload = require('gulp-livereload');
// watch
const watch = require('gulp-watch');
// 编译sass
gulp.task('sass', function () {
    gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            // cascade: false //  是否美化属性值
        }))
        .pipe(gulp.dest('assets/css'))
        .pipe(livereload()) // 热更新
});
// 压缩css
gulp.task("cleanCss", function () {
    gulp.src("assets/css/*.css")
        .pipe(cleanCss()) // 压缩css
        .pipe(rename({suffix: ".min"})) // 从命名
        .pipe(gulp.dest("./dest/css"))
        .pipe(livereload()) // 热更新
});

// es6转es5并且压缩
gulp.task("es6", function () {
    gulp.src("assets/js/*.js")// ES6 源码存放的路径
        .pipe(babel())
        .pipe(uglify()) // 压缩js
        .pipe(rename({suffix: ".min"})) // 从命名
        .pipe(gulp.dest("dest/js")) //转换成 ES5 存放的路径
        .pipe(livereload()) // 热更新
});

gulp.task("run", function () {
    livereload.listen();
    gulp.watch("assets/scss/*.scss", gulp.series('sass')); // 编译sass
    gulp.watch("assets/css/*.css", gulp.series('cleanCss'));
    gulp.watch("assets/js/*.js", gulp.series('es6')); // 编译es6
});
