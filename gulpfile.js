(function () {
    'use strict';

    var JS_FILES = [ 'app/*.module.js', 'app/**/*.module.js', 'app/*.js', 'app/**/*.js', '!app/libs/*.js' ];
    var JS_VENDORS = [
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min.js',
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.min.js',
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-aria.min.js',
        'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
    ];
    var STYLES_FILE = 'app/styles/*.scss';
    var STYLES_VENDORS = [
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
    ];

    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');
    var cssnano = require('gulp-cssnano');
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');
    var concat = require('gulp-concat');
    var notify = require('gulp-notify');
    var templateCache = require('gulp-angular-templatecache');
    var connect = require('gulp-connect');
    var download = require('gulp-download');

    gulp.task('styles', function () {
        return gulp.src(STYLES_FILE)
            .pipe(sass())
            .pipe(autoprefixer('last 2 version'))
            .pipe(gulp.dest('dist/styles'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(cssnano())
            .pipe(gulp.dest('dist/styles'))
            .pipe(notify({ message: 'Styles task complete' }));
    });

    gulp.task('scripts', function () {
        return gulp.src(JS_FILES)
            .pipe(concat('app.js'))
            .pipe(gulp.dest('dist/scripts'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts'))
            .pipe(notify({ message: 'Scripts task complete' }));
    });

    gulp.task('watch', function () {
        var livereload = require('gulp-livereload');

        gulp.watch(STYLES_FILE, [ 'styles' ]);
        gulp.watch([ 'app/**/*.js', 'app/*.js', 'gulpfile.js' ], [ 'scripts' ]);
        gulp.watch('app/*.html', [ 'copy' ]);
        gulp.watch('app/**/*.html', [ 'templates' ]);
        livereload.listen();
        gulp.watch([ 'dist/**' ]).on('change', livereload.changed);
    });

    gulp.task('lint', function () {
        var jshint = require('gulp-jshint');

        gulp.src(JS_FILES)
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));
    });

    gulp.task('templates', function () {
        return gulp.src('app/**/*.html')
            .pipe(templateCache('templates.js', { module: 'templates', standalone: true }))
            .pipe(gulp.dest('dist/scripts'));
    });

    gulp.task('connect', function () {
        connect.server({
            port: 8911,
            root: 'dist/'
        });
    });

    gulp.task('download-scripts', function () {
        return download(JS_VENDORS)
            .pipe(gulp.dest('app/libs'))
            .pipe(concat('libs.min.js'))
            .pipe(gulp.dest('dist/scripts'));
    });

    gulp.task('download-styles', function () {
        return download(STYLES_VENDORS)
            .pipe(gulp.dest('app/styles/vendors'))
            .pipe(concat('vendor-styles.min.css'))
            .pipe(gulp.dest('dist/styles'));
    });

    gulp.task('download', function () {
        gulp.start([ 'download-scripts', 'download-styles' ]);
    });

    gulp.task('copyHtml', function () {
        return gulp.src('app/*.html')
            .pipe(gulp.dest('dist/'));
    });

    gulp.task('copyAssets', function () {
        return gulp.src('app/assets/*')
            .pipe(gulp.dest('dist/assets/'));
    });

    gulp.task('copy', function () {
        gulp.start('copyHtml','copyAssets');
    });

    gulp.task('dev', function () {
        gulp.start('copy', 'styles', 'templates', 'scripts', 'watch', 'connect');
    });

    gulp.task('default', [ 'dev' ]);
})();