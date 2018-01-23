import * as axios from 'axios'

function getParams (query) {
  var params = new URLSearchParams()

  for (var item in query) {
    if (query[item] instanceof Array) {
      query[item].forEach(function (node) {
        params.append(item, node)
      })
    } else {
      params.append(item, query[item])
    }
  }

  return params
}

export function get (url, query) {
  var path = url

  if (query) {
    path += '?' + getParams(query).toString()
  }

  return axios.get(path).catch(function (e) {
    console.error('GET ERROR', url)
  })
}

export function post (url, query) {
  if (query) {
    var params = getParams(query)
  }

  return axios.post(url, params).catch(function (e) {
    console.error('GET ERROR', url)
  })
}
