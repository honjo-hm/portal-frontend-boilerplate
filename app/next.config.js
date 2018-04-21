require("reflect-metadata");
const path = require('path');
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript({
    webpack(config, options) {
        if (options.isServer) {
            config.plugins.push(new ForkTsCheckerWebpackPlugin({
                tslint: true,
                tsconfig: path.resolve(config.context, './tsconfig.json')
            }))
            // config.node = {
            //     fs: "empty"
            // }
        }
        // config.node = {
        //     fs: "empty"
        // }
        config.node = {
            fs:     "empty",
            module: "empty",
            net:    "empty",
            tls:    "empty"
        }
        return config
    },
})
