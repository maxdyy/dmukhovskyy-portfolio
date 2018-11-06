const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const watch = require("gulp-watch");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const notify = require("gulp-notify");
const timestamp = require("time-stamp");

gulp.task("build", function() {
  return gulp
    .src("./scss/style.s*ss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["iOS 7", "> 1%"],
        grid: true
      })
    )
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(gulp.dest("./static/style/"))
    .pipe(
      notify({
        message: `SUCCESS - SASS => CSS min compiled @ ${timestamp(
          "HH:mm:ss"
        )}`,
        onLast: true
      })
    );
});

gulp.task("watch", function() {
  notify(`SUCCESS - SASS WATCH STARTED @ ${timestamp("HH:mm:ss")}`).write("");
  return watch(
    "./scss/components/*.s*ss",
    {
      ignoreInitial: false
    },
    function() {
      gulp
        .src("./scss/style.s*ss")
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(autoprefixer({ browsers: ["iOS 7", "> 1%"], grid: true }))
        .pipe(rename({ extname: ".min.css" }))
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./static/style/"));
    }
  ).on("change", function(e) {
    const file = e.split("/").pop();
    notify(`UPDATED - ${file} @ ${timestamp("HH:mm:ss")}`).write("");
  });
});
