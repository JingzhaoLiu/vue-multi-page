#如何建立多页面

vue.config.js 配置中的pages属性,例如需要增加member页面,可以这样配置

>pages: {
>        member: {
>          entry: 'src/member/main.js', //入口JS文件
>          template: template_dir + 'index/index.html', //模板文件
>          filename: 'index.html', //输出文件名
>          title: 'Index Page', //网页标题
>          chunks: ['chunk-vendors', 'chunk-common', 'index']  //页面包含的块
>        },
>      }

然后在src目录下新建对应的模块文件,在public目录下增加对应的模板文件
