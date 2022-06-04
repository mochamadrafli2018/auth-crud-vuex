"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = void 0;

var _services = require("../_services");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var users = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};
exports.users = users;
var state = {
  all: {}
}; // Actions are similar to mutations, the differences being that: Instead of mutating the state, actions commit mutations.

var actions = {
  getAll: function getAll(_ref) {
    var commit = _ref.commit;
    commit('getAllRequest'); // commit mutation named : getAllRequest

    _services.userService.getAll().then(function (users) {
      return commit('getAllSuccess', users);
    }, function (error) {
      return commit('getAllFailure', error);
    });
  },
  "delete": function _delete(_ref2, id) {
    var commit = _ref2.commit;
    commit('deleteRequest', id); // commit mutation named : deleteRequest

    _services.userService["delete"](id).then(function () {
      commit('deleteSuccess', id);
    })["catch"](function (error) {
      commit('deleteFailure', {
        id: id,
        error: error.toString()
      });
    });
  }
}; // The only way to actually change state in a Vuex store is by committing a mutation

var mutations = {
  // when one of the mutation are call in actions, this will change the state
  getAllRequest: function getAllRequest(state) {
    state.all = {
      loading: true
    };
  },
  getAllSuccess: function getAllSuccess(state, users) {
    state.all = {
      items: users
    };
  },
  getAllFailure: function getAllFailure(state, error) {
    state.all = {
      error: error
    };
  },
  deleteRequest: function deleteRequest(state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items = state.all.items.map(function (user) {
      return user.id === id ? _objectSpread({}, user, {
        deleting: true
      }) : user;
    });
  },
  deleteSuccess: function deleteSuccess(state, id) {
    // remove deleted user from state
    state.all.items = state.all.items.filter(function (user) {
      return user.id !== id;
    });
  }
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