const path = require('path')

module.exports = {
  assetsDir: 'assets',
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
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

function addStyleResource (rule) {
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