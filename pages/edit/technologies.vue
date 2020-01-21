<template>
  <div>
    <v-form ref="form" v-model="form.valid" lazy-validation>
      <v-card class="mx-auto my-3" max-width="auto">
        <v-card-title
          class="headline font-weight-regular blue-grey white--text"
        >
          技術
        </v-card-title>
        <v-card-text
          v-for="technology in form.technologies"
          :key="technology.created_at"
        >
          <v-divider />
          <v-text-field v-model="technology.name" label="技術名" required />
          <v-text-field
            v-model="technology.technology_level"
            label="使えるレベル"
            required
          />
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="technology.years_of_experience"
                label="年数"
                suffix="年"
                required
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="technology.months_of_experience"
                label="月"
                suffix="ヶ月"
                required
              />
            </v-col>
          </v-row>
          <v-switch
            v-model="technology.not_want_to_use"
            class="my-1"
            label="使いたくない技術"
          />
        </v-card-text>
        <v-divider />
        <div class="text-center">
          <v-btn class="ma-2" outlined color="indigo" @click="newList">
            使える技術を追加
          </v-btn>
        </div>
      </v-card>

      <div class="mt-5">
        <v-btn class="mr-4" @click="submit">
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
      technologies: [
        {
          name: '',
          technology_level: '',
          years_of_experience: '',
          months_of_experience: '',
          not_want_to_use: false
        }
      ]
    }
  }),
  mounted() {
    // const user = this.$store.state.user
    // this.form.technologies = user.technologies
  },
  methods: {
    newList() {
      this.form.technologies.push({
        name: '',
        technology_level: '',
        years_of_experience: '',
        months_of_experience: '',
        not_want_to_use: false
      })
    },
    async submit() {
      let editUser = JSON.parse(JSON.stringify(this.$store.state.user))
      editUser.profile = Object.assign(editUser.profile, this.form.profile)

      await this.$store.dispatch('updateUser', editUser)
      this.snackbar = true
    }
  }
}
</script>
