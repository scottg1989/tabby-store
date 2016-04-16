var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    runSequence = require('run-sequence'),
    webpack = require('webpack-stream');


gulp.task('webpack-build', function () {
    var wp = webpack(require('./webpack.config.js'));
    wp.on('error',function(e){
        gutil.log(e);
        wp.end();
    });
    return gulp.src(jsPath + '/entry.js')
        .pipe(wp)
        .pipe(gulp.dest('client/build/'));
});

/* this is a hack, until this can properly be supported via webpack config */
gulp.task('move-bundle', function () {
  return gulp.src('client/build/bundle.js')
    .pipe(gulp.dest('client/build/js'));
});

/* this is a hack, until this can properly be supported via webpack config */
gulp.task('move-bundle-clean', function () {
  return gulp.src('client/build/bundle.js')
    .pipe(clean());
});

gulp.task('webpack', function (callback) {
    runSequence(
        'webpack-build',
        'move-bundle',
        'move-bundle-clean',
        callback);
});

gulp.task('webserver', function() {
  connect.server({
    root: 'client/build',
    livereload: true
  });
});

gulp.task('html', function() {
    return gulp.src([
        './client/src/index.html'
    ])
    .pipe(gulp.dest('client/build'));
});

var cssPath = 'client/build/css';
var jsPath = 'client/src/js';
var jsFiles = jsPath + '/**/*.js';
var jsxFiles = jsPath + '/**/*.jsx';
var scssPath = 'client/src/';
var scssFiles = scssPath + '/**/*.scss';

gulp.task('clean', function() {
    return gulp.src('client/build', {read: false})
 		.pipe(clean());
});

gulp.task('reload', function() {
    return gulp.src('./client')
    .pipe(connect.reload());
});

gulp.task('build', function (callback) {
    runSequence(
        'clean',
        'html',
        'webpack',
        'reload',
        callback);
});

gulp.task('watch', function() {
    gulp.watch([
        jsFiles,
        jsxFiles,
        scssFiles,
        './client/src/index.html'
    ], ['build']);
});

gulp.task('default', function (callback) {
    runSequence(
        'build',
        'webserver',
        'watch',
        callback);
});
