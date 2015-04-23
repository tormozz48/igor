var path = require('path'),
    gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    plumber    = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    htmlreplace = require('gulp-html-replace'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify');

function getBuildFolder() {
    return path.join(process.cwd(), './build');
}

function onError(error) {
    console.error(error);
}

gulp.task('cleanJs', function () {
    return gulp.src('build/*.js')
        .pipe(clean({ read: false }))
        .pipe(notify({ message: 'clean js task complete' }));
});

gulp.task('cleanCss', function () {
    return gulp.src('build/*.css')
        .pipe(clean({ read: false }))
        .pipe(notify({ message: 'clean css task complete' }));
});

gulp.task('clean', function () {
    return gulp.src('build/*')
        .pipe(clean({ read: false }));
});

gulp.task('js', ['cleanJs'], function () {
    var jsFiles = [
        './libs/jquery/dist/jquery.js',
        './libs/bootstrap/dist/js/bootstrap.js',
        './libs/bootstrap/js/tooltip.js',
        './libs/bootstrap/js/popover.js',
        './libs/angular/angular.js',
        './libs/angular-scrollto/angular-scrollto.js',
        './js/app.js'
    ];

    gulp.src(jsFiles)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(concat('index.min.js'))
        .pipe(sourcemaps.write())
        //.pipe(uglify())
        .pipe(gulp.dest(getBuildFolder() + '/js'))
        .pipe(notify({ message: 'js task complete' }));
});

gulp.task('data', function () {
    gulp
        .src('./data/*.json')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(gulp.dest(getBuildFolder() + '/data'))
        .pipe(notify({ message: 'data task complete' }));
});

gulp.task('partials', function () {
    gulp
        .src('./html/*.htm')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(gulp.dest(getBuildFolder() + '/html'))
        .pipe(notify({ message: 'partials task complete' }));
});

gulp.task('images', function () {
    gulp
        .src('./images/*.{jpg,png}')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(gulp.dest(getBuildFolder() + '/images'))
        .pipe(notify({ message: 'images task complete' }));
});

gulp.task('fonts', function () {
    gulp
        .src('./libs/bootstrap/dist/fonts/*')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(gulp.dest(getBuildFolder() + '/fonts'))
        .pipe(notify({ message: 'fonts task complete' }));
});

gulp.task('css', ['cleanCss'], function () {
    var cssFiles = [
        './libs/bootstrap/dist/css/bootstrap.css',
        './libs/bootstrap/dist/css/bootstrap-theme.css',
        './css/index.css'
    ];

    gulp.src(cssFiles)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(concatCss('index.min.css', { rebaseUrls: false }))
        .pipe(minifyCss())
        .pipe(gulp.dest(getBuildFolder() + '/css'))
        .pipe(notify({ message: 'css task complete' }));
});

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(htmlreplace({
            'css': 'css/index.min.css',
            'js': 'js/index.min.js'
        }))
        .pipe(gulp.dest(getBuildFolder()))
        .pipe(notify({ message: 'html task complete' }));
});

gulp.task('build', ['data', 'images', 'fonts', 'css', 'js', 'partials', 'html']);
