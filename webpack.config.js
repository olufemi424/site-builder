module.exports = {
    entry: ['./browser/src/react-redux/index.jsx'],
    mode: 'development',
    module: {
        rules: [{
            test: /jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/browser/public/js',
        filename: 'scripts.js'
    },
    devtool: 'source-map'
};