gulp = require 'gulp'
path = require '../path'
mainBowerFiles = require 'main-bower-files'
filter = require 'gulp-filter'


gulp.task 'bower', ->
  jsFilter = filter('**/*.js')
  cssFilter = filter('**/*.css')

  gulp
    .src mainBowerFiles()
    .pipe jsFilter
    .pipe gulp.dest path.build.jslibs