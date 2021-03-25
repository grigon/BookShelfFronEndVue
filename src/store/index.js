import Vue from 'vue';
import Vuex from 'vuex';

import { dataService } from '../shared';
import {
    GET_BOOKS,
} from './mutation-types';

Vue.use(Vuex);

const state = () => ({
    books: [],
});

const mutations = {
    [GET_BOOKS](state, books) {
        state.books = books;
    },
};

const actions = {
    async getHeroesAction({ commit }) {
        const heroes = await dataService.getHeroes();
        commit(GET_BOOKS, books);
    },
};

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations,
    actions,
});