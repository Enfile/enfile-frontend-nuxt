<template>
  <div>
    <p>{{ user.profile }}</p>
    <top-icon />
    <introduction />
  </div>
</template>

<script>
import Introduction from '@/components/profile/Introduction.vue'
import TopIcon from '@/components/profile/TopIcon.vue'

export default {
  layout: 'user-detail',
  components: { Introduction, TopIcon },
  async asyncData({ params, $axios }) {
    const user = await $axios.$get(`/user/${params.id}`)
    return { user }
  }
}
</script>
