<template>
  <div class="login-form">
    <div class="input">
      <input type="email" v-model="email" placeholder="Usuario" />
      <img class="input-icon" src="../assets/ic_user.png" alt="" />
    </div>
    <div class="input">
      <input type="password" v-model="password" placeholder="Contraseña" />
      <img class="input-icon" src="../assets/ic_password.png" alt="" />
    </div>

    <a class="font-semibold mt-2 mb-8 block" href="#">
      ¿Olvidaste tu contraseña?
    </a>
    <button @click="login">Iniciar Sesión</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import auth from "@/services/authService";

export default {
  name: "LoginForm",
  setup() {
    const router = useRouter();
    const form = reactive({
      email: "",
      password: "",
    });

    const login = async () => {
      let user = await auth.login(form.email, form.password);

      if (user) {
        auth.setSessionForUser(user);
        router.push({ name: "Home" });
        return;
      }

      console.error("Invalid Credentials");
    };

    return { login, ...toRefs(form) };
  },
};
</script>

<style lang="scss" scoped>
.input {
  @apply relative mb-4;
  input {
    @apply appearance-none 
      border 
      rounded 
      w-full 
      py-4 px-3 
      text-gray-700 
      leading-tight 
      focus:outline-none;
  }

  .input-icon {
    width: 5%;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    @apply absolute z-10 right-4;
  }
}

button {
  @apply w-full 
    inline-flex 
    items-center 
    justify-center 
    px-4 py-3 
    bg-yellow-300 
    border
    border-transparent 
    rounded-sm
    font-semibold
    text-black 
    hover:bg-yellow-400
    focus:outline-none 
    focus:ring 
    focus:ring-red-200 
    shadow-md
    transition;
}
</style>
