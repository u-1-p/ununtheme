gulp = require 'gulp'
path = require '../path'
browserSync = require 'browser-sync'


# browserSync
gulp.task 'browserSync', ->
  browserSync.init
    open: false
    notify: true
    server:
      baseDir: path.build.root