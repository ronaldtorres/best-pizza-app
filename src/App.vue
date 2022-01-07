<template>
  <div class="main flex">
    <div class="left-container hidden lg:block">
      <div class="container flex justify-center h-screen items-center">
        <img src="./assets/pizza.png" alt="background" />
      </div>
    </div>
    <div class="flex-grow">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  @apply w-full h-screen;

  .main > div {
    @apply h-screen;
  }

  .left-container {
    background-image: url("./assets/bg.png");
    @apply w-5/12 bg-cover bg-no-repeat;
  }
}
</style>
