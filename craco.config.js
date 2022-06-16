const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
   webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@COM': '@/components'
    },
    configure: {
      optimization: {
        splitChunks: {
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              name: 'vendors',
              priority: 2,
              enforce: true,
              reuseExistingChunk: true
            }
          }
        },
        runtimeChunk: false,
        minimizer: [new TerserPlugin({ extractComments: false })]
      },
      plugins: [],
      entry: {
        main: './src/index.js',
        //counter: './src/features/counter/Counter.js'
      },
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js',
      },
    }
  }
}