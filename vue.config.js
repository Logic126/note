module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/theme/theme.scss";` //引入全局变量
      }
    }
  }
}
