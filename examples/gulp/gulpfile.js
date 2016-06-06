var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require("gulp-rename")
var uglify = require('gulp-uglify');

gulp.task('default', ['browserify', 'uglify']);

gulp.task('uglify', function () {
    return gulp.src('preety.js').pipe(uglify()).pipe(rename('ugly.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('browserify', function () {
    return browserify('../browserify/browser/index.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('../browserify/browser/index.js', ['browserify']);
});
