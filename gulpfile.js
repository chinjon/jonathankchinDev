var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

// FILE PATHS
var DIST_PATH = 'public/dist';
var CSS_PATH = 'public/assets/css/**/*.css';

gulp.task('styles', function(){
    console.log('styles task running');

    return gulp.src(CSS_PATH)
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat('styles.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(DIST_PATH))
});