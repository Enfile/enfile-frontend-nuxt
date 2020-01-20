<template>
  <div>
    <v-card max-width="450" class="mx-auto">
      <v-list three-line>
        <template v-for="user in users">
          <v-list-item :key="user.created_at">
            <v-list-item-avatar>
              <v-img :src="user.profile.icon_path" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="user.profile.name" />
              <v-list-item-subtitle>
                <TecLevelBadge />
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import TecLevelBadge from '../components/base/TecLevelBadge.vue'

export default {
  components: {
    TecLevelBadge
  },
  data: () => ({
    users: []
  }),
  async created() {
    await this.$axios
      .$get(`/user/`)
      .then(response => {
        this.users = response
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style></style>
