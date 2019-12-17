<template>
  <div>
    <v-chip class="ma-2" label>
      <v-avatar tile left class="level-block white">
        {{ level }}
      </v-avatar>
      {{ technology }}
    </v-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      level: 1,
      technology: 'Scala'
    }
  }
}
</script>

<style lang="scss" scoped>
.level-block {
  border-radius: 2px;
}
</style>
