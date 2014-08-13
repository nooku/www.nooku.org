module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require( 'load-grunt-tasks' )( grunt );

    // grunt config
    grunt.initConfig
    ({
        // Compile sass files
        sass: {
            dest: {
                options: {
                    require: ['susy', 'illusion'],
                    sourcemap: true
                },
                files: [{
                    'css/style.css': '_scss/style.scss'
                }]
            }
        },

        // Shell commands
        shell: {
            jekyllBuild: {
                command: 'bundle exec jekyll build'
            },
            jekyllServe: {
                command: 'bundle exec jekyll serve --watch'
            }
        },

        // Watch files
        watch: {
            css: {
                files: [
                    // Including
                    '_scss/*.scss', '_scss/**/*.scss'
                ],
                tasks: ['sass'], // Compile
                options: {
                    interrupt: false,
                    atBegin: true,
                    livereload: true
                }
            }
        },

        // Concurrently tasking
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            dev: {
                tasks: ["shell:jekyllServe", "watch"]
            }
        }
    });

    // Register the default tasks.
    grunt.registerTask('default', ['concurrent:dev']);
};