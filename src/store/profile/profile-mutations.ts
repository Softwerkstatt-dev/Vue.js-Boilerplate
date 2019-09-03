import { MutationTree } from 'vuex';
import { ProfileState, User } from './types';


export const Mutations: MutationTree<ProfileState> = {
  profileLoaded(state: ProfileState, payload: User[]): void {
    state.error = false;
    state.users = payload;
  },
  profileError(state: ProfileState): void {
    state.error = true;
    state.users = undefined;
  },
  incrementCounter(state: ProfileState, payload: number): void {
    state.value += payload;
  }
};
