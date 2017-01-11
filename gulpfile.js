var autoprefixer = require('gulp-autoprefixer');
//var babel = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var clean = require('gulp-clean');
var ftp = require('vinyl-ftp');
var gulp = require('gulp');
var minify = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var reactify = require('reactify');
var reload = browserSync.reload;
//var rename = require('gulp-rename');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function() {
    return gulp.src('src/sass/*.sass') // Leer un archivo
        .pipe(plumber()) //Alert errors
        .pipe(sourcemaps.init())
        .pipe(sass())// Compilar SASS
        .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false})) // Autoprfixer
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('temp/css')) // Guardar archivo
        .pipe(reload({ stream: true })); // Enviar cambios al navegador
});

gulp.task('react', function () {
    var bundle = browserify('src/app.js').transform(reactify).bundle().on('error', function (error) {
        console.log(error);
        this.emit('end');
    });

    return bundle.pipe(source('app.js')).pipe(gulp.dest('temp/'));
});

gulp.task('html',function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('temp/'));
});

gulp.task('watch', function() {
    gulp.watch([
        'src/sass/*.sass','src/*.js','src/*.html'
    ],[
      'sass','react','html']);
});

gulp.task('serve', ['sass','react','html'], function() {
    browserSync({
        server: {
            baseDir: ['temp']
        }
    });
    gulp.start('watch');
});

gulp.task('default', ['serve']);

// Build & deploy

gulp.task('sass_prod', function() {
    return gulp.src('src/sass/style.sass') // Leer un archivo
        .pipe(sass())// Compilar SASS
        .pipe(minify()) // Minificando CSS
        .pipe(gulp.dest('build/css')) // Guardar archivo
});

gulp.task('views', function() {
    return gulp.src('src/*.html') //todo el .html de la carpeta
        .pipe(gulp.dest('build'))
});

// Compilar REACT: https://igmoweb.com/2016/11/03/react-browserify-y-babel-en-plugins-de-wordpress-ii-ahora-con-gulp/

gulp.task('deploy', ['sass_prod']);

//TODO
//FTP upload

function ftpConnection() {
    return ftp.create({
        host: 'acamica.com',
        user: 'sergio',
        password: process.env.FTP_PWD,
        parallel: 5,
        log: gutil.log
    })
}

gulp.task('upload', ['build'], function() {
    var ftp = ftpConnection();
    var remoteFolder = '/_demos/acamica/demo-1-2/';
    return gulp.src('dist/**', { base: 'dist', buffer: false})
        .pipe(ftp.newer(remoteFolder))
        .pipe(ftp.dest(remoteFolder));
});
