require('babel-register')({
  only: /nuxt\/lib/,
  presets: [
    [ 'env', { targets: { node: '6.10' } } ],
  ],
})
