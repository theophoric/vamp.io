module.exports = function(grunt) {
    grunt.initConfig({        
        clean: ["dist/css","public/css/*","dist/fonts/*"],
        less: {
            production: {
                options: {
                    paths: ["static/less"]
                },
                files: [
                    {"static/css/ui.css": "static/less/app.less"},
                    {"static/css/flat-ui.css": "static/vendor/theme/flat-ui/less/flat-ui.less"}
                ]
            }
        },
        copy: {
          main: {
            src: 'static/fonts/*',
            dest: 'dist/fonts',
          },
        },
        watch: {
            styles: {
                files: ['static/less/*.less'],
                tasks: ['clean','less','cssmin','copy'],
                options: {
                    nospawn: true
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'static/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'static/css',
                    ext: '.min.css'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['watch']);
};

