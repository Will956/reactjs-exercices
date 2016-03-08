var gulp = require('gulp'),
  connect = require('gulp-connect'),
  react = require('gulp-react');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('react', function () {
	return gulp.src('./app/app.jsx')
		.pipe(react())
		.pipe(gulp.dest('./app/dist'));
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/app.jsx'], ['react']);
});
 
gulp.task('default', ['connect', 'watch']);