var gulp = require('gulp');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var minify = require('gulp-minify');

var errorCallback = function (error) {
  console.log(error);
  this.emit('end');
};

gulp.task('js', function () {
    var src = [
        'jquery.parallax-scroll.js',
    ];
    return gulp.src(src)
        .pipe(plumber({
            errorHandler: errorCallback
        }))
        .pipe(minify({
            ext:{
                src : '.js',
                min : '.min.js'
            },
            preserveComments : 'some',
        }))
        .pipe(gulp.dest(''))
});

gulp.task('watch', function () {
    gulp.watch('jquery.parallax-scroll.js', ['js']);
});
