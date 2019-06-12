module.exports = {
  lintOnSave: false,
  configureWebpack: {
  },
  devServer: {
    proxy: {
      '/api': {
        target: '',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
