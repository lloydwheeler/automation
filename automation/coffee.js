module.exports = function(grunt) {

	// Compile our coffeescript files
	grunt.config('coffee', {
			compile: {
				expand: true,
				cwd: 'public/coffee/',
				src: ['**/*.coffee'],
				dest: 'public/js',
				ext: '.js'
			}
		});

	// Watch coffeescript files
	grunt.config('watch.coffee', {
		files: ['public/coffee/**/*.coffee'],
		tasks: ['coffee:compile'],
		options: {
			livereload: true
		}
	});

	// Return our task
	return {
		compile: ['coffee:compile']
	}
}
