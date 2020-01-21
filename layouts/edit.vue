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
        <v-row>
          <v-col cols="2">
            <v-card class="mx-auto" outlined>
              <v-navigation-drawer permanent>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      登録情報編集
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider />

                <v-list dense nav>
                  <nuxt-link to="/edit/profile" no-prefetch class="link-list">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          プロフィール
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </nuxt-link>
                  <nuxt-link
                    to="/edit/experiences"
                    no-prefetch
                    class="link-list"
                  >
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          業務経験
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </nuxt-link>
                  <nuxt-link to="/edit/products" no-prefetch class="link-list">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          成果物
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </nuxt-link>
                  <nuxt-link
                    to="/edit/technologies"
                    no-prefetch
                    class="link-list"
                  >
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          技術
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </nuxt-link>
                </v-list>
              </v-navigation-drawer>
            </v-card>
          </v-col>
          <v-col cols="10">
            <nuxt />
          </v-col>
        </v-row>
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
