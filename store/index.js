export const state = () => ({
  user: null
})

// export const getters = {
//   user: state > state.user
// }

export const mutations = {
  setUser(state, user) {
    state.user = user
    console.log('SET_USER')
  },
  signOut(state) {
    state.user = null
    this.$auth.logout()
    console.log('SIGN_OUT')
    this.$router.push('/')
  }
}

export const actions = {
  async fetchUser({ commit }) {
    this.$axios
      .$get(`/user/`)
      .then(response => {
        console.log(response[0])
        commit('setUser', response[0])
      })
      .catch(error => {
        console.log(error)
      })
  }
}
