gulp = require 'gulp'
path = require '../path'
stylus = require 'gulp-stylus'
plumber = require 'gulp-plumber'
notify  = require 'gulp-notify'

gulp.task 'stylus', ->
  gulp
    .src [
        path.source.css + '**/*.styl'
    ]
    .pipe plumber
      errotHandler: notify.onError "Error: <%= error.message %>"
    .pipe stylus()
    .pipe gulp.dest path.build.css