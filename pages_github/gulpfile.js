let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    uglify = require ('gulp-uglify'),
    concat = require ('gulp-concat'),
    rename = require ('gulp-rename'),
    del = require('del');

//===== Task for Clean

gulp.task('clean', async function(){
  del.sync('dist')
});

//===== Task SCSS to CSS
gulp.task('scss', function(){
  return gulp.src('app/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(autoprefixer({browsers: ['last 4 versions']}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({stream: true}))
});

//===== Task for Normalize
// gulp.task('css-normalize', function(){
//   return gulp.src([
//       'node_modules/node-normalize-scss/_normalize.scss'
//   ])
//       .pipe(gulp.dest('app/scss'))
//       .pipe(browserSync.reload({stream: true}))
// });

//===== Task for HTML sync
gulp.task('html', function(){
  return gulp.src('app/*.html')
      .pipe(browserSync.reload({stream: true}))
});

//===== Task for JS sync
gulp.task('script', function(){
    return gulp.src('app/js/**/*.js')
        .pipe(browserSync.reload({stream: true}))
});

//===== Task for PHP sync
gulp.task('php', function(){
    return gulp.src('app/**/*.php')
        .pipe(browserSync.reload({stream: true}))
});

//===== Task Browser-Sync init
gulp.task('browser-sync', function(){
    browserSync.init({
        server:{
            baseDir: 'app/'
        }
    });
});

//===== Task for Export
gulp.task('export', function(){
    let buildHTML = gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'))
    let buildCSS = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'))
    let buildJS = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
    let buildPHP = gulp.src('app/**/*.php')
        .pipe(gulp.dest('dist'))
    let buildIMG = gulp.src('app/img/*')
        .pipe(gulp.dest('dist/img'))
    let buildUPLOAD = gulp.src('app/upload/*')
        .pipe(gulp.dest('dist/upload'))
});

//===== Task for Watching
gulp.task('watch', function(){
   gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
   gulp.watch('app/**/*.html', gulp.parallel('html'));
   gulp.watch('app/js/**/*.js', gulp.parallel('html'));
   gulp.watch('app/**/*/.php', gulp.parallel('php'));
});

//===== Task for Building Dist
gulp.task('build', gulp.series('clean', 'export'));

//===== Task Default
gulp.task('default', gulp.parallel(/*'css-normalize',*/ 'scss', 'browser-sync', 'watch'));