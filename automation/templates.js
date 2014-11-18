module.exports = function(grunt) {

	// Cleans the .tmp html folder
	grunt.config('clean.templates', [
		'.tmp/html'
	]);

	// Compile our Jade templates
	grunt.config('jade', {
		compile: {
			options: {
				data: {
					debug: false
				},
				pretty: true
			},
			files: [{
				cwd: './templates/',
				expand: true,
				src: ['*.jade'],
				dest: '.tmp/html',
				ext: '.html'
			}]
		}
	});

	// Watch our jade files
	grunt.config('watch.jade', {
		files: ['templates/**/*.jade'],
		tasks: ['clean:templates', 'jade:compile'],
		options: {
			livereload: true
		}
	});

	// Return our task
	return {
		compile: ['jade:compile']
	}
}
