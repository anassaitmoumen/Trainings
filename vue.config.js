const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // Prefer SASS syntax
        prependData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
})
