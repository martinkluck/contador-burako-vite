import { createStore } from "vuex";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  games: [],
  timer: 60,
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  addGame(state,game) {
    state.games.push(game);
  },
  newPlayer(state, game, name) {
    state.player = {
      name: name,
      score: 0,
    };
    state.games.find((g) => g.name === game.name).players.push(player);
  },
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit("increment");
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("increment");
        resolve();
      }, 1000);
    });
  },
  newGame({ commit }, name) {
    const game = {
      players: [],
      name: name,
    };
    commit("addGame", game);
  },
};

// getters are functions.
const getters = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? "even" : "odd"),
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations,
});
