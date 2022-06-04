"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.account = void 0;

var _services = require("../_services");

var _router = require("../router");

var account = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
}; // get user from local storage

exports.account = account;
var user = JSON.parse(localStorage.getItem('user'));
var state = user ? {
  // if user saved in local storage, user state will be :
  status: {
    loggedIn: true
  },
  user: user
} : {
  // if user not saved in local storage, user state will be : 
  status: {},
  user: null
}; // Actions are similar to mutations, the differences being that: Instead of mutating the state, actions commit mutations.

var actions = {
  login: function login(_ref, _ref2) {
    var dispatch = _ref.dispatch,
        commit = _ref.commit;
    var username = _ref2.username,
        password = _ref2.password;
    commit('loginRequest', {
      username: username
    });

    _services.userService.login(username, password).then(function (user) {
      commit('loginSuccess', user);

      _router.router.push('/');
    }, function (error) {
      commit('loginFailure', error);
      dispatch('alert/error', error, {
        root: true
      });
    });
  },
  logout: function logout(_ref3) {
    var commit = _ref3.commit;

    _services.userService.logout();

    commit('logout');
  },
  register: function register(_ref4, user) {
    var dispatch = _ref4.dispatch,
        commit = _ref4.commit;
    commit('registerRequest', user);

    _services.userService.register(user).then(function (user) {
      commit('registerSuccess', user);

      _router.router.push('/login');

      setTimeout(function () {
        // display success message after route change completes
        dispatch('alert/success', 'Registration successful', {
          root: true
        });
      });
    }, function (error) {
      commit('registerFailure', error);
      dispatch('alert/error', error, {
        root: true
      });
    });
  }
}; // The only way to actually change state in a Vuex store is by committing a mutation

var mutations = {
  // when one of the mutation are call in actions, this will change the state
  loginRequest: function loginRequest(state, user) {
    state.status = {
      loggingIn: true
    };
    state.user = user;
  },
  loginSuccess: function loginSuccess(state, user) {
    state.status = {
      loggedIn: true
    };
    state.user = user;
  },
  loginFailure: function loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout: function logout(state) {
    state.status = {};
    state.user = null;
  },
  registerRequest: function registerRequest(state) {
    state.status = {
      registering: true
    };
  },
  registerSuccess: function registerSuccess(state) {
    state.status = {};
  },
  registerFailure: function registerFailure(state) {
    state.status = {};
  }
};