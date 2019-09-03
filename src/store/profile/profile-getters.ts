import { GetterTree } from 'vuex';
import { RootState } from '@/types';
import { ProfileState } from './types';

export const Getters: GetterTree<ProfileState, RootState> = {
  fullNames(state: ProfileState): string {
    if (!state.users) {
      return '';
    }
    let result = '';
    state.users.forEach((user) => {
      const firstName = (user && user.firstName) || '';
      const lastName = (user && user.lastName) || '';
      result += `${firstName} ${lastName} `;
    });
    return result.trimEnd();
  },
  count(state: ProfileState): number {
    return state.value;
  }
};
