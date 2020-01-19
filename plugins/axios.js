export default ({ $axios }) => {
  $axios.onError(error => {
    console.log(error)
  })
}
