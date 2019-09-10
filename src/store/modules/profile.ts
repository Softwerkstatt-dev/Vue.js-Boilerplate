import { MutationTree, Module, GetterTree, ActionTree } from 'vuex';
import axios from 'axios';
import { RootState } from './types';

export interface User {
  firstName: string;
  lastName: string;
}

export interface ProfileState {
  users?: User[];
  error: boolean;
  value: number;
}

export const state: ProfileState = {
  users: undefined,
  error: false,
  value: 0
};

const getters: GetterTree<ProfileState, RootState> = {
  fullNames(s: ProfileState): string {
    if (!s.users) {
      return '';
    }
    let result = '';
    s.users.forEach((user) => {
      const firstName = (user && user.firstName) || '';
      const lastName = (user && user.lastName) || '';
      result += `${firstName} ${lastName} `;
    });
    return result.trimEnd();
  },
  count(s: ProfileState): number {
    return s.value;
  }
};

const actions: ActionTree<ProfileState, RootState> = {
  fetchUser({ commit }): any {
    axios({
      url: 'http://www.mocky.io/v2/5d6cd77630000058008fb883'
    }).then((response: { data: any }) => {
      const payload: User[] = response && response.data;
      commit('profileLoaded', payload);
    }, (error: any) => {
      commit('profileError', error);
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

const mutations: MutationTree<ProfileState> = {
  profileLoaded(s: ProfileState, payload: User[]): void {
    s.error = false;
    s.users = payload;
  },
  profileError(s: ProfileState, error: any): void {
    s.error = true;
    s.users = undefined;
  },
  incrementCounter(s: ProfileState, payload: number): void {
    s.value += payload;
  }
};

const namespaced: boolean = true;
export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
