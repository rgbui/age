const path = require("path");
var pkg = require('../package.json');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var argv = (process.env.NODE_ENV || '').split(/[\s,]+/);
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
var mode = 'dev';
if (process.argv.some(s => s == '--pro')) mode = 'pro';
else if (process.argv.some(s => s == '--beta')) mode = 'beta';
var isDev = mode == 'dev'
var isUs = argv.some(s => s == '--us');


var platform = 'web';
if (process.argv.some(s => s == '--desktop')) platform = 'desktop';
else if (process.argv.some(s => s == '--mobile')) platform = 'mobile';
/**
 * webpack url https://webpack.docschina.org/guides/output-management/#cleaning-up-the-dist-folder
 */

let port = 8085;
let publicPath = `http://localhost:${port}/`;
if (mode == 'pro') publicPath = ``;

var API_VERSION = 'v1';

var API_AUTH_URLS = ['http://127.0.0.1:8888'];
if (mode == 'beta') API_AUTH_URLS = ['https://beta-b1.shy.live'];
else if (mode == 'pro') API_AUTH_URLS = ['https://api-m1.shy.live', 'https://api-m2.shy.live'].map(s => s.replace('shy.live', isUs ? "shy.red" : "shy.live"));

var API_AGE_URLS = ['http://127.0.0.1:6666']
if (mode == 'beta') API_AGE_URLS = ['https://beta.age.run'];
else if (mode == 'pro') API_AGE_URLS = [
    'https://api-m1.age.run',
].map(s => s.replace('shy.live', isUs ? "shy.red" : "shy.live"));

var versionPrefix = '';

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: {
        age: './src/main.tsx',
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    output: {
        path: path.resolve(__dirname, "../dist" + (isDev ? "" : '/' + mode)),
        filename: versionPrefix + "assert/js/age.[name].[contenthash:8].js",
        chunkFilename: versionPrefix + 'assert/js/age.[name].[contenthash:8].js',
        publicPath,
        // clean:true
    },
    resolve: {
        extensions: ['.tsx', ".ts", ".js", ".less", ".css"],
        alias: {
            crypto: false,
            'react': path.resolve(__dirname, '../node_modules/react'),
            'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
        }
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ["ts-loader"]
        },
        {
            test: /\.css$/,
            use: [
                isDev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader },
                'css-loader',
            ],
        },
        {
            test: /\.less$/,
            use:
                [
                    isDev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(__dirname, "../src/assert/less.less")
                            ]
                        }
                    }
                ],
        },
        {
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: [
                { loader: '@svgr/webpack' },
            ]
        },
        {
            test: /\.svg$/,
            issuer: /\.(css|less|styl)$/,
            type: 'asset/resource',
            generator: {
                filename: versionPrefix + 'assert/img/[name]-[contenthash:8][ext]',
            }
        },
        {
            test: /\.(jpe?g|png|gif|bmp|webp|ico)$/,
            type: 'asset/resource',
            generator: {
                filename: versionPrefix + 'assert/img/[name]-[contenthash:8][ext]',
            },
            // 是parser，不是parse
            parser: {
                dataUrlCondition: {
                    // 是maxSize，不再是limit
                    maxSize: 5 * 1024
                }
            }
        },
        {
            test: /\.(json|md)$/,
            type: 'asset/resource',
            generator: {
                filename: versionPrefix + 'data/[name]-[contenthash:8][ext]',
            }
        },
        {
            test: /\.(woff2?|eot|ttf)$/,
            type: 'asset/resource',
            generator: {
                filename: versionPrefix + 'assert/font/[name]-[contenthash:8][ext]'
            },
            // 是parser，不是parse
            parser: {
                dataUrlCondition: {
                    // 是maxSize，不再是limit
                    maxSize: 5 * 1024
                }
            }
        }]
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        isDev ? new webpack.HotModuleReplacementPlugin() : new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html"), // 婧愭ā鏉挎枃浠�
            filename: 'index.html',
            showErrors: true,
            hash: false,
            chunks: ['age'],
            favicon: false,
            templateParameters: {
                src: publicPath + versionPrefix
            },
        }),
        new webpack.DefinePlugin({
            MODE: JSON.stringify(mode),
            VERSION: JSON.stringify(pkg.version),
            API_AUTH_URLS: JSON.stringify(API_AUTH_URLS),
            API_AGE_URLS: JSON.stringify(API_AGE_URLS),
            ASSERT_URL: JSON.stringify(publicPath + versionPrefix),
            STATIC_URL: JSON.stringify(publicPath),
            REGIN: JSON.stringify(isUs ? "US" : "CN"),
            API_VERSION: JSON.stringify(API_VERSION),
            PLATFORM:JSON.stringify(platform)
        }),
        new MiniCssExtractPlugin({
            filename: versionPrefix + "assert/css/age.[contenthash:8].css"
        })
    ],
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            // async：异步导入， initial：同步导入， all：异步/同步导入
            chunks: "all",
            // 最小尺寸: 单位是字节，如果拆分出来一个, 那么拆分出来的这个包的大小最小为minSize
            minSize: 250000,
            // 将大于maxSize的包, 拆分成不小于minSize的包
            maxSize: 250000,
            // minChunks表示引入的包, 至少被导入了几次 【才拆分】
            minChunks: 1,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: versionPrefix + "assert/js/age.[id].[contenthash:8].js",
                    chunks: 'all',
                },
                default: {
                    // 如果一个文件被引入了2次，就单独打包出来一个js文件
                    minChunks: 2,
                    filename: versionPrefix + "assert/js/age.common.[id].[contenthash:8].js",
                    priority: -20
                }
            },
        },
    },
};
if (isDev) {
    module.exports.devServer = {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        client: {
            progress: true,
        },
        host: '127.0.0.1',
        compress: true,
        port: port,
        open: true,
        historyApiFallback: {
            rewrites: [
                { from: /^[a-zA-Z\d\/]+$/, to: '/index.html' }
            ]
        }
    }
}