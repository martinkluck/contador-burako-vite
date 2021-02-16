<template>
  <h1 class="text-2xl text-gray-900 dark:text-white">Contador Burako</h1>
  <div>
    <button
      v-if="!state.create"
      @click="state.create = true"
      class="inline-flex px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none"
    >
      Crear Nueva Partida
    </button>
    <div v-else>
      <form @submit.prevent="createGame" class="flex justify-center mt-6">
        <input
          type="text"
          id="name"
          v-model="state.name"
          placeholder="Nombre de la partida"
          class="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base text-gray-700 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-500 sm:mb-0 focus:bg-white"
        />
        <button
          type="submit"
          class="inline-flex px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none"
        >
          Crear
        </button>
      </form>
    </div>
    <div v-if="games.length > 0">
      <div v-for="game in games" :key="game.name">
        {{ game.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    const state = reactive({
      create: false,
      name: '',
    });

    function createGame() {
      store.dispatch("newGame", state.name);
      console.log(store.state);
    }

    return {
      state,
      createGame,
      games: computed(() => store.state.games),
    };
  },
};
</script>
