import { userService } from '../_services';

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
};

const state = {
    all: {}
};

// Actions are similar to mutations, the differences being that: Instead of mutating the state, actions commit mutations.
const actions = {
    getAll({ commit }) {
        commit('getAllRequest'); // commit mutation named : getAllRequest

        userService.getAll()
            .then(
                users => commit('getAllSuccess', users),
                error => commit('getAllFailure', error)
            );
    },

    delete({ commit }, id) {
        commit('deleteRequest', id); // commit mutation named : deleteRequest

        userService.delete(id)
            .then(() => {
                commit('deleteSuccess', id) 
            })
            .catch((error) => {
                commit('deleteFailure', { id, error: error.toString() }) 
            })
    }
};

// The only way to actually change state in a Vuex store is by committing a mutation
const mutations = {
    // when one of the mutation are call in actions, this will change the state
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, users) {
        state.all = { items: users };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    deleteRequest(state, id) {
        // add 'deleting:true' property to user being deleted
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        )
    },
    deleteSuccess(state, id) {
        // remove deleted user from state
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    /*
    deleteFailure(state, { id, error }) {
        // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                // make copy of user without 'deleting:true' property
                const { deleting, ...userCopy } = user;
                // return copy of user with 'deleteError:[error]' property
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    }*/
};