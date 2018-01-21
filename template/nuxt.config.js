const IS_LAMBDA = process.env.AWS_EXECUTION_ENV === 'nodejs6.10'

module.exports = {
  head: {
    titleTemplate: '%s - Paca',
    htmlAttrs: {
      'lang': 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  srcDir: 'src-nuxt/',
  build: {
    babel: {
      presets: ({ isServer }) => [
        [
          require.resolve('babel-preset-vue-app'),
          { targets: isServer ? { node: IS_LAMBDA ? '6.10.0' : '8.0.0' } : { ie: 9, uglify: true } }
        ]
      ]
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
