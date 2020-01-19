<template>
  <div class="wrap">
    <v-row>
      <v-col cols="sm-12">
        <div class="d-block text-center">
          <h1 class="display-4">
            Enfile
          </h1>
          <p class="headline">
            エンジニアを繋ぐプロフィール
          </p>
        </div>
        <v-divider />
      </v-col>
      <v-col cols="sm-12" class="text-center">
        <div class="my-3">
          <v-btn color="success" min-width="200" @click="googleAuthenticate">
            Google SignIn
          </v-btn>
          <v-btn class="ml-3" variant="danger" @click="logout">
            Logout
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'signin',
  components: {},
  methods: {
    googleAuthenticate() {
      this.$auth.loginWith('google')
    },
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 90vh;
  display: flex;
  justify-content: center; /*左右中央揃え*/
  align-items: center; /*上下中央揃え*/
}
.display-4 {
  font-family: 'Josefin Sans', sans-serif !important;
}
</style>
