var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');

function minifyCSS(){
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
}

function minifyJS(){
    return gulp.src(['scripts/*.js', 'scripts/*.mjs'])
        .pipe(minify())
        .pipe(gulp.dest('dist'))    
}

exports.minifyCSS = minifyCSS
exports.minifyJS = minifyJS
exports.default = gulp.parallel(minifyCSS, minifyJS)