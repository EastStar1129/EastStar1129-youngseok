const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../src/main/resources/static",
  devServer: {
    proxy: {
      '/login': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
