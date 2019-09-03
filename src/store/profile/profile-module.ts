import { Module } from 'vuex';
import { RootState } from '@/types';
import { ProfileState } from './types';
import { Getters as ProfileGetters } from './profile-getters';
import { Actions as ProfileActions } from './profile-actions';
import { Mutations as ProfileMutations } from './profile-mutations';

export const state: ProfileState = {
    users: undefined,
    error: false,
    value: 0
};

const namespaced: boolean = true;
export const profile: Module<ProfileState, RootState> = {
    namespaced,
    state,
    getters: ProfileGetters,
    actions: ProfileActions,
    mutations: ProfileMutations
};
