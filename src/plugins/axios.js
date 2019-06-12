import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Storage } from '@/utils'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-type'] = 'application/json'

const config = {
  baseURL: '/',
  timeout: 60 * 1000,
  withCredentials: true, // Check cross-site Access-Control
  paramsSerializer: params => {
    return qs.stringify(params, {
      // arrayFormat: 'repeat'
    })
  }
}

const _axios = axios.create(config)

const processToken = (conf) => {
  const token = Storage.getItem('template')
  if (token) {
    conf.headers.common['Authorization'] = `Bearer ${token}`
  }
  return conf
}

_axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return processToken(config)
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error)
  }
)

Plugin.install = (Vue) => {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
