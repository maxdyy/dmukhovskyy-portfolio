const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  watch = require('gulp-watch'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify');

const timestamp = require('time-stamp');

gulp.task('build', function () {
  return (
    gulp.src('./website/style.s*ss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      grid: true,
      browsers: ['> 1%', 'iOS 7']
    }))
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./website/'))
    .pipe(notify({
      message: `SUCCESS - SASS => CSS min compiled @ ${timestamp('HH:mm:ss')}`,
      onLast: true
    }))
  );
});

gulp.task('watch', function () {
  notify(`SUCCESS - SASS WATCH STARTED @ ${timestamp('HH:mm:ss')}`).write('');
  return watch(['./website/components/*/*.s*ss'], {
    ignoreInitial: false
  }, function () {
    gulp.src('./scss/style.s*ss')
      .pipe(sourcemaps.init())
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(autoprefixer({
        grid: true,
        browsers: ['> 1%', 'iOS 7']
      }))
      .pipe(rename({
        extname: ".min.css"
      }))
      .pipe(sass({
        outputStyle: 'compressed'
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./scss/ui-dist/'))
  }).on('change', function (e) {
    const file = e.split("/").pop();
    notify(`UPDATED - ${file} @ ${timestamp('HH:mm:ss')}`).write('');
  });;
});