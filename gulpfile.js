const { src, dest, task, watch, series } = require("gulp");
const sass = require('gulp-sass');
const concat = require('gulp-concat');

sass.compiler = require('node-sass');

const styles = [
    "node_modules/normalize.css/normalize.css",
    "css/main.scss"
];

task('sass', () => {
    return src(styles)
    .pipe(concat("main.scss"))
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('css/'));
  });

watch('css/**/*.scss', series("sass"));

task("default", series("sass"));