const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");

module.exports = merge(webpackBaseConfig,
{
    entry:
    {
        main: "./src/index.ts"
    },
    output:
    {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/dist/",
        filename: "flagwind-web.min.js",
        library: "flagwind-web",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    externals: 
    {
        "vue":
        {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        "vue-router": "vue-router",
        "vuex": "vuex",
        "iview": "iview",
        "flagwind-core": "flagwind-core"
    },
    plugins: 
    [
        new webpack.DefinePlugin
        ({
            "process.env":
            {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin
        ({
            output:
            {
                comments: false
            },
            compress: 
            {
                warnings: false
            }
        })
    ]
});
