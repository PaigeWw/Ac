require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

const withImages = require('next-images')
module.exports = withImages({
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty',
        }
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'), //使用.env文件里的变量
                systemvars: true, //使用系统环境变量
            }),
        ]
        return config
    },
})
