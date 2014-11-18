var fs = require('fs'),
	path = require('path');


module.exports = function(grunt) {

	grunt.config('clean.scripts', [
		'.tmp/js'
	]);

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

	grunt.config('requirejs', {
		compile: {
			options: {
				baseUrl: '.tmp/js',
				mainConfigFile: 'assets/js/config.js',

				out: 'assets/js/app.js',
				optimize: 'none',
				generateSourceMaps: false
			}
		}
	});

	grunt.registerTask('generateIncludes', 'Handles requirejs includes.', function () {
		var files = walk('.tmp/js/component', '.tmp/js/component');
		var includes = [];

		files.forEach(function (file) {
			if (path.extname(file) !== '.js')
				return;

			var module = path.dirname(file) + '/component/' + path.basename(file, '.js');

			includes.push(module);
		});

		grunt.config('requirejs.compile.options.include', includes);
	});

	// Concat our JS files
	// grunt.config('concat.scripts', {
	// 	src: ['.tmp/js/**/*.js'],
	// 	dest: 'assets/js/app.js'
	// });

	// Watch coffeescript files
	grunt.config('watch.coffee', {
		files: ['assets/coffee/**/*.coffee'],
		tasks: ['clean:scripts', 'coffee:compile', 'generateIncludes', 'requirejs:compile'],
		options: {
			livereload: true
		}
	});

	// Return our task
	return {
		compile: ['clean:scripts', 'coffee:compile', 'generateIncludes', 'requirejs:compile']
	}
}


function walk(basedir, dir) {
	var results = [];
	var list = fs.readdirSync(dir);

	list.forEach(function(file) {
		file = dir + '/' + file;
		var stat = fs.statSync(file);

		if (stat && stat.isDirectory()) 
			results = results.concat(walk(basedir, file));
		else 
			results.push(path.relative(basedir, file));
	});

	return results;
}
