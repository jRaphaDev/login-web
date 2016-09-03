module.exports = function (grunt) {

    grunt.initConfig({

        uglify : {
            options : {
                mangle : false
            },
            my_target : {
                files : {
                    'app/js/main.js' : ['app/_js/scripts.js']
                }
            }
        },
        sass : { 
            dist : {
                options : { style : 'compressed' },
                files : {
                    'assets/css/style.css' : 'assets/_sass/style.sass'
                }
            }     
        },
        watch : {
            dist : {
                files : [
                    'app/_js/**/*',
                    'app/_sass/**/*'
                ],
                tasks : [ 'uglify', 'sass']
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    grunt.registerTask( 'default', [ 'uglify', 'sass']);
    grunt.registerTask( 'w', [ 'watch' ]);

    
};