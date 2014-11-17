module.exports = function(grunt) {

	// Compile our coffeescript files
	grunt.config('coffee', {
		compile: {
			expand: true,
			cwd: 'public/coffee/',
			src: ['**/*.coffee'],
			dest: '.tmp/js',
			ext: '.js'
		}
	});

	// Concat our JS files
	grunt.config('concat', {
		dist: {
			src: ['.tmp/js/**/*.js'],
			dest: 'public/js/app.js'
		}
	});

	// Watch coffeescript files
	grunt.config('watch.coffee', {
		files: ['public/coffee/**/*.coffee'],
		tasks: ['coffee:compile', 'concat'],
		options: {
			livereload: true
		}
	});

	// Return our task
	return {
		compile: ['coffee:compile']
	}
}
