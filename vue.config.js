"use strict";

module.exports = {
  outputDir: path.resolve(__dirname, "./docs"),
  publicPath: "/gtris-guide/",
  pages: {
    gtris3: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      publicPath: "/gtris3/"
    },
    github: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "../index.html",
      publicPath: ""
    }
  },
  runtimeCompiler: true,
  configureWebpack: {},
  // chainWebpack: config => {
  //   config.module.rule('txt')
  //     .test(/\.txt/)
  //     .use('raw-loader')
  //     .loader('raw-loader')
  //     .end()
  // },

  chainWebpack: config => {
    const mdRule = config.module.rule("md");
    mdRule
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true
      });

    const txtRule = config.module.rule("txt");
    txtRule
      .rule("txt")
      .test(/\.txt/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
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
