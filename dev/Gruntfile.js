module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-imgo');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    protocol: 'http',
                    hostname: 'localhost',
                    base: '../web/'
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: ['js/**/*.js', '!js/main.js', 'js/main.js', '!js/vendor/**/*', 'pages/**/*.js'],
                dest: '../web/js/main.js'
            }
        },

        uglify: {
            // jsPagesBuild: {
            //     files: [{
            //         expand: true,
            //         cwd: '',
            //         src: 'pages/**/*.js',
            //         dest: '../build/'
            //     }]
            // },
            // jsVendorBuild: {
            //     expand: true,
            //     cwd: 'js/vendor',
            //     src: '*',
            //     dest: '../build/js/vendor'
            // },
            // jsBuild: {
            //     src: ['js/**/*.js', '!js/main.js', 'js/main.js', '!js/vendor/**/*', 'pages/**/*.js'],
            //     dest: '../build/js/main.js'
            // }
        },

        compass: {
            global: {
                options: {
                    sassDir: 'sass',
                    cssDir: '../web/css'
                }
            },
            /*pages: {
                options: {
                    sassDir: 'pages',
                    cssDir: '../web/pages'
                }
            },*/

            // globalBuild: {
            //     options: {
            //         sassDir: 'sass',
            //         cssDir: '../build/css',
            //         environment: 'production'
            //     }
            // }
            /*,
            pagesBuild: {
                options: {
                    sassDir: 'pages',
                    cssDir: '../build/pages',
                    environment: 'production'
                }
            }*/
        },

        copy: {
            html: {
                expand: true,
                cwd: '',
                src: 'pages/**/*.html',
                dest: '../web/'
            },
            // htmlBuild: {
            //     expand: true,
            //     cwd: '',
            //     src: 'pages/**/*.html',
            //     dest: '../build/'
            // },
            img: {
                expand: true,
                cwd: 'img/',
                src: '*',
                dest: '../web/img/'
            },
            i: {
                expand: true,
                cwd: 'i/',
                src: '*',
                dest: '../web/i/'
            },
            fonts: {
                expand: true,
                cwd: 'fonts/',
                src: '*',
                dest: '../web/fonts/'
            },
            // fontsBuild: {
            //     expand: true,
            //     cwd: 'fonts/',
            //     src: '*',
            //     dest: '../build/fonts/'
            // },
            jsvendor: {
                expand: true,
                cwd: 'js/vendor',
                src: '*',
                dest: '../web/js/vendor'
            },
            json: {
                expand: true,
                cwd: 'json/',
                src: '*',
                dest: '../web/'
            },
            // jsonBuild: {
            //     expand: true,
            //     cwd: 'json/',
            //     src: '*',
            //     dest: '../build/'
            // }
            // jspages: {
            //     expand: true,
            //     cwd: '',
            //     src: 'pages/**/*.js',
            //     dest: '../web/'
            // }
        },

        // imgo: {
        //     iBuild: {
        //         src: 'i/*',
        //         dest: '../build/i/',
        //         options: '-m -b',
        //         skip: require('os').platform() === 'win32'
        //     },
        //     imgBuild: {
        //         src: 'img/*',
        //         dest: '../build/img/',
        //         options: '-m -b',
        //         skip: require('os').platform() === 'win32'
        //     }
        // },

        watch: {
            options: {
                livereload: true
            },

            json: {
                files: ['*.json'],
                tasks: ['copy:json'],
                options: {
                    interrupt: true
                }
            },

            scripts: {
                files: ['js/**/*.js', 'pages/**/*.js'],
                tasks: ['concat:js', 'copy:jsvendor'],
                options: {
                    interrupt: true
                }
            },

            compass: {
                files: ['**/*.scss'],
                tasks: ['compass'],
                options: {
                    interrupt: true
                }
            },

            html: {
                files: ['pages/**/*.html'],
                tasks: ['copy:html'],
                options: {
                    interrupt: true
                }
            },

            img: {
                files: ['img/*'],
                tasks: ['copy:img'],
                options: {
                    interrupt: true
                }
            },

            i: {
                files: ['i/*'],
                tasks: ['copy:i'],
                options: {
                    interrupt: true
                }
            },

            fonts: {
                files: ['fonts/*'],
                tasks: ['copy:fonts'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);
    // grunt.registerTask('build', [
    //     'compass:globalBuild', 
    //     'uglify:jsBuild', 
    //     'uglify:jsVendorBuild', 
    //     'copy:htmlBuild', 
    //     'copy:fontsBuild', 
    //     'copy:jsonBuild',
    //     'imgo'
    // ]);

};
