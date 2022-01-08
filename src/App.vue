<template>
  <div class="main flex overflow-hidden h-screen">
    <div class="left-container">
      <router-link to="/" v-if="isLoggedIn">
        <img
          src="@/assets/logo-white.png"
          class="absolute w-24 top-12 left-24"
          alt="Best Pizza"
        />
      </router-link>
      <div class="container flex justify-center h-screen items-center">
        <img v-lazy="require('@/assets/pizza.png')" alt="background" />
      </div>
    </div>
    <div class="flex-grow relative">
      <router-view />
      <div
        v-if="isLoggedIn"
        class="fixed xl:absolute bottom-0 w-full text-white"
      >
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Footer from "@/components/Footer.vue";
import auth from "@/services/authService";

export default {
  components: { Footer },

  setup() {
    const route = useRoute();
    let isLoggedIn = ref(!!auth.getCurrentSession());

    // Watch route changes to refresh the isLoggedIn variable
    watch(
      () => route.name,
      () => (isLoggedIn.value = !!auth.getCurrentSession())
    );

    return { isLoggedIn };
  },
};
</script>

<style lang="scss">
#app {
  @apply w-full h-screen;

  .main > div {
    @apply h-screen;
  }

  .left-container {
    background-image: url("./assets/bg.png");
    @apply w-5/12 2xl:w-4/12 bg-cover bg-no-repeat hidden lg:block relative;
  }
}

img[lazy] {
  @apply opacity-0 transition-opacity duration-200;
}

img[lazy="loaded"] {
  @apply opacity-100;
}
</style>
