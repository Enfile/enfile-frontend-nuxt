<template>
  <div>
    <h1>home</h1>
    <p>{{ $store.$auth.user }}</p>
    <button @click="testAxios">
      axios test
    </button>
  </div>
</template>

<script>
export default {
  layout: 'home',
  components: {},
  methods: {
    async testAxios() {
      console.log(await this.$axios.$get('/user/user'))
    }
  }
}
</script>
