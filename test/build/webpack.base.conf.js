const path = require('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'), //try to change to dist/public
    assets: ('assets/'), //try to change to assets/static
};

module.exports = {

    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output:{
        filename: `${PATHS.assets}js/[name].[hash].js`,
        path: PATHS.dist,
        publicPath: '/surf-project/'
    },
    optimization: {
      splitChunks:{

          cacheGroups:{
              vendor:{
                  name: 'vendors',
                  test: /node_modules/,
                  chunks: 'all',
                  enforce: true
              }
          }
      }
    },
    module:{
        rules: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader:{
                        scss:'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                // loader: 'file-loader',
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    esModule: false
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader:'postcss-loader',
                        options: {
                            sourceMap: true,
                            config:{path:`./postcss.config.js`}
                        }
                    },
                    {
                        loader:'sass-loader',
                        options: { sourceMap: true}
                    }
                ]
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader:'postcss-loader',
                        options: {
                            sourceMap: true,
                            config:{path: `./postcss.config.js`}
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '~':'src',
            'vue$':'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html',
            // inject: false
        }),
        new CopyWebpackPlugin([
            {from: `${PATHS.src}/${PATHS.assets}/img`, to: `${PATHS.assets}img`},
            {from: `${PATHS.src}/${PATHS.assets}/fonts`, to: `${PATHS.assets}fonts`},
            {from: `${PATHS.src}/static`, to: ''}
        ]),
    ]
};