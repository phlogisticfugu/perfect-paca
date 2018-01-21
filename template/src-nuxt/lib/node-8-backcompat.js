const util = require('util')
if (!util.promisify) {
  require('util.promisify/shim')()
}
if (!Object.values) {
  require('object.values').shim()
}
require('babel-register')({
  only: /nuxt\/lib/,
  presets: [
    [ 'env', { targets: { node: 'current' } } ]
  ]
})
