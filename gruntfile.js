var path = require('path');

module.exports = function(grunt) {

	// Load all grunt tasks, replaces need for individual grunt.loadNpmTasks('taskname')
	require('load-grunt-tasks')(grunt);

	// Run our local webserver
	grunt.initConfig({
		develop: {
			server: {
				file: 'app.js',
				env: { NODE_ENV: 'development'}
			}
		}
	});

	// Include automation files
	var files = grunt.file.glob.sync('**/*.{js,coffee}', {cwd: 'automation'});
	var tasks = {
		compile: [],
		build: []
	}

	files.forEach(function(filename) {
		var registerFn = require('./' + path.join('automation', filename));
		var newTasks = registerFn(grunt);

		if (newTasks.compile)
			tasks.compile = tasks.compile.concat(newTasks.compile)

		if (newTasks.build)
			tasks.build = tasks.build.concat(newTasks.build)
	});

	// Register compile tasks
	grunt.registerTask('compileTasks', tasks.compile);

	// Register build tasks
	grunt.registerTask('buildTasks', tasks.build);

	// Register default tasks
	grunt.registerTask('default', ['compileTasks', 'develop', 'watch']);
};
