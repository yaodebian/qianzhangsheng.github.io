var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('imagemin', function () {
    return gulp.src('demo/css3/loading/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('jshint', function () {
    return gulp.src('demo/css3/loading/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minify-css', function () {
    return gulp.src('demo/css3/loading/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', function () {
    return gulp.src('demo/css3/loading/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});