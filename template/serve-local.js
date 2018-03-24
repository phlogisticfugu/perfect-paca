const { Nuxt, Builder } = require('nuxt')
const express = require('express')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000
const app = express()

app.set('port', PORT)

process.env.HOST = HOST
process.env.PORT = PORT

app.use('/api', require('./src-api'))

let nuxtConfig = require('./nuxt.config.js')
nuxtConfig.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(nuxtConfig)

if (nuxtConfig.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)

app.listen(PORT, HOST)
console.log(`Server listening on ${HOST}:${PORT}`)
