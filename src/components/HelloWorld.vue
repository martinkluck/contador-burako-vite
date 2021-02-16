<template>
  <div class="container">
    <h3 class="text-2xl">
      Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    </h3>
    <button
      class="inline-flex px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none"
      @click="increment"
    >
      +
    </button>
    <button
      class="inline-flex px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none"
      @click="decrement"
    >
      -
    </button>
    <button
      class="inline-flex px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none"
      @click="incrementIfOdd"
    >
      Increment if odd
    </button>
    <button
      class="inline-flex px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none"
      @click="incrementAsync"
    >
      Increment async
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    return {
      count: computed(() => store.state.count),
      evenOrOdd: computed(() => store.getters.evenOrOdd),
      increment: () => store.dispatch("increment"),
      decrement: () => store.dispatch("decrement"),
      incrementIfOdd: () => store.dispatch("incrementIfOdd"),
      incrementAsync: () => store.dispatch("incrementAsync"),
    };
  },
};
</script>
