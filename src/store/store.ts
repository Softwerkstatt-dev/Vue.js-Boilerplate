
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { profile } from './modules/profile';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profile
  },
  plugins: [
    createPersistedState()
  ],
  strict: false,
});
