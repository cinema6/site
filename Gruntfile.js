module.exports = function(grunt) {
    'use strict';

    Object.keys(grunt.file.readJSON('./package.json').devDependencies)
        .filter(function(dep) {
            return (/^grunt-/).test(dep);
        })
        .forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        connect: {
            site: {
                options: {
                    port: 9000,
                    hostname: '*',
                    directory: '.',
                    livereload: true,
                    open: true
                }
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    './img/**',
                    './css/**',
                    './js/**',
                    './index.html'
                ]
            }
        }
    });

    grunt.registerTask('server', 'Run a development server.', [
        'connect:site',
        'watch:livereload'
    ]);

    grunt.registerTask('default', ['server']);
};
