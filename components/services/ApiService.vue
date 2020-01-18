<script>
import axios from '../../.nuxt/axios'

const baseUrl = 'http://localhost:8000'

export default {
  find: function(path, id, callback, errorHandler) {
    let targetPath = baseUrl + path + id

    axios
      .get(targetPath)
      .then(response => {
        callback(response)
      })
      .catch(error => {
        errorHandler(error)
      })
  },
  search: function(pathWithQuery, callback, errorHandler, params) {
    let targetPath = baseUrl + pathWithQuery

    axios
      .get(targetPath, params)
      .then(response => {
        callback(response)
      })
      .catch(error => {
        errorHandler(error)
      })
  },
  nativeSearch: function(path, callback, errorHandler) {
    axios
      .get(path)
      .then(response => {
        callback(response)
      })
      .catch(error => {
        errorHandler(error)
      })
  },
  update: function(path, params, callback, errorHandler) {
    let targetPath = baseUrl + path

    axios
      .put(targetPath, params)
      .then(response => {
        callback(response)
      })
      .catch(error => {
        errorHandler(error)
      })
  },
  create: function(path, params, callback, errorHandler) {
    let targetPath = baseUrl + path

    axios
      .post(targetPath, params, {})
      .then(response => {
        callback(response)
      })
      .catch(error => {
        errorHandler(error)
      })
  },
  destroy: function(path, id, callback, errorHandler) {
    let targetPath = baseUrl + path + '/' + id

    axios
      .delete(targetPath)
      .then(response => {
        callback(response)
      })
      .catch(error => {
        errorHandler(error)
      })
  }
}
</script>
