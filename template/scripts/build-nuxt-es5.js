/* eslint no-console: 0 */
const shell = require('shelljs')
shell.rm('-rf', 'nuxt-es5')
shell.cp('-r', 'node_modules/nuxt/lib', 'nuxt-es5')

shell.rm('-rf', 'nuxt-es5/builder')
shell.rm('-rf', 'nuxt-es5/common')
shell.rm('-rf', 'nuxt-es5/core')

shell.exec('npx babel-cli -D -d nuxt-es5/builder node_modules/nuxt/lib/builder')
shell.exec('npx babel-cli -D -d nuxt-es5/common node_modules/nuxt/lib/common')
shell.exec('npx babel-cli -D -d nuxt-es5/core node_modules/nuxt/lib/core')

shell.mkdir('nuxt-es5/bin')
shell.cp('node_modules/nuxt/bin/nuxt-build', 'nuxt-es5/bin/nuxt-build')
