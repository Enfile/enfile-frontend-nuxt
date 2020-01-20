<template>
  <div>
    <v-form ref="form" v-model="form.valid" lazy-validation>
      <v-card>
        <v-card-title
          class="headline font-weight-regular blue-grey white--text"
        >
          基本プロフィール
        </v-card-title>
        <v-card-text class="mt-3">
          <v-text-field v-model="form.name" :counter="20" label="名前" />
          <v-text-field
            v-model="form.school_name"
            :counter="20"
            label="学校名"
          />
          <v-text-field v-model="form.using_os" :counter="20" label="使用OS" />
          <v-text-field
            v-model="form.technology_name"
            :counter="20"
            label="技術名"
          />

          <v-radio-group v-model="form.order_by" label="レベル" row>
            <v-radio :label="`なし`" :value="``" />
            <v-radio :label="`昇順`" :value="`order_by_level`" />
            <v-radio :label="`降順`" :value="`-order_by_level`" />
          </v-radio-group>

          <div class="mt-5">
            <v-btn class="mr-4" @click="search">
              検索
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-form>
    <v-card max-width="450" class="mx-auto users">
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
    users: [],
    form: {
      name: '',
      school_name: '',
      using_os: '',
      technology_name: '',
      order_by: ''
    }
  }),
  async created() {
    await this.loadUsers('')
  },
  methods: {
    async loadUsers(query) {
      await this.$axios
        .$get(`/user/${query}`)
        .then(response => {
          this.users = response
        })
        .catch(error => {
          console.log(error)
        })
    },
    async search() {
      this.loadUsers('')
    }
  }
}
</script>

<style lang="scss" scoped>
.users {
  margin-top: 20px;
}
</style>
