module.exports = function(grunt) {

	// Cleans the .tmp html folder
	grunt.config('clean.build', [
		'.tmp/html',
		'.tmp/js'
	]);

	// Export our CSS
	grunt.config('copy.exportCSS', {
		files: [{
			expand: true,
			cwd: 'assets/css/',
			src: '**/*.css',
			dest: 'export/assets/css'
		}]
	});

	// Export our JS
	grunt.config('copy.exportJS', {
		files: [{
			expand: true,
			cwd: 'assets/js/',
			src: ['**/*.js', '!config.js'],
			dest: 'export/assets/js'
		}]
	});

	// Export our images
	grunt.config('copy.exportIMG', {
		files: [{
			expand: true,
			cwd: 'assets/img/',
			src: '**/*',
			dest: 'export/assets/img'
		}]
	});

	// Export our templates
	grunt.config('copy.exportTemplates', {
		files: [{
			expand: true,
			cwd: '.tmp/html',
			src: '*.html',
			dest: 'export/'
		}]
	})

	grunt.registerTask('export', ['copy:exportCSS', 'copy:exportJS', 'copy:exportIMG', 'copy:exportTemplates']);

	// Return our task
	return {
		build: ['export']
	}
}
