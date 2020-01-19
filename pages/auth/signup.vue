<template>
  <v-form ref="form" v-model="form.valid" lazy-validation>
    <v-text-field
      v-model="form.profile.name"
      :counter="20"
      :rules="formRules.nameRules"
      label="名前"
      required
    />

    <v-btn
      :disabled="!form.valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>

    <v-btn color="warning" @click="resetValidation">
      Reset Validation
    </v-btn>

    <v-btn color="warning" @click="create">
      create
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    form: {
      valid: true,
      account: {
        sub: ''
      },
      profile: {
        icon_path: '',
        name: '',
        sex: 0,
        birth_day: null,
        school_year: null,
        school_name: '',
        profile: '',
        using_os: '',
        link: '',
        contact: ''
      },
      is_active: true
    },
    formRules: {
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters'
      ]
    }
  }),
  created() {
    const user = this.$store.$auth.user
    this.form.profile.name = user.name
    this.form.profile.icon_path = user.picture
    this.form.account.sub = user.sub
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async create() {
      await this.$axios
        .$post(`/user/`, this.form)
        .then(result => console.log(result.data))
        .catch(error => console.log(error))
    }
  }
}
</script>
