module.exports = function(grunt) {

	// Compile our Sass files
	grunt.config('sass', {
		compile: {
			expand: true,
			cwd: 'public/scss',
			src: ['**/*.scss'],
			dest: 'public/css',
			ext: '.css'
		}
	})

	// Watch our Sass files
	grunt.config('watch.styles', {
		files: ['public/scss/**/*.scss'],
		tasks: ['sass:compile'],
		options: {
			livereload: true
		}
	});

	// Return our task
	return {
		compile: ['sass:compile']
	}
}
