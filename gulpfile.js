var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");

gulp.task("sprite", function () {
  return gulp.src("img/order-form/icon-*.svg")
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("img/order-form/"))
});


gulp.task('sass', function(done) {
    gulp.src("sass/*.scss")
        .pipe(sass()).on( 'error', function( error )
        {
          console.log( error );
        } )
      
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());


    done();
});


gulp.task('serve', function(done) {

    browserSync.init({
        server: ""
    });

    gulp.watch("sass/src/*.scss", gulp.series('sass'));
    gulp.watch("sass/src/blocks/*.scss", gulp.series('sass'));
    gulp.watch("*.html").on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('default', gulp.series('sass', 'serve'));