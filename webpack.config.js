const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const config = {
        entry: ['./src/index.js'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'logger-client.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|test)/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
        ],
    };

    if (argv.mode === 'development') {
        config.watch = true;
        config.watchOptions = {
            poll: true,
        };
        config.devtool = 'source-map';
    }

    return config;
};
