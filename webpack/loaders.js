const plugins = require('./plugins')

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env']
    }
  }
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc'
    },
  }
};

const SCSSLoader = {
  test: /\.scss$/,
  use: plugins.ExtractTextPlugin.extract({
  	fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {importLoaders: 1},
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: __dirname + '/postcss.config.js'
          }
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
  }),
};

const PUGLoader = {
	test: /\.pug$/,
	use: ['html-loader', 'pug-html-loader']
}

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  SCSSLoader: SCSSLoader,
  PUGLoader: PUGLoader
};