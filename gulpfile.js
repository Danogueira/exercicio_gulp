const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const branch = require('gulp-branch');
const git = require('gulp-git');

gulp.task('sass', function () {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', function () {
  return gulp
    .src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('uglify', function () {
  return gulp
    .src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.series('sass', 'imagemin', 'uglify'));
