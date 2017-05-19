import axios from 'axios'

function axios_factory (context, options) {
  let baseURL = ''

  if (context.req) {
    /*
     * local development uses http, all other environments use https
     */
    let protocol = context.isDev ? 'http' : 'https'
    baseURL = `${protocol}://${context.req.headers.host}/`
  }
  options = Object.assign({
    baseURL
  }, options)

  return axios.create(options)
}

export default axios_factory
