module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : 'app/src/**/*.js',
      options : {
        specs : 'app/spec/**/*.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', ['jasmine']);

  grunt.registerTask('default', ['test']);

};