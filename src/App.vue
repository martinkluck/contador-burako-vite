<template>
  <header
    class="text-gray-700 dark:text-white bg-white dark:bg-gray-800 body-font"
  >
    <div
      class="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row"
    >
      <router-link
        class="flex items-center w-40 mb-4 font-medium text-gray-900 dark:text-white title-font md:mb-0 cursor-pointer"
        to="/"
      >
        <h3>Contador Burako</h3>
      </router-link>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-auto"
      >
        <router-link
          class="mr-5 text-sm font-semibold text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 cursor-pointer"
          to="/about"
        >
          Acerca de
        </router-link>
      </nav>
    </div>
  </header>
  <div
    class="container w-full p-4 mx-auto text-center bg-white dark:bg-gray-800"
  >
    <router-view
      class="italic tracking-tighter text-md title-font"
    ></router-view>
  </div>
  <footer
    class="text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-200 body-font"
  >
    <div>
      <div
        class="flex flex-wrap items-center justify-center px-5 py-6 mx-auto text-base bg-gray-900"
      >
        <div
          class="flex flex-wrap items-center justify-center mx-auto text-base"
        >
          <p class="mr-5 text-sm text-center text-gray-200">
            © Your Company — 2020
          </p>

          <a
            href="#"
            class="justify-center mr-5 text-sm text-center text-gray-200 hover:text-blue-700"
          >
            All rights Reserves</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
