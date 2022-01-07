<template>
  <div class="mx-8 lg:mx-16 text-center h-screen flex items-center">
    <div class="w-full xl:w-8/12 xl:ml-16">
      <img
        class="mx-auto mb-10 w-6/12"
        alt="Best Pizza Logo"
        src="../assets/logo-black.png"
      />
      <h1 class="text-5xl font-semibold mb-4">Bienvenido</h1>
      <p class="text-2xl text-gray-500 mb-10">A las mejores pizzas del país</p>

      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  components: { LoginForm },
  setup() {},
};
</script>

<style lang="scss" scoped></style>
