import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        toggleMenu: false,
    },
    mutations: {
        toggle (state) {
          state.toggleMenu =! state.toggleMenu
        },
        hide (state) {
          state.toggleMenu = false
        },
      }
})