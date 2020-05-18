"use strict";


module.exports = {
  publicPath: "/gtris3/",

  configureWebpack: {},
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  },   

  // chainWebpack: config => {
  //   config.module.rule('md')
  //     .test(/\.md/)
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .end()
  //     .use('vue-markdown-loader')
  //     .loader('vue-markdown-loader/lib/markdown-compiler')
  //     .options({
  //       raw: true
  //     })
  // },   
  css: {
    loaderOptions: {
      scss: {
        prependData: `
                    //mixins
                    @import "@/assets/scss/mixins/_breakpoints.scss";
                    @import "@/assets/scss/mixins/_boxshadow.scss";
                    @import "@/assets/scss/mixins/_clearfix.scss";
                    @import "@/assets/scss/mixins/_pushauto.scss";
                    @import "@/assets/scss/mixins/_responsiveRatio.scss";
                    @import "@/assets/scss/mixins/_pseudo.scss";
                    @import "@/assets/scss/mixins/_truncate.scss";
                `
      }
    },
    sourceMap: true
  }
};
