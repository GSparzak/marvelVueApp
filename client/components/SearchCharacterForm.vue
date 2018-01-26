<template>
  <div class="search-character-form">
      <form @submit.prevent
            @submit="handleSearch()">

          <div class="ui action input">
              <input v-model="name" placeholder="Character name" type="text" required >
              <button class="ui button pink icon"><i class="search icon"></i> Search</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    data: function () {
        return {
            name: ''
        }
    },
    methods: {
        handleSearch () {
            this.$store.dispatch('FETCH_CHARACTERS', this.name)
        }
    }
}
</script>

<style lang="css">
</style>
