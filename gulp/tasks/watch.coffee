gulp = require 'gulp'
path = require '../path'
runSequence  = require 'run-sequence'


gulp.task 'watch', ->
  runSequence(['jade', 'stylus', 'watchify'] , 'browserSync')

  gulp.watch path.source.root + '**/*.jade', ->
    runSequence 'jade'
  gulp.watch path.source.css + '**/*.styl' , ->
    runSequence 'stylus'
gulp.task 'default', ['watch']