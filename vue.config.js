const path = require('path')
const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/_functions.scss'),
        path.resolve(__dirname, './src/assets/scss/_mixins.scss'),
        path.resolve(__dirname, './src/assets/scss/_variables.scss'),
      ],
    })
}

module.exports = {
  assetsDir: 'assets',
  chainWebpack: config => {
    // Load scss dependancies
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  configureWebpack() {
    // Additional config to be merged
    let additionalConfig = {};
    // Production config
    if (process.env.NODE_ENV === 'production') {
      additionalConfig = {
        plugins: [
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './public/**/*.html'),
              path.join(__dirname, './src/**/*.vue')
            ]),
            defaultExtractor(content) {
              const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
              return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
            },
            safelist: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/],
            fontFace: true
          })
        ]
      }
    }
    return additionalConfig
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                "style-loader",
                "css-loader",
                {
                  loader: "sass-loader",
                  options: {
                    // Prefer `dart-sass`
                    implementation: require("sass")
                  },
                },
              ]
            }
          ]
        }
      }
    }
  }
}