const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => gulp.src('./style.scss')
    .pipe(sass({
        /* Default: nested | Values: nested, expanded, compact, compressed */
        outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('.'))
);

gulp.task('watch', () => gulp.watch('./sass/**/*.scss', ['sass']));

gulp.task('default', ['sass']);
