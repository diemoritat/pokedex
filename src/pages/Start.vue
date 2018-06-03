<template>
  <div class="initial">
    <p class="initial__message">{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
      msg: 'Choose a pokémon'
    }
  }
}
</script>

<style lang="scss">
  .initial {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
