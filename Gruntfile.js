module.exports = function(grunt) {

  // Prject configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    run: {
      jest: {
        options: {
          cwd: './frontend'
        },
        commands: {
          exec: 'npm run test-ci',
        }
      },
      node-install: {
        options: {
          cwd: './frontend'
        },
        commands: {
          exec: 'npm install',
        }
      },
      php-install: {
        options: {
          cwd: './backend'
        },
        commands: {
          exec: 'composer install',
        }
      }
    },
    phpunit: {
    	classes: {
    		dir: 'backend/tests'
    	},
    	options: {
    		bin: 'backend/vendor/bin/phpunit',
    		colors: true
    	}
    }
  });

  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-phpunit');

  // Default task(s).
  grunt.registerTask('default', ['run:install', 'run:jest', 'phpunit']);
};
