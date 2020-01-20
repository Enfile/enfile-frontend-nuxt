<template>
  <div>
    <p>{{ user }}</p>
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
  data: () => ({
    user: {
      user_id: '',
      account: {
        sub: '',
        created_at: '',
        updated_at: ''
      },
      profile: {
        profile_id: '',
        icon_path: '',
        name: '',
        sex: 0,
        birth_day: null,
        school_year: null,
        school_name: '',
        profile: '',
        using_os: '',
        link: '',
        contact: '',
        created_at: '',
        updated_at: ''
      },
      experiences: [],
      products: [],
      technologies: [],
      is_active: true,
      created_at: '',
      updated_at: ''
    }
  }),
  async created() {
    const userId = this.$route.params.id
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
