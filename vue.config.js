const path = require('path') 
function resolve (dir) { 
  return path.join(__dirname, dir)  
} 
module.exports = {
  chainWebpack: config => {  
    // config.resolve.alias
    //   .set("@", resolve("src"))


      config.module 
      .rule('svg')
      .exclude.add(resolve('src/views/svg/start'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/views/svg/start'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()    
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  }
}
