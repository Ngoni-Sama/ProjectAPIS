var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');

gulp.task('dist', function() {
	gulp.src(['app/app.js','app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dist'], function() {
	gulp.watch('app/**/*.js', ['dist']);
});
