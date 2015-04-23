var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('js', function () {
    console.log('- start build js task');

    gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});


gulp.task('build', ['js'], function () {
    console.log('build finished');
});
