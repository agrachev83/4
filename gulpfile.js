'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
<<<<<<< HEAD
  return gulp.src('./scss/**.scss')
=======
  return gulp.src('./scss/style.scss')
>>>>>>> 8fae9c6f76178c1e77e5cdae3de2f762827b948e
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);