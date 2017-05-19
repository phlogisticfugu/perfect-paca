import axios from 'axios'

function axio_factory (context, options) {
  let baseURL = '';
  
  if (context.req) {
    /*
     * local development uses http, all other environments use https
     */
    let protocol = context.isDev ? 'http' : 'https';
    baseURL = `${protocol}://${req.headers.host}/`;
  }

  return axios.create(Object.assign({
    baseURL
  }, options))
}

export default axios_factory
