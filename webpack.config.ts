import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import {
    Configuration,
    ContextReplacementPlugin,
} from 'webpack';

const APP = './src';
const DIST = './dist';

const config: Configuration = {
    context: path.resolve(__dirname, APP),
    entry: {
        vendor: './vendor.ts',
        app: './index.ts',
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, DIST),
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: [
                    'ts-loader',
                ],
            },
            {
                test: /.html$/,
                use: 'html-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'css-to-string-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /(\.png|.jpg|.gif|.svg)$/,
                use: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
    ],
    devServer: {
        port: 9000,
        stats: {
            color: true,
            chunks: false,
        },
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    }
};

export = config;
