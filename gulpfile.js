const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require('del');
const tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("clean", function () {
    return del('dist/**', {force:true});
});