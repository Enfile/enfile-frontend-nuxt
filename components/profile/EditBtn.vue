<template>
  <div>
    <ul class="edit">
      <li>
        <button @click="edit">
          <v-btn class="mx-2" fab dark small color="cyan">
            <v-icon dark>
              mdi-pencil
            </v-icon>
          </v-btn>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    edit: function() {
      this.edit_fig = true
    }
  }
}
</script>
