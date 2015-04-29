module.exports = function(grunt) {

    // load time-grunt and all grunt plugins found in the package.json
    require('jit-grunt')(grunt);

    // grunt config
    grunt.initConfig
    ({

        // Copy bower files
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['bower_components/stack/logos/*.*'],
                        dest: 'images/stack/vendor',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['bower_components/stack/template/*.*'],
                        dest: '_includes/vendor',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['bower_components/stack/json/*.*'],
                        dest: '_data/vendor',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['bower_components/jekyll-pagination/template/*.html'],
                        dest: '_includes/vendor',
                        flatten: true
                    }
                ]
            }
        },


        // Iconfont
        webfont: {
            icons: {
                src: '_icons/icons/*.svg',
                dest: 'fonts/icons',
                destCss: '_scss/utilities',
                options: {
                    font: 'nooku-font-icon',
                    hashes: false,
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts/icons/',
                    template: '_icons/template.css',
                    htmlDemo: false
                }
            }
        },


        // Compile sass files
        sass: {
            dest: {
                files: [{
                    'css/style.css': '_scss/style.scss',
                    'css/header.css': '_scss/header.scss'
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
                    'js/scripts.js': [
                        '_scripts/apollo.js',
                        '_scripts/*.js'
                    ]
                }
            }
        },

        // Browser Sync
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '_site/*.*',
                        // Exclude for refresh so browser only refreshes once
                        '!_site/blog.rss',
                        '!_site/CHANGELOG.md',
                        '!_site/sitemap.xml'
                    ]
                },
                options: {
                    port: 6652, // NOKU (Nooku) on phone keypad
                    open: true, // Opens site in your default browser, no need to remember the port
                    notify: false,
                    watchTask: true,
                    injectChanges: false,
                    server: {
                        baseDir: '_site'
                    }
                }
            }
        },

        // Shell commands
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            bower: {
                command: 'bower update && bower install' // Run update before install to avoid version collisions
            }
        },

        // Watch files
        watch: {
            fontcustom: {
                files: [
                    // Including
                    '_icons/icons/*.svg'
                ],
                tasks: ['webfont', 'sass'], // Fontcustom
                options: {
                    interrupt: true,
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
                    interrupt: true,
                    atBegin: true
                }
            },
            uglify: {
                files: [
                    // Including
                    '_scripts/*.js'
                ],
                tasks: ['uglify'], // Compile
                options: {
                    interrupt: true,
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
                    'community/*.*',
                    'contact/*.*',
                    'css/*.*',
                    'demo/*.*',
                    'docs/*.*',
                    'events/*.*',
                    'features/*.*',
                    'fonts/*.*',
                    'get-started/*.*',
                    'images/*.*',
                    'images/**/*.*',
                    'js/*.*',
                    'manifesto/*.*',
                    'nj14/*.*',
                    'phpfest14/*.*',
                    'consulting/*.*',
                    'platform/*.*',
                    'services/*.*',
                    'stack/*.*',
                    'index.html',
                    '404.html',
                    'config.yml'
                ],
                tasks: ['shell:jekyllBuild'],
                options: {
                    interrupt: false,
                    atBegin: true
                }
            }
        }
    });

    // The dev task will be used during development
    grunt.registerTask('default', ['shell:bower', 'copy', 'browserSync', 'watch']);
};