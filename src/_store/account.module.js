import { userService } from '../_services';
import { router } from '../router';

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};

// get user from local storage
const user = JSON.parse(localStorage.getItem('user'));
const state = user 
    ? { // if user saved in local storage, user state will be :
        status: { loggedIn: true }, 
        user 
      } 
    : { // if user not saved in local storage, user state will be : 
        status: {}, 
        user: null 
      };

// Actions are similar to mutations, the differences being that: Instead of mutating the state, actions commit mutations.
const actions = {
    login({ dispatch, commit }, { username, password }) {
        commit('loginRequest', { username });
    
        userService.login(username, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    router.push('/');
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }) {
        userService.logout();
        commit('logout');
    },
    register({ dispatch, commit }, user) {
        commit('registerRequest', user);
    
        userService.register(user)
            .then(
                user => {
                    commit('registerSuccess', user);
                    router.push('/login');
                    setTimeout(() => {
                        // display success message after route change completes
                        dispatch('alert/success', 'Registration successful', { root: true });
                    })
                },
                error => {
                    commit('registerFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

// The only way to actually change state in a Vuex store is by committing a mutation
const mutations = {
    // when one of the mutation are call in actions, this will change the state
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state) {
        state.status = { registering: true };
    },
    registerSuccess(state) {
        state.status = {};
    },
    registerFailure(state) {
        state.status = {};
    }
};