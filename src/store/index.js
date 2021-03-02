import Vue from 'vue'
import Vuex from 'vuex'

import decode from 'jwt-decode';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: ''
  },
  mutations: {
    getUser(state, payload) {
      state.token = payload;
      if(payload === '') {
        state.user = ''
      } else {
        state.user = decode(payload)
      }
    }
  },
  actions: {
    saveUser({commit}, payload) {
      localStorage.setItem('token', payload)
      commit('getUser', payload)
    }
  },
  modules: {
  }
})
