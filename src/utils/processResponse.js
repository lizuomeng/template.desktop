import { isObject, isArray } from 'lodash'

const processResponse = (response, opts = {}) => {
  return response
    .then(res => {
      if (isArray(res.data)) {
        return res.data
      } else if (isObject(res.data)) {
        return {
          ...res.data
        }
      } else {
        return res.data
      }
    })
    .catch(err => {
      const message = err.response ? err.response.data.error.message : (err && err.message)
      $Message.error(message, 1)

      return Promise.reject(err)
    })
}

export default processResponse
