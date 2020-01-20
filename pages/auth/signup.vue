<template>
  <v-form ref="form" v-model="form.valid" lazy-validation>
    <v-card>
      <v-card-title class="headline font-weight-regular blue-grey white--text">
        基本プロフィール
      </v-card-title>
      <v-card-text class="mt-3">
        <v-text-field
          v-model="form.profile.name"
          :counter="20"
          label="名前"
          required
        />
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="form.profile.birth_day"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="form.profile.birth_day"
              label="生年月日"
              readonly
              v-on="on"
            />
          </template>
          <v-date-picker v-model="form.profile.birth_day" no-title scrollable>
            <v-spacer />
            <v-btn text color="primary" @click="menu = false">
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(form.profile.birth_day)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-radio-group v-model="form.profile.sex" label="性別" row required>
          <v-radio :label="`男性`" :value="1" />
          <v-radio :label="`女性`" :value="2" />
          <v-radio :label="`不明`" :value="0" />
        </v-radio-group>

        <v-text-field
          v-model="form.profile.school_name"
          :counter="20"
          label="学校名"
          required
        />

        <v-select
          v-model="form.profile.school_year"
          :items="items"
          label="学年"
          required
        />
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title class="headline font-weight-regular blue-grey white--text">
        詳細プロフィール
      </v-card-title>
      <v-card-text class="mt-3">
        <v-textarea v-model="form.profile.profile" label="自己紹介" required />

        <v-text-field
          v-model="form.profile.using_os"
          label="使っているOS"
          required
        />
        <v-text-field v-model="form.profile.url" label="URL" required />
        <v-text-field v-model="form.profile.link" label="連絡先" required />
      </v-card-text>
    </v-card>

    <div class="mt-5">
      <v-btn @click="clear">
        clear
      </v-btn>
      <v-btn class="mr-4" @click="submit">
        submit
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    menu: false,
    form: {
      valid: true,
      account: {
        sub: ''
      },
      profile: {
        icon_path: '',
        name: '',
        sex: 0,
        birth_day: new Date().toISOString().substr(0, 10),
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
    },
    select: null,
    items: ['1', '2', '3', '4']
  }),
  created() {
    const user = this.$store.$auth.user
    this.form.profile.name = user.name
    this.form.profile.icon_path = user.picture
    this.form.account.sub = user.sub
  },
  methods: {
    clear() {
      this.$refs.form.reset()
    },
    async submit() {
      await this.$axios
        .$post(`/user/`, this.form)
        .then(() => {
          this.$store.dispatch('fetchUser')
          this.$router.push('/home')
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
