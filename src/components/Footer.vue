<template>
  <footer
    class="w-full bg-black flex justify-between items-center py-4 px-8 lg:px-16"
  >
    <div class="social flex">
      <a class="mr-2" href="https://facebook.com" target="_blank">
        <img
          src="@/assets/facebook.svg"
          width="24"
          alt="Facebook of Best Pizza"
        />
      </a>
      <a href="https://instagram.com" target="_blank">
        <img
          src="@/assets/instagram.svg"
          width="24"
          alt="Intagram of Best Pizza"
        />
      </a>
    </div>
    <div>
      <router-link to="/">
        <img src="@/assets/logo-mono.png" width="80" alt="Best Pizzas Logo" />
      </router-link>
    </div>
  </footer>
</template>
