module.exports = function(grunt) {

	// Compile our Sass files
	grunt.config('jade', {
		compile: {
			options: {
				data: {
					debug: false
				}
			},
			files: [{
				expand: true,
				src: ['*.jade'],
				dest: '.tmp/html',
				ext: '.html'
			}]
		}
	});

	// Watch our jade files
	grunt.config('watch.jade', {
		files: ['*.jade'],
		tasks: ['jade:compile'],
		options: {
			livereload: true
		}
	});

	// Return our task
	return {
		compile: ['jade:compile']
	}
}
