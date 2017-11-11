'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var bulkSass = require('gulp-sass-bulk-import');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "drupal-8.4.2.dev"
    });
});

gulp.task('browser-sync:watch', ['sass'], function() {
  gulp.watch("./js/*.js", ['js-compress']);
  gulp.watch("./js/main-dist.js").on('change', browserSync.reload);
  gulp.watch("./sass/**/*.scss", ['sass']);
  gulp.watch("./css/*.css").on('change', browserSync.reload);
});

gulp.task('js-compress', function (cb) {
  pump([
        gulp.src('./js/*.js'),
        uglify(),
        rename('main-dist.js'),
        gulp.dest('./js/'),
        browserSync.stream(),
    ],
    cb
  );
});

gulp.task('js-compress:watch', function () {
  gulp.watch('./js/*.js', ['js-compress']);
});

gulp.task('sass', function () {
  return gulp
    .src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(bulkSass())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('pl-sass:watch', function () {
  gulp.watch('./pattern-lab/source/_patterns/**/**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass', 'sass:watch', 'pl-sass:watch', 'js-compress', 'js-compress:watch', 'browser-sync', 'browser-sync:watch' ]);