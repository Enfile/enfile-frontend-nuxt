<template>
  <div>
    <p>{{ user }}</p>
  </div>
</template>

<script>
export default {
  layout: 'user-detail',
  components: {},
  data: () => ({
    user: null
  }),
  async mounted() {
    const userId = this.$route.params.id
    console.log(userId)
    await this.$axios
      .$get(`/user/${userId}`)
      .then(response => {
        this.user = response
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
