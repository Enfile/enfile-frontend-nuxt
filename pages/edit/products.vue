<template>
  <div>
    <v-form ref="form" v-model="form.valid" lazy-validation>
      <v-card class="mx-auto my-3" max-width="auto">
        <v-card-title
          class="headline font-weight-regular blue-grey white--text"
        >
          成果物
        </v-card-title>
        <v-card-text v-for="product in form.products" :key="product.created_at">
          <v-divider />
          <v-text-field v-model="product.product_type" label="種類" required />
          <v-text-field
            v-model="product.technology"
            label="使用技術"
            required
          />
          <v-text-field v-model="product.link" label="URL" required />
          <v-textarea v-model="product.text" label="説明" required />
        </v-card-text>
        <v-divider />

        <div class="text-center">
          <v-btn class="ma-2" outlined color="indigo" @click="newList">
            成果物を追加
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
      products: [
        {
          product_type: '',
          technology: '',
          link: '',
          text: ''
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
      this.form.products.push({
        product_type: '',
        technology: '',
        link: '',
        text: ''
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
