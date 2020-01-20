<template>
  <div>
    <h1>home</h1>
    <p>{{ user }}</p>

    <p>{{ $store.state.user }}</p>
    <button @click="testSetUser">
      axios test
    </button>
  </div>
</template>

<script>
export default {
  layout: 'home',
  components: {},
  async asyncData({ $axios }) {
    const user = await $axios.$get(`/user/`)
    return { user }
  },
  created() {
    console.log(this.$store.state.user)
  },
  methods: {
    async testSetUser() {
      await this.$store.dispatch('fetchUser')
    }
  }
}
</script>
