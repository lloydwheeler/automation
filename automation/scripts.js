module.exports = function(grunt) {

	// Compile our coffeescript files
	grunt.config('coffee', {
		compile: {
			expand: true,
			cwd: 'assets/coffee/',
			src: ['**/*.coffee'],
			dest: '.tmp/js',
			ext: '.js'
		}
	});

	// Concat our JS files
	grunt.config('concat.scripts', {
		src: ['.tmp/js/**/*.js'],
		dest: 'assets/js/app.js'
	});

	// Watch coffeescript files
	grunt.config('watch.coffee', {
		files: ['assets/coffee/**/*.coffee'],
		tasks: ['coffee:compile', 'concat:scripts'],
		options: {
			livereload: true
		}
	});

	// Return our task
	return {
		compile: ['coffee:compile']
	}
}
