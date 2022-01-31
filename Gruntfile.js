const sharp = require('sharp')
const path = require('path')
const fs = require('fs')
const globalConfig = require('./global.config.json')

module.exports = function (grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt)

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
					'src/assets/css/global.css': 'src/assets/scss/bootstrap.scss'
				}
			}
		},
		//Watch Task
		watch: {
			options: {
				livereload: true
			},
			scss_to_css: {
				files: ['src/assets/scss/**/*.scss'],
				tasks: ['dart-sass:dev']
			},
			handle_images: {
				files: ['src/assets/images/raw/*'],
				tasks: ['handle_images']
			}
		}
	});

	grunt.registerTask('handle_images', function () {
		var done = this.async()

		// Where are our image files located?
		const imageDirectory = path.join(__dirname, './src/assets/images/raw')

		// Where are we saving the new images?
		const distImageDirectory = path.join(__dirname, './src/assets/images')

		// What size should we crop to?
		const maxWidths = globalConfig.imgMaxWidths.value;

		fs.readdirSync(imageDirectory).forEach(image => {

			const loadedImage = sharp(path.join(imageDirectory, image)) // This inputs the file into sharp

			// Copy image to the production folder
			loadedImage
				.toFile(
					path.join(distImageDirectory, image) // Replace file extensions with .webp (assumes .jpg, .jpeg or .png)
				)

			// Create a webp version
			loadedImage
				.toFile(
					path.join(distImageDirectory, image.replace(/\.(jpe?g|png)$/, '.webp')) // Replace file extensions with .webp (assumes .jpg, .jpeg or .png)
				)

			// Resize and create variants
			loadedImage.metadata().then((imageData) => {
				maxWidths.forEach((maxWidth) => {
					if (imageData.width > maxWidth) {
						// Build resized jp(e)g/png
						loadedImage
							.resize(maxWidth, null, { fit: 'cover' })
							.toFile(
								path.join(distImageDirectory, image.replace(/\.(jpe?g|png)$/, `-w${maxWidth}$&`)) // Replace file extensions with .jpg (assumes .jpg, .jpeg or .png)
							)

						// Build resized webp
						loadedImage
							.resize(maxWidth, null, { fit: 'cover' })
							.toFile(
								path.join(distImageDirectory, image.replace(/\.(jpe?g|png)$/, `-w${maxWidth}.webp`)) // Replace file extensions with .webp (assumes .jpg, .jpeg or .png)
							)
					}
				})
			})

		})

	})

	grunt.registerTask('default', ['watch'])

}
