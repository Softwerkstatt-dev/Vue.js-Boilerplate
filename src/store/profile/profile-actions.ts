import { RootState } from '@/types';
import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User } from './types';


export const Actions: ActionTree<ProfileState, RootState> = {
  fetchProfiles({ commit }): any {
    console.log('Action fetchProfiles');
    axios({
      url: 'http://www.mocky.io/v2/5d6cd77630000058008fb883'
    }).then((response: { data: any }) => {
      const payload: User[] = response && response.data;
      commit('profileLoaded', payload);
    }, (error: any) => {
      console.error(error);
      commit('profileError');
    });
  },
  increment({ commit }): any {
    console.log('Action increment');
    commit('incrementCounter', 1);
  },
  incrementBy({ commit }, payload: number): any {
    console.log('Action increment by', payload);
    commit('incrementCounter', payload);
  }
};
