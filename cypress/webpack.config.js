const path = require('path')

module.exports = {
    mode: 'development',
    resolve: {
      // see below for an explanation
      mainFields: ['svelte', 'browser', 'module', 'main'],
      alias: {
        '@': path.resolve(__dirname, '../src/'),
        'components':  path.resolve(__dirname, './testingComponents/')
      },
      extensions: ['.wasm', '.mjs', '.js', '.json', '.html']
    },
    module: {
      rules: [
        {
          test: /\.(html|svelte)$/,
          exclude: /node_modules/,
          use: 'svelte-loader'
        }
      ]
    },
    devtool: 'cheap-module-eval-source-map'
  }
