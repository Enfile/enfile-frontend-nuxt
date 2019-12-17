<template>
  <div>
    <v-chip class="ma-2" label>
      <span class="level-block">{{ level }}</span>
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
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  font-weight: bold;
  font-size: larger;
  margin-right: 10px;
  border-radius: 2px;
  border: 1.5px solid;
  box-sizing: content-box;
}
</style>
