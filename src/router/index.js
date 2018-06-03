import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/Start'
import PokemonInfo from '@/pages/PokemonInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/:id',
      name: 'PokemonInfo',
      component: PokemonInfo
    }
  ],
  linkActiveClass: 'active'
})
