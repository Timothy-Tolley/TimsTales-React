import request from 'superagent'

import {get} from './localstorage'
import {isAuthenticated, saveUserToken} from './auth'
// const postsUrl = ''
// const imagesUrl = ''
// const postTagsUrl = ''

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://timstales.com'
  : 'http://localhost:3000'

// export function loginAPI (username, password) {
//   request
//     .get(`${baseUrl}/api/v1/signin`)
//     .then()
// }

export function login (method, endpoint, data) {
  consume(method, endpoint, data)
    .then((response) => { saveUserToken(response.body.token) })
    .catch(err => console.error(err.response.body.message))
}

export function consume (method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const token = get('token')
  const headers = {
    Accept: 'application/json'
  }

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request[method](baseUrl + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      return res
    })
    .catch(err => {
      throw err
    })
}
