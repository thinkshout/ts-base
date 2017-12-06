'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    purge = require('gulp-css-purge'),
    bulkSass = require('gulp-sass-bulk-import'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

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
    .pipe(purge())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass', 'sass:watch', 'js-compress', 'js-compress:watch', 'browser-sync', 'browser-sync:watch' ]);
