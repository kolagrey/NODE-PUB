"use strict";

const gulp = require("gulp"),
  jshint = require("gulp-jshint"),
  stylish = require("jshint-stylish"),
  mocha = require('gulp-mocha'),
  gutil = require('gulp-util');

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
    gulp.watch(['test/**'], ['mocha']);
});

const path = {
  js: ["./app.js", "./routes/*.js"],
};

gulp.task("jazz", () => {
  return gulp.src(path.js).pipe(jshint()).pipe(jshint.reporter(stylish));
});

gulp.task("test", () => {
  require("./test.js");
  return Promise.resolve('Done');
});

gulp.task("serve", () => {
  require("./bin/www");
});


gulp.task("default", gulp.series('jazz','test','serve'));