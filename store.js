import Vue from 'vue'
import Vuex from 'vuex'

import {COUNT_UP, COUNT_DOWN, SET_COUNT_START} from './actions/types/Test'

Vue.use(Vuex)

const store = new Vuex.Store({
	/*
	init state
	 */
    state: {
        count: 0
    },

    /**
     * action creator
     * @type {object}
     */
    mutations: {
        [COUNT_UP] (state, payload = {}) {
            state.count ++
        },

        [COUNT_DOWN] (state, payload = {}) {
            state.count --
        },

        [SET_COUNT_START] (state, payload = {}) {
        	state.count = payload.value
        }
    }
})

export default store;