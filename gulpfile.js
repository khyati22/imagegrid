var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();
var minifyCSS = require('gulp-minify-css');
var embedlr = require('gulp-embedlr');

var bs = require('browser-sync').create(); // create a browser sync instance.


gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: ["./", "./src"]
        }
    });
});

gulp.task('sass', function() {
    return gulp.src('./src/app/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/'))
        .pipe(bs.reload({ stream: true }));
});



gulp.task('default', ['sass', 'browser-sync'], function() {
    gulp.watch("./src/app/**/*.scss", ['sass']);
    gulp.watch("./src/**/*.html").on('change', bs.reload);
    gulp.watch("./src/**/*.js").on('change', bs.reload);
});

// gulp.task('scripts', function() {
//     gulp.src(['app/src/**/*.js'])
//         .pipe(browserify())
//         .pipe(concat('dest.js'))
//         .pipe(gulp.dest('dist/build'))
//         .pipe(refresh(server))
// })

// gulp.task('lr-server', function() {
//     server.listen(35729, function(err) {
//         if (err) return console.log(err);
//     });
// })

// gulp.task('html', function() {
//     gulp.src("app/*.html")
//         .pipe(embedlr())
//         .pipe(gulp.dest('dist/'))
//         .pipe(refresh(server));
// })

// gulp.task('default', function() {
//     gulp.run('lr-server', 'scripts', 'sass', 'html', 'browser-sync');

//     gulp.watch('app/src/**', function(event) {
//         gulp.run('scripts');
//     })

//     gulp.watch('app/scss/**', function(event) {
//         gulp.run('sass');
//     })

//     gulp.watch('app/**/*.html', function(event) {
//         gulp.run('html');
//     })
// })