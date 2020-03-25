"use strict"

module.exports = {
    configureWebpack: {},
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