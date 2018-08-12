<template>
  <div class="pokedex">
      <div class="pokedex__holder">
        <div class="pokemon-info">
          <transition name="fade" mode="out-in" appear>
            <router-view/>
          </transition>
        </div>
        <div class="pokemon-list">
          <div class="pokemon-list__items">
            <router-link tag="div" :to="item.id" class="pokemon-link" v-for="(item, index) of itemList" :key="index">
              <span class="pokemon-link__id">{{ item.id.padStart(3, '0') }}</span>
              <a>
                <img :src="`/static/thumbnails/${item.id.padStart(3, '0')}.png`" class="pokemon-link__thumbnail" />
                <p class="pokemon-link__name">
                  {{ item.name }}
                </p>
              </a>
            </router-link>
          </div>
          <div class="pokemon-list__pagination">
            <div @click="prevPage" :class="{'pagination-button':true, active: button.prevActive}" :disabled="isFirstPage">&lt;</div>
            <div class="bullet-navigation">

            </div>
            <div @click="nextPage" :class="{'pagination-button':true, active: button.nextActive}" :disabled="isLastPage">&gt;</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Pokedex',
  data() {
    return {
      itemList: [],
      hostname: 'https://pokeapi.co/api/v2/pokemon/',
      param: '?limit=15',
      offset: 0,
      button: {
        prevActive: false,
        nextActive: false
      }
    }
  },
  methods: {
    scrapeIds(list) {
      this.itemList = list.map(item => {
        return {
          id: item.url.slice(34).replace('/', ''),
          name: item.name
        }
      })
    },
    getPage(offset, caller = null) {
      if (caller !== null) {
        caller === 'buttonNext'
          ? (this.button.nextActive = true)
          : (this.button.prevActive = true)
      }
      fetch(this.hostname + this.param + '&offset=' + offset)
        .then(blob => blob.json())
        .then(data => {
          this.offset = offset
          this.scrapeIds(data.results)
          if (caller !== null) {
            caller === 'buttonNext'
              ? (this.button.nextActive = false)
              : (this.button.prevActive = false)
          }
        })
    },
    nextPage() {
      if (this.offset + 15 === 150) {
        return false
      }
      this.getPage(this.offset + 15, 'buttonNext')
    },
    prevPage() {
      if (this.offset === 0) {
        return false
      }
      this.getPage(this.offset - 15, 'buttonPrev')
    }
  },
  mounted() {
    this.getPage(0)
  },
  computed: {
    isFirstPage() {
      return this.offset === 0
    },
    isLastPage() {
      return this.offset + 15 === 150
    }
  }
}
</script>

<style lang="scss">
.pokedex {
  width: 840px;
  height: 400px;
  background-image: linear-gradient(#651010 50%, #99979b 50%);
  border-radius: var(--border-radius);
  padding: 10px;

  &__holder {
    background-color: #f5efdc;
    height: 100%;
    border-radius: var(--border-radius);
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 2fr;

    .pokemon-info {
      position: relative;
      border-right: 3px solid #dcdcc3;

      &:after {
        content: '';
        display: block;
        border-right: 3px solid #e8e6cb;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
      }
    }

    .pokemon-list {
      border-left: 3px solid #dcdcc3;
      position: relative;

      &:before {
        content: '';
        display: block;
        border-left: 3px solid #e8e6cb;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
      }

      &__items {
        height: 80%;
        display: grid;
        grid-row-gap: 30px;
        grid-column-gap: 10px;
        margin-bottom: 20px;
        padding: 25px 50px;
        grid-template-columns: repeat(5, 1fr);

        .pokemon-link {
          font-size: 12px;
          background-color: #fff;
          box-shadow: 0px 5px 0px 0px #cccbca;
          width: 80px;
          height: 70px;
          border-radius: 0 10px 10px 10px;
          position: relative;
          padding: 5px;

          &.active {
            box-shadow: none;
            bottom: -5px;
          }

          a {
            text-decoration: none;
          }

          &__id {
            position: absolute;
            left: 0;
            top: -15px;
            background-color: #fff;
            border-radius: 10px 10px 0 0;
            padding: 3px 3px 0;
          }

          &__thumbnail {
            width: 55px;
            height: 50px;
            display: block;
            background-color: #cecece;
            border-radius: 10px;
            margin: 0 auto;
          }

          &__name {
            font-size: 13px;
            color: #000;
            text-decoration: none;
            text-align: center;
          }
        }
      }

      &__pagination {
        height: 20%;
        display: flex;
        justify-content: space-around;

        .pagination-button {
          display: inline;
          position: relative;
          width: 70px;
          height: 20px;
          border-radius: 10px;
          background-color: #dbdbc2;
          border: 2px solid #bdbda9;
          box-shadow: 0px 5px 0px 0px #bdbda9;
          cursor: pointer;
          text-align: center;
          padding-bottom: 2px;

          &[disabled],
          &:active,
          &.active {
            box-shadow: none;
            bottom: -5px;
          }

          &[disabled] {
            opacity: 0.3;
            cursor: not-allowed;
          }
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
