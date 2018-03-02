var gulp = require('gulp');
var browsersync = require('browser-sync').create();

//browser sync task
gulp.task('browsersync', function(){
    browsersync.init({
	server: {
	    baseDir: "./"
	}
    });
});

gulp.task('reload', function(){
    browsersync.reload();
});






gulp.task('default', ['browsersync'], function(){

    gulp.watch("*.html", ['reload']);
    gulp.watch("css/*.css", ['reload']);
});
