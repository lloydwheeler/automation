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
	});

	// Autoprefixer task
	grunt.config('autoprefixer', {
		single_files: {
			options: {
				browsers: ['last 5 versions', 'ie 8', 'ie 9']
			},
      src: 'public/css/style.css'
    }
	})

	// Watch our Sass files
	grunt.config('watch.styles', {
		files: ['public/scss/**/*.scss'],
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
