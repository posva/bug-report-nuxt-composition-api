const config = {
  ssr: true,
  modules: ['@nuxtjs/composition-api/module', 'pinia/nuxt'],
  plugins: ['~/plugins/pinia'],
  build: {
    // transpile: ['@vue/composition-api', '@nuxtjs/composition-api', 'pinia']
  }
}

export default config
