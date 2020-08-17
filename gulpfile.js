const gulp = require('gulp'),
jshint = require('gulp-jshint'),
stylish = require('jshint-stylish');

const path = {
    js: ['./app.js', './test.js', './routes/*.js']
};

// gulp.task('default', ['jshint', 'test']);

gulp.task('jshint', function(){
    return gulp.src(path.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});


gulp.task('test', function(){
    return Promise.resolve('the value is ignored');
});