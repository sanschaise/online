var
	gulp = require( 'gulp' ),
	browserSync = require( 'browser-sync' ),
	argv = require('yargs').argv,
	git = require('gulp-git'),
	runSequence = require('run-sequence'),
	$ = require( 'gulp-load-plugins' )( {lazy: true} );



// git push
gulp.task('init', function() {
  console.log(argv.m);
});

gulp.task('add', function() {
  console.log('adding...');
  return gulp.src('.')
    .pipe(git.add({args: '-A'}));
});

gulp.task('commit', function() {
  console.log('commiting');
  if (argv.m) {
    return gulp.src('.')
      .pipe(git.commit(argv.m));
  }
});

gulp.task('push', function(){
  console.log('pushing...');
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('git', function() {
  runSequence(
	'add', 'commit', 'push');
});