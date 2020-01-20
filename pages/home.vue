<template>
  <div>
    <h1>home</h1>
    <p>{{ $store.state.user }}</p>
    <button @click="testSetUser">
      axios test
    </button>
    <button @click="testSignOut">
      axios test
    </button>
  </div>
</template>

<script>
export default {
  layout: 'home',
  components: {},
  created() {
    console.log(this.$store.state.user)
  },
  methods: {
    async testSetUser() {
      await this.$store.dispatch('fetchUser')
    },
    testSignOut() {
      this.$store.commit('signOut')
    }
  }
}
</script>
