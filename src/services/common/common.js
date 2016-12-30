import Promise from 'promise'
import Axios from 'axios'
import _ from 'lodash'

import config from '../../libs/config.js'

export default function(method, url, params, body) {

  let options = {
    method: method,
    url: config.api + url,
    params: _.assign(params, { access_token: config.token }),
    data: body
  }
  return new Promise(function(resolve, reject) {
    Axios(options).then(function(response) {
        //console.log(response)
        resolve(response.data)
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          //console.log(error.response.data)
          //console.log(error.response.headers)
          console.log(error.response.status)
          reject(error.response.status)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        //console.log(error.config)
      })
  })
}