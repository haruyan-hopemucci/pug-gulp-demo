var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function () {
  return gulp
    .src(['pug/**/*.pug', '!pug/**/_*.pug'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});