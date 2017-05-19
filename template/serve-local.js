const Nuxt = require('nuxt')
const express = require('express')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.POST || 3000
const app = express()

process.env.HOST = HOST
process.env.PORT = PORT

app.use('/api', require('./src-api'))

let nuxtConfig = require('./nuxt.config.js')
nuxtConfig.dev = (process.env.NODE_ENV !== 'production')

const nuxt = new Nuxt(nuxtConfig)
app.use(nuxt.render)

if (nuxtConfig.dev) {
  nuxt.build()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

app.listen(PORT, HOST)
console.log(`Server listening on ${HOST}:${PORT}`)
