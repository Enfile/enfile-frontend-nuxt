<template>
  <div>
    <top-icon />
    <div class="introduction">
      <v-card class="mx-auto my-3" max-width="auto">
        <v-card class="mx-auto" max-width="auto" outlined>
          <v-card-title primary-title>
            基本プロフィール
          </v-card-title>
          <v-card-text>
            <p v-if="user.profile.sex === 1">
              男性
            </p>
            <p v-else-if="user.profile.sex === 2">
              女性
            </p>
            <p v-else>
              不明
            </p>

            <p>生年月日：{{ user.profile.birth_day }}</p>
          </v-card-text>

          <v-divider />
          <v-card-title primary-title>
            自己紹介
          </v-card-title>
          <v-card-text>
            {{ user.profile.profile }}
          </v-card-text>

          <v-divider />
          <v-card-title primary-title>
            業務経験
          </v-card-title>
          <div
            v-for="experience in user.experiences"
            :key="experience.created_at"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  種類: {{ experience.experience_type }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  使用技術: {{ experience.technology }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  URL: {{ experience.link }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  説明: {{ experience.text }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>

          <v-divider />
          <v-card-title primary-title>
            成果物
          </v-card-title>
          <div v-for="product in user.products" :key="product.created_at">
            <v-list-item three-line>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    種類: {{ product.product_type }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    使用技術: {{ product.technology }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    URL: {{ product.link }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    説明: {{ product.text }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item>
          </div>

          <v-divider />
          <v-card-title primary-title>
            技術
          </v-card-title>
          <div
            v-for="technology in user.technologies"
            :key="technology.created_at"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  技術名： {{ technology.name }}
                </v-list-item-subtitle>

                <v-list-item-subtitle>
                  レベル： {{ technology.technology_level }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  使用期間：{{
                    technology.years_of_experience +
                      '年' +
                      technology.months_of_experience +
                      'ヶ月'
                  }}
                </v-list-item-subtitle>
                <v-list-item-subtitle v-if="technology.not_want_to_use">
                  使いたくない
                </v-list-item-subtitle>
                <v-list-item-subtitle v-else>
                  使いたい
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>

          <v-divider />
          <v-card-title primary-title>
            使っているOS
          </v-card-title>
          <v-card-text>
            {{ user.profile.using_os }}
          </v-card-text>

          <v-divider />
          <v-card-title primary-title>
            連絡先
          </v-card-title>
          <v-card-text>
            {{ user.profile.contact }}
          </v-card-text>
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
import TopIcon from '@/components/profile/TopIcon.vue'

export default {
  layout: 'user-detail',
  components: { TopIcon },
  data: () => ({
    user: {
      user_id: '',
      account: {
        sub: '',
        created_at: '',
        updated_at: ''
      },
      profile: {
        profile_id: '',
        icon_path: '',
        name: '',
        sex: 0,
        birth_day: null,
        school_year: null,
        school_name: '',
        profile: '',
        using_os: '',
        link: '',
        contact: '',
        created_at: '',
        updated_at: ''
      },
      experiences: [],
      products: [],
      technologies: [],
      is_active: true,
      created_at: '',
      updated_at: ''
    }
  }),
  async created() {
    const userId = this.$route.params.id
    await this.$axios
      .$get(`/user/${userId}`)
      .then(response => {
        this.user = response
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>
.indention {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
