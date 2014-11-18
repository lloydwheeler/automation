module.exports = function(grunt) {

	// Compile our Sass files
	grunt.config('sass', {
		compile: {
			expand: true,
			cwd: 'assets/scss',
			src: ['**/*.scss'],
			dest: 'assets/css',
			ext: '.css'
		}
	});

	// Autoprefixer task
	grunt.config('autoprefixer', {
		single_files: {
			options: {
				browsers: ['last 5 versions', 'ie 8', 'ie 9']
			},
      src: 'assets/css/style.css'
    }
	})

	// Watch our Sass files
	grunt.config('watch.sass', {
		files: ['assets/scss/**/*.scss'],
		tasks: ['sass:compile', 'autoprefixer'],
		options: {
			livereload: true
		}
	});

	// Return our task
	return {
		compile: ['sass:compile']
	}
}
