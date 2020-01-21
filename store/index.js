export const state = () => ({
  user: null
})

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
    let query = `?account__sub=${this.$auth.user.sub}`
    this.$axios
      .$get(`/user/${query}`)
      .then(response => {
        console.log(response[0])
        commit('setUser', response[0])
      })
      .catch(error => {
        console.log(error)
      })
  },
  async updateUser({ commit }, userReq) {
    delete userReq.account
    const path = '/user/' + userReq.user_id + '/'
    await this.$axios
      .$put(path, userReq)
      .then(response => {
        console.log(response)
        commit('setUser', response)
      })
      .catch(error => console.log(error))
  }
}
