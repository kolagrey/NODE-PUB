"use strict";

const gulp = require("gulp"),
  jshint = require("gulp-jshint"),
  stylish = require("jshint-stylish"),
  mocha = require('gulp-mocha'),
  gutil = require('gulp-util');

const path = {
  js: ["./app.js", "./routes/*.js"],
};


gulp.task('test', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
    gulp.watch(['test/**'], ['mocha']);
});


gulp.task("jshint", () => {
  return gulp.src(path.js).pipe(jshint()).pipe(jshint.reporter(stylish));
});

/* gulp.task("test", () => {
  require("./test.js");
  return Promise.resolve('Done');
}); */

gulp.task("serve", () => {
  require("./bin/www");
});


gulp.task("default", gulp.series('jazz','test','serve'));