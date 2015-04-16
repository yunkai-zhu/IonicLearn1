var gulp = require("gulp");
del = require("del");
uglify = require("gulp-uglify");
concat = require("gulp-concat");
jshint = require("gulp-jshint");
stylish = require('jshint-stylish');

gulp.task("clean",function(){
	del("build");
});

gulp.task("minify",function(){
	gulp.src("js/*.js")
		.pipe(concat("all-mini.js"))
		.pipe(uglify())
		.pipe(gulp.dest("build"));
});

gulp.task("jshint",function(){
  gulp.src("js/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task("default",["clean","minify"]);
