<template>
  <div>
    <p />
  </div>
</template>

<script>
export default {
  layout: 'check',
  components: {},
  async mounted() {
    let account = await this.$axios.$get(
      `/user?account__sub=${this.$store.$auth.user.sub}`
    )

    if (account.length === 0) {
      this.$router.push('/auth/signup')
    } else {
      await this.$store.dispatch('fetchUser')
      this.$router.push('/home')
    }
  }
}
</script>
