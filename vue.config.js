module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: {
      '/api':{
        target: "http://localhost:5001/api",
        changeOrigin: true,
      }
    }
  }
}