<template>
  <div>
    <v-form ref="form" v-model="form.valid" lazy-validation>
      <v-card class="mx-auto" max-width="auto">
        <v-card-title
          class="headline font-weight-regular blue-grey white--text"
        >
          業務経験
        </v-card-title>
        <v-card-text
          v-for="experience in form.experiences"
          :key="experience.created_at"
        >
          <v-divider />
          <v-text-field
            v-model="experience.experience_type"
            label="種類"
            required
          />
          <v-text-field
            v-model="experience.technology"
            label="使用技術"
            required
          />
          <v-text-field v-model="experience.link" label="URL" required />
          <v-textarea v-model="experience.text" label="説明" required />
        </v-card-text>
        <v-divider />

        <div class="text-center">
          <v-btn class="ma-2" outlined color="indigo" @click="newList">
            業務経験を追加
          </v-btn>
        </div>
      </v-card>

      <div class="mt-5 text-center">
        <v-btn class="mr-4" color="success" @click="submit">
          更新
        </v-btn>
      </div>
    </v-form>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      プロフィールを更新しました
      <v-btn color="blue" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  layout: 'edit',
  components: {},

  data: () => ({
    snackbar: false,
    timeout: 2000,
    form: {
      experiences: [
        {
          experience_type: '',
          technology: '',
          link: '',
          text: ''
        }
      ]
    }
  }),
  mounted() {
    this.form.experiences = JSON.parse(
      JSON.stringify(this.$store.state.user.experiences)
    )
  },
  methods: {
    newList() {
      this.form.experiences.push({
        experience_type: '',
        technology: '',
        link: '',
        text: ''
      })
    },
    async submit() {
      let editUser = JSON.parse(JSON.stringify(this.$store.state.user))
      editUser.experiences = Object.assign(
        editUser.experiences,
        this.form.experiences
      )
      await this.$store.dispatch('updateUser', editUser)
      this.snackbar = true
    }
  }
}
</script>
