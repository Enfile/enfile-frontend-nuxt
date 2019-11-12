<template>
  <v-row>
    <v-col cols="sm-12">
      <div class="d-inline-block text-center">
        <h1 class="display-4">
          Enfile
        </h1>
        <p class="headline">
          エンジニアを繋ぐプロフィール
        </p>
      </div>
      <v-divider />
    </v-col>
    <v-col cols="sm-12">
      <v-btn color="success" class="mt-3 text-center" block>
SignIn
</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'signin',
  components: {}
}
</script>

<style lang="scss" scoped>
.display-4 {
  font-family: 'Josefin Sans', sans-serif !important;
}
</style>
