const path = require('path')

module.exports = {
    entry: './js/index.js',
    output: {
	path: path.resolve(__dirname,'out','www'),
        filename: 'bundle.js'
    },
    module: {
	rules: [
	    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};
