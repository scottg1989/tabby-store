var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    less = require('gulp-less'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    runSequence = require('run-sequence');


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
    .pipe(gulp.dest('client/build'))
    .pipe(connect.reload());
});

var lessPath = 'client/assets/less';
var lessFiles = lessPath + '/**/*.less';
var cssPath = 'client/build/css';

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
        .pipe(connect.reload())
        .on('error', gutil.log);
});

gulp.task('build', function (callback) {
    runSequence('clean',
        'html',
        'less',
        callback);
});

gulp.task('watch', function() {
    gulp.watch(lessFiles, ['build']);
    gulp.watch('./client/index.html', ['build']);
});

gulp.task('default', ['build', 'webserver', 'watch']);
