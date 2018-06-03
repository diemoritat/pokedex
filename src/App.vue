<template>
  <div id="app">
    <!-- <transition name="loader-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition> -->

    <Pokedex/>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import Pokedex from '@/layout/Pokedex'

export default {
  name: 'App',
  components: {
    'Loader': Loader,
    'Pokedex': Pokedex
  },
  data () {
    return {
      showLoader: true,
      view: 'Loader'
    }
  }
  // mounted () {
  //   window.setTimeout(() => {
  //     this.view = 'Pokedex'
  //   }, 10)
  // }
}
</script>

<style lang="scss">
  @import 'style/base';

  :root {
    --border-radius: 10px;
  }

  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(125deg,#ffe016 0%, #ffe016 15%, #ffd414 15%, #ffd414 30%, #ffc813 30%, #ffc813 45%, #ffbc13 45%, #ffbc13 60%, #ffb111 60%, #ffb111 75%, #ffa510 75%, #ffa510 90%,#ff9b0f 90%, #ff9b0f 100%);
  }

  .loader-fade-enter-active, .loader-fade-leave-active {
    transition: opacity .2s ease;
  }
  .loader-fade-enter, .loader-fade-leave-to {
    opacity: 0;
  }
</style>
