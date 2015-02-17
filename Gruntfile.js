module.exports = function (grunt) {

    // 构建任务配置
    grunt.initConfig({

        //读取package.json的内容，形成个json数据
        pkg: grunt.file.readJSON('package.json'),

        //javascript检查纠错
        jshint: {
            all: ['js/zepto.min.js']
        },

        //压缩js
        uglify: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //美化代码
                beautify: {
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                }
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //相对路径
                        //cwd: 'Tpl/SgsLuck',
                        src: ['Public/Script/sgsalipay/index8.js'],
                        dest: '../../../wamp/www/bianfengalipay/'
                    }
                ]
            }
        },

        //文件合并
        concat: {
            option: {
                separator: ';'
            },
            dist: {
                src: ['dest/js/allChose.js', 'dest/js/header.js', 'dest/js/index.js', 'dest/js/register.js', 'dest/js/table.js'],
                dest: 'dest/lib.min.js'
            }
        },

        //压缩css
        cssmin: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //美化代码
                beautify: {
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                }
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //相对路径
                        //cwd: 'Tpl/SgsLuck',
                        src: ['css/index.css','css/reset.css'],
                        dest: 'dest'
                    }
                ]
            }
        },

        //图片优化
        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        //相对路径
                        cwd: 'img',
                        src: ['*.{gif,jpg,png}'],
                        dest: 'dest'
                    }
                ]
            }
        }
    });

    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 默认执行的任务
    grunt.registerTask('default', ['jshint', 'uglify', 'concat', 'cssmin', 'imagemin']);

};