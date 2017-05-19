/*
 * Handler definition for https://serverless.com/
 */
const Nuxt = require('nuxt')

let nuxtConfig = require('./nuxt.config.js')
nuxtConfig.dev = false
const nuxt = new Nuxt(nuxtConfig)

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const awsServerlessExpress = require('aws-serverless-express')
const app = require('express')()
const server = awsServerlessExpress.createServer(app)

app.use('/api', require('./src-api'))

app.use(awsServerlessExpressMiddleware.eventContext())
app.use(nuxt.render)

module.exports.main = (event, context) => {
  // workaround for double gzip encoding issue
  // HTTP gzip encoding should be done higher-up via something like CloudFront/CloudFlare
  event.headers['Accept-Encoding'] = 'identity'

  console.log('proxying event=', event)

  awsServerlessExpress.proxy(server, event, context)
}
