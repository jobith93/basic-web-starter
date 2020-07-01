const { src, dest, parallel, series, watch } = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const nunjucksRender = require('gulp-nunjucks-render');

function html (){
    return src('src/*.html')
        .pipe(dest('dist'));
}

function nunjucks (){
    return src([
            'src/pages/**/*.+(html|nunjucks|njk)'
        ])
        // Renders template with nunjucks
        .pipe(nunjucksRender({
            path: ['src/templates']
        }))
        .pipe(dest('dist'));
}

function images (){
    return src(['src/images/*', 'src/images/**'])
        .pipe(imagemin())
        .pipe(dest('dist/images'));
};

function fonts (){
    return src('src/fonts/**/*')
        .pipe(dest('dist/fonts'));
};

function js (){
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(dest('dist/js'));
};

function js_vendor(){
    return src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/slick-carousel/slick/slick.js',
        './node_modules/slick-carousel/slick/slick.min.js',
        './node_modules/bulma-modal-fx/dist/js/modal-fx.min.js'
    ])
    .pipe(dest('dist/js/vendor'));
};

function json (){
    return src('src/data/*.json')
        .pipe(dest('dist/data'));
};

function scss (){
    return src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        // .pipe(minifyCSS())
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
};

function serve () {
    watch('src/images/**', images);
    watch('src/images/*', images);
    watch('src/fonts/*', fonts);
    watch('src/scss/*.scss', scss).on('change', browserSync.reload);
    watch('src/scss/**/*.scss', scss).on('change', browserSync.reload);
    watch('src/js/*.js', js);
    watch('src/data/*.json', json);
    // watch("src/*.html", html).on('change', browserSync.reload);
    watch("src/templates/**/*.+(html|nunjucks|njk)", nunjucks).on('change', browserSync.reload);
    watch("src/pages/**/*.+(html|nunjucks|njk)", nunjucks).on('change', browserSync.reload);

    browserSync.init({
        server: "./dist"  
    });
};

const build = parallel(nunjucks, images, fonts, scss, js_vendor, js, json);

exports.build = build;
exports.default = series(build, serve);