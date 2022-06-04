export const alert = {
    namespaced: true,
    state,
    actions,
    mutations
};

const state = {
    type: null,
    message: null
};

// Actions are similar to mutations, the differences being that: Instead of mutating the state, actions commit mutations.
const actions = {
    success({ commit }, message) {
        commit('success', message); // commit mutation named : success
    },
    error({ commit }, message) {
        commit('error', message); // commit mutation named : error
    },
    clear({ commit }) {
        commit('clear'); // commit mutation named : clear
    }
};

// The only way to actually change state in a Vuex store is by committing a mutation
const mutations = {
    // when one of the mutation are call in actions, this will change state
    success(state, message) {
        state.type = 'alert-success';
        state.message = message;
    },
    error(state, message) {
        state.type = 'alert-danger';
        state.message = message;
    },
    clear(state) {
        state.type = null;
        state.message = null;
    }
};