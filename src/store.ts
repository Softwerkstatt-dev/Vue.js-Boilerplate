import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { profile } from './store/profile/profile-module';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    profile
  }
};

export default new Vuex.Store<RootState>(store);
