var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    less = require('gulp-less'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    runSequence = require('run-sequence'),
    webpack = require('webpack-stream');

gulp.task('webpack', function() {
  return gulp.src(jsPath + '/entry.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('client/build/js/'));
});

gulp.task('webserver', function() {
  connect.server({
    root: 'client',
    livereload: true
  });
});

gulp.task('html', function() {
    return gulp.src([
        './client/index.html'
    ])
    .pipe(gulp.dest('client/build'));
});

var lessPath = 'client/assets/less';
var lessFiles = lessPath + '/**/*.less';
var cssPath = 'client/build/css';
var jsPath = 'client/assets/js';
var jsFiles = jsPath + '/**/*.js';
var jsxFiles = jsPath + '/**/*.jsx';

gulp.task('clean', function() {
    return gulp.src('client/build', {read: false})
 		.pipe(clean());
});

gulp.task('less', function() {
   return gulp.src(lessFiles)
        .pipe(plumber())
        .pipe(less())
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        //.pipe(cssmin()) //todo
        .pipe(autoprefixer(
            {
                browsers: [
                    '> 1%',
                    'last 2 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
                cascade: false
            }
        ))
        .pipe(gulp.dest('client/build/css'))
        .on('error', gutil.log);
});

gulp.task('reload', function() {
    return gulp.src('./client')
    .pipe(connect.reload());
});


gulp.task('build', function (callback) {
    runSequence('clean',
        'html',
        'less',
        'webpack',
        'reload',
        callback);
});

gulp.task('watch', function() {
    gulp.watch(lessFiles, ['build']);
    gulp.watch(jsFiles, ['build']);
    gulp.watch(jsxFiles, ['build']);
    gulp.watch('./client/index.html', ['build']);
});

gulp.task('default', ['build', 'webserver', 'watch']);
