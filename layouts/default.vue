<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list nav dense>
        <v-list-item @click="$store.commit('signOut')">
          <v-list-item-title>ログアウト</v-list-item-title>
        </v-list-item>
        <nuxt-link to="/edit/profile" no-prefetch class="link-list">
          <v-list-item>
            <v-list-item-title>
              登録情報編集
            </v-list-item-title>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/search" no-prefetch class="link-list">
          <v-list-item>
            <v-list-item-title>
              ユーザー検索
            </v-list-item-title>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      right: true,
      rightDrawer: false,
      title: 'Enfile'
    }
  }
}
</script>

<style lang="scss" scoped>
.link-list {
  text-decoration: none;
}
</style>
