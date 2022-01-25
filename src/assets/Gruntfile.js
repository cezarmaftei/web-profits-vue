module.exports = function (grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//SASS to CSS
		'dart-sass': {
			'dev': {
				options: {
					implementation: 'sass',
					sourceMap: true,
					outputStyle: 'expanded'
				},
				files: {
					'css/global.css': 'scss/bootstrap.scss'
				}
			}
		},
		//Watch Task
		watch: {
			options: {
				livereload: true
			},
			scss_to_css: {
				files: ['scss/**/*.scss'],
				tasks: ['dart-sass:dev']
			}
		},
	});


	grunt.registerTask('default', ['watch']);

}
