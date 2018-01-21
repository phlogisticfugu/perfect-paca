if (process.env.AWS_EXECUTION_ENV === 'nodejs6.10') {
  require('./src-nuxt/lib/node-8-backcompat')
}
const { Nuxt, Builder } = require('nuxt')
const express = require('express')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000
const app = express()

process.env.HOST = HOST
process.env.PORT = PORT

app.use('/api', require('./src-api'))

let nuxtConfig = require('./nuxt.config.js')
nuxtConfig.dev = (process.env.NODE_ENV !== 'production')

const nuxt = new Nuxt(nuxtConfig)
app.use(nuxt.render)

if (nuxtConfig.dev) {
  new Builder(nuxt).build()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

app.listen(PORT, HOST)
console.log(`Server listening on ${HOST}:${PORT}`)
