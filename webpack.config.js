const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    //モードをdevelopment、production、noneから設定（必須）
    //development: 開発時のファイル出力モード（最適化より時間短縮、エラー表示を優先）
    //production: 本番時のファイル出力モード（最適化されて出力）
    mode: 'development',
    //メインとなるjsファイル(エントリーポイント)
    entry: './src/index.js',
    //ファイルの出力設定
    output: {
        path: path.join(__dirname, '/build'), //出力先のディレクトリ（絶対パスで指定）
        filename: 'bundle.js', //出力ファイル名
				assetModuleFilename: 'assets/[hash][ext][query]'	//アセット(画像動画などの)の出力先
    },
    //デバッグのためのSourceMap（ビルド前後の対応関係を記述したファイル）の出力設定
    devtool: 'inline-source-map',
    //対象のファイルを変換するためのloaderを設定
    module: {
        rules: [
            {
                test: [/\.tsx?$/, /\.ts$/, /\.jsx$/, /\.js$/], //build対象（loaderを適用するファイル）を指定
                loader: 'ts-loader', //適用するloaderを指定
            },
						{ 
							test: /\.css/, 
							use: ['style-loader', 'css-loader']
						},
						{
							test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|mp4)$/i,
							type: 'asset/resource'
						}
        ]
    },
    //importの際に省略する対象の拡張子を配列で指定
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] //指定されている拡張子のファイルはimportの際に拡張子を省略できる
    },
    //webpack-dev-serverの設定
    devServer: {
        static: path.join(__dirname, '/build'), //表示する静的ファイル（HTML）の場所を指定
        open: true, //ブラウザを自動的に起動
        port: 3000 //ポート番号を指定（デフォルトのポート：8080）
    },
    //pluginの設定
    plugins: [
        new HtmlWebpackPlugin({ //webpackでbuildされたJSやCSSを表示するHTMLを自動的に生成するplugin
            template: './public/index.html', //テンプレートとして使用するHTMLファイルを指定
            filename: 'index.html' //生成するHTMLファイル名
        }),
				new webpack.DefinePlugin({
					'process.env.NODE_ENV': JSON.stringify('development'),
					'process.env.PUBLIC_URL': JSON.stringify('http://localhost:3000/public')//publicフォルダのパス
				})
    ]
}