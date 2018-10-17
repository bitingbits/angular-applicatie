const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp.src([
    './dist/custom-element/runtime.js',
    './dist/custom-element/polyfills.js',
    './dist/custom-element/scripts.js',
    './dist/custom-element/main.js',
  ])
    .pipe(concat('app-greeter.js', { newLine: ';' }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['concat']);
