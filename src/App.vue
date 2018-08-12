<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png" class="game-logo" alt="Pokémon Quest">
    </div>
    <transition name="loader-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>

    <!-- <Pokedex/> -->
    <footer>
      <address>Made by <a href="https://github.com/diemoritat/pokedex">Nayara</a> with 🖤 </address>
    </footer>
    <div class="decoration decoration--pikachu"></div>
    <div class="decoration decoration--eevee"></div>
    <div class="decoration decoration--charmander"></div>
    <div class="decoration decoration--squirtle"></div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import Pokedex from '@/layout/Pokedex'

export default {
  name: 'App',
  components: {
    Loader: Loader,
    Pokedex: Pokedex
  },
  data() {
    return {
      // showLoader: true,
      view: 'Pokedex'
    }
  },
  mounted() {
    // this.view = 'Pokedex'
  }
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
  overflow: hidden;
  padding-bottom: 100px;
  background-image: linear-gradient(
    125deg,
    #ffe016 0%,
    #ffe016 15%,
    #ffd414 15%,
    #ffd414 30%,
    #ffc813 30%,
    #ffc813 45%,
    #ffbc13 45%,
    #ffbc13 60%,
    #ffb111 60%,
    #ffb111 75%,
    #ffa510 75%,
    #ffa510 90%,
    #ff9b0f 90%,
    #ff9b0f 100%
  );
}

.logo {
  margin: 0 auto 40px;
  width: 200px;

  img {
    max-width: 100%;
    height: auto;
  }
}

.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.2s ease;
}
.loader-fade-enter,
.loader-fade-leave-to {
  opacity: 0;
}

.decoration {
  position: absolute;
  bottom: -50px;
  width: 150px;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    animation: jump 0.5s ease-in-out;
    animation-iteration-count: 1;
  }

  &--charmander {
    background-image: url('./assets/charmander.png');
    left: 5vw;
  }

  &--eevee {
    background-image: url('./assets/eevee.png');
    left: 25vw;
  }

  &--pikachu {
    background-image: url('./assets/pikachu.png');
    left: 65vw;
  }

  &--squirtle {
    background-image: url('./assets/squirtle.png');
    left: 85vw;
  }
}

@keyframes jump {
  50% {
    bottom: -10px;
  }
}

footer {
  text-align: center;
  font-size: 11px;
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  z-index: 0;

  a {
    color: #223767;
  }
}
</style>
