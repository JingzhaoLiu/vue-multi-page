
const template_dir = 'public/template';

module.exports = {
    //多页应用的构建
    pages: {
        index: {
          entry: 'src/index/main.js',
          template: template_dir + 'index/index.html',
          filename: 'index.html',
          title: 'Index Page',
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        order:{
          entry:'src/order/main.js',
          template: template_dir + 'order/index.html',
          filename:'order.html',
          title:'订单页面',
          chunks:['chunk-vendors','chunk-common','order']
        }
      }
}