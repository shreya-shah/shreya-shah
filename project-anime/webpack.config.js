const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
      },{
      test:/\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
        }
      ]
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':data-src']
        }
      }
    }
  ]
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'head'
    })
  ],
  mode: 'development'
}
