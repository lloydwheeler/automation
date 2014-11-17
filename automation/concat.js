module.exports = function(grunt) {

	grunt.config('concat', {
		dist: {
			src: ['public/js/**/*.js'],
			dest: 'public/js/app.js'
		}
	});

	// Return our task
	return {
		build: ['concat']
	}
}
