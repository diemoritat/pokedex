<template>
  <div class="pokemon">
    <Loader v-if="loading" />
    <div v-if="!loading" class="pokemon__content">
      <div class="pokemon__id">
        No. {{ $route.params.id }}
      </div>
      <div class="pokemon__image">
        <img :src="pokemon.image" alt="">
      </div>
      <div class="pokemon__name">
        {{ pokemon.name }}
      </div>
      <div class="pokemon__info">
        <div v-for="type of pokemon.types" :key="type.slot">
          {{type.type.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Loader'

export default {
  name: 'PokemonInfo',
  components: {
    'Loader': Loader
  },
  data () {
    return {
      loading: false,
      error: null,
      id: this.$route.params.id,
      pokemon: {
        number: '',
        name: '',
        types: [],
        image: ''
      }
    }
  },
  methods: {
    fetchData () {
      this.loading = true

      const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      const apiUrl = 'http://pokeapi.co/api/v2/pokemon/'

      axios.get(proxyUrl + apiUrl + this.$route.params.id)
        .then(result => {
          this.loading = false
          this.pokemon.number = this.id
          this.pokemon.name = result.data.name
          this.pokemon.types = result.data.types
          this.pokemon.image = result.data.sprites.front_default
        })
        .catch(error => console.error(error))
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>

<style lang="scss">
  .pokemon {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &__id {
      color: #353233;
      font-size: 24px;
      text-align: center;
    }

    &__image {
      margin: 0 auto 5px;
      border: 5px solid #cbc7aa;
      border-radius: var(--border-radius);
      width: 230px;

      img {
        width: 100%;
      }
    }

    &__name {
      text-align: center;
      font-size: 20px;
      text-transform: capitalize;
    }

    &__info {
      margin: 0 5px;
      border-top: 1px solid #f1bf41;
      text-align: center;
    }
  }
</style>
