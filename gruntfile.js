module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require( 'load-grunt-tasks' )( grunt );

    // grunt config
    grunt.initConfig
    ({

        // Iconfont
        webfont: {
            icons: {
                src: 'images/icons/*.svg',
                dest: 'fonts/icons',
                destCss: '_scss/utilities',
                options: {
                    font: 'nooku-font-icon',
                    hashes: false,
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts/icons/',
                    template: 'fonts/icons/template.css'
                }
            }
        },

        // Compile sass files
        sass: {
            dest: {
                options: {
                    require: ['susy', 'illusion'],
                    sourcemap: true,
                    style: 'compressed'
                },
                files: [{
                    'css/style.css': '_scss/style.scss'
                }]
            }
        },

        // Uglify
        uglify: {
            options: {
                soureMap: true
            },
            build: {
                files: {
                    'js/scripts.js': ['_scripts/apollo.js', '_scripts/*.js']
                }
            }
        },

        // Shell commands
        shell: {
            jekyllBuild: {
                command: 'bundle exec jekyll build'
            },
            jekyllServe: {
                command: 'bundle exec jekyll serve'
            }
        },

        // Watch files
        watch: {
            fontcustom: {
                files: [
                    // Including
                    'images/icons/*.svg'
                ],
                tasks: ['webfont'], // Fontcustom
                options: {
                    interrupt: false,
                    atBegin: false
                }
            },
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
            },
            uglify: {
                files: [
                    // Including
                    '_scripts/*.js'
                ],
                tasks: ['uglify'], // Compile
                options: {
                    interrupt: false,
                    atBegin: true
                }
            },
            jekyll: {
                files: [
                    // Including
                    '_data/*.*',
                    '_events/*.*',
                    '_includes/*.*',
                    '_layouts/*.*',
                    '_posts/*.*',
                    'assets/*.*',
                    'blog/*.*',
                    'css/*.*',
                    'events/*.*',
                    'features/*.*',
                    'fonts/*.*',
                    'get-started/*.*',
                    'images/*.*',
                    'js/*.*',
                    'manifesto/*.*',
                    'consulting/*.*',
                    'platform/*.*',
                    'services/*.*',
                    'index.html'
                ],
                tasks: ['shell:jekyllBuild'],
                options: {
                    interrupt: true,
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