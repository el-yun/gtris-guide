"use strict";

module.exports = {
  publicPath: "/gtris3/",
  configureWebpack: {},
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },   
  css: {
    loaderOptions: {
      scss: {
        prependData: `
                    //mixins
                    @import "@/assets/scss/base/_variables.scss";
                    @import "@/assets/scss/mixins/_clearfix.scss";
                    @import "@/assets/scss/mixins/_pushauto.scss";
                    @import "@/assets/scss/mixins/_pseudo.scss";
                    @import "@/assets/scss/mixins/_truncate.scss";
                    @import "@/assets/scss/mixins/_truncateFlexChild.scss";
                `
      }
    },
    sourceMap: true
  }
};
