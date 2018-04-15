const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack(config, options) {
    // 以下対応しないとエラーでコケる
    // Module not found: Error: Can't resolve 'fs'
    config.node = {
      fs:     "empty",
      module: "empty",
      net:    "empty",
      tls:    "empty"
    }
    return config
  },
  typescriptLoaderOptions: {
    transpileOnly: false
  }
})
