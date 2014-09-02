var $        = require('gulp-load-plugins')(),
    pkg      = require('./package.json'),
    bsync    = require('browser-sync'),
    tsync    = require('run-sequence'),
    bem      = require('bem').api,
    dirs     = pkg._directories,
    gulp     = require('gulp'),
    path     = require('path'),
    join     = path.join,

    PLATFORM = 'desktop',      // folders with bundles
    NAME     = 'application',  // assets filename for minified css and js

    PATH     = join(PLATFORM + '.bundles', dirs.assets.folder),
    CSS      = join(PATH, '_' + dirs.assets.folder + '.css'),
    JS       = join(PATH, '_' + dirs.assets.folder + '.js'),
    BUNDLES  = ['index'].map(function (bundle) {return join(PLATFORM + '.bundles', bundle, bundle + '.html');});

gulp.task('styles', function() {
    return gulp.src(CSS)
        //.pipe($.csso())
        .pipe($.rename(NAME + '.min.css'))
        .pipe(gulp.dest(join(dirs.public, dirs.styles)));
});

gulp.task('scripts', function() {
    return gulp.src(JS)
        .pipe($.rename(NAME + '.min.js'))
        .pipe(gulp.dest(join(dirs.public, dirs.scripts)));
});

gulp.task('bundles', function(){
    return gulp.src(BUNDLES)
        .pipe(gulp.dest(dirs.public));
});

gulp.task('proto', function(){
    var files = [
        join(dirs.public, '*.html'),
        join(dirs.public, dirs.assets.folder, NAME + '.min.js'),
        join(dirs.public, dirs.assets.folder, NAME + '.min.css')
    ];

    var options = {
        notify: false,
        open: false,
        server: {
            baseDir: dirs.public
        }
    };

    bsync.init(files, options, function (err, inj) {
        if (err) throw Error(err);
    });
});

gulp.task('bem', function(){
    return bem.make({verbosity: 'error'});
});

gulp.task('watch', function() {
    gulp.watch([
            "design/**/**/*.styl",
            "design/**/**/**/*.styl"
        ],  $.shell.task(['gulp bstyles']));

    gulp.watch([
            "{common.blocks,desktop.blocks}/*.js",
            "{common.blocks,desktop.blocks}/**/*.js"
        ],  $.shell.task(['gulp bscripts']));

    gulp.watch([
            "desktop.bundles/**/*.bemjson.js",
            "{common.blocks,desktop.blocks}/*.bemhtml",
            "{common.blocks,desktop.blocks}/**/*.bemhtml"
        ],  $.shell.task(['gulp']));
});

gulp.task('bstyles', function () {
    tsync('bem', 'styles');
});

gulp.task('bscripts', function () {
    tsync('bem', 'scripts');
});

gulp.task('assets', ['styles', 'scripts']);

gulp.task('bassets', function () {
    tsync('bem', 'assets');
});

gulp.task('default', function () {
    tsync('bem', ['bundles', 'assets']);
});

gulp.task('dev', function () {
    tsync('default', ['watch', 'proto']);
});
