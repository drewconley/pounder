var gulp = require('gulp');
var sass = require('gulp-sass');

//scss
gulp.task('stylesheets', function() {
    gulp.src("style/style.scss")      
      .pipe(sass())
      .pipe(gulp.dest("style/compiled"));  
});

gulp.task('watch', function() {  
  gulp.watch('style/*.scss', ['stylesheets']);  
});

gulp.task('build', ['stylesheets']);

gulp.task('default', ['build', 'watch']);