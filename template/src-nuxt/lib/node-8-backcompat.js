const util = require('util')
if (!util.promisify) {
  require('util.promisify/shim')()
}
if (!Object.values) {
  require('object.values').shim()
}
