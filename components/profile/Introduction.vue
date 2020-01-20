<template>
  <v-card class="mx-auto my-3" max-width="auto">
    <v-card class="mx-auto" max-width="auto" outlined>
      <v-card-title primary-title>
        自己紹介
      </v-card-title>
      <v-card-text>
        hogehogehogehogehogehogehogehoeghhoehegheogheoheohehgegheoheheogh
      </v-card-text>

      <v-divider />
      <v-card-title primary-title>
        業務経験
      </v-card-title>
      <div v-for="n in 2" :key="n">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>株式会社×××××</v-list-item-title>
            <v-list-item-subtitle>
              アルバイト
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              使用言語：C言語
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              開発ジャンル：ハード
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              2019/01 - 2019/10
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider />
      <v-card-title primary-title>
        成果物
      </v-card-title>
      <div v-for="n in 2" :key="n">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>hogeシステム</v-list-item-title>
            <v-list-item-subtitle>
              個人
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              使用言語：C言語
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              開発ジャンル：ハード
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              2019/01 - 2019/10
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider />
      <v-card-title primary-title>
        使ったことある技術
      </v-card-title>
      <div v-for="n in 2" :key="n">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>C言語</v-list-item-title>
            <v-list-item-subtitle>
              レベル：3
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              期間：3年
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              何に使ったか：アルバイトで使用
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider />
      <v-card-title primary-title>
        使いたくない技術
      </v-card-title>
      <div v-for="n in 2" :key="n">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>C言語</v-list-item-title>
            <v-list-item-subtitle>
              レベル：3
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              期間：3年
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              何に使ったか：アルバイトで使用
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider />
      <v-card-title primary-title>
        使っているOS
      </v-card-title>
      <div v-for="n in 2" :key="n">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>C言語</v-list-item-title>
            <v-list-item-subtitle>
              レベル：3
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              期間：3年
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              何に使ったか：アルバイトで使用
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider />
      <v-card-title primary-title>
        使っているOS
      </v-card-title>
      <div v-for="n in 2" :key="n">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>C言語</v-list-item-title>
            <v-list-item-subtitle>
              レベル：3
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              期間：3年
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              何に使ったか：アルバイトで使用
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider />
      <v-card-title primary-title>
        基本プロフィール
      </v-card-title>
      <v-card-text>
        <p>男性</p>
        <p>生年月日：1996/01/21</p>
      </v-card-text>

      <v-divider />
      <v-card-title primary-title>
        連絡先
      </v-card-title>
      <v-card-text>
        <ul>
          <li>
            <a href="https://twitter.com/xxxxxxx">
              https://twitter.com/xxxxxxx
            </a>
          </li>
          <li>
            <a href="https://twitter.com/xxxxxxx">
              https://twitter.com/xxxxxxx
            </a>
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </v-card>
</template>
