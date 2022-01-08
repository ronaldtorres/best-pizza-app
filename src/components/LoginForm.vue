<template>
  <form class="login-form" @submit.prevent>
    <div class="input mb-4">
      <input
        type="email"
        v-model="email"
        required
        placeholder="Usuario"
        @blur="checkEmail"
      />
      <img class="input-icon" src="../assets/ic_user.png" alt="" />
    </div>
    <div class="input mb-4">
      <input
        type="password"
        v-model="password"
        required
        placeholder="Contraseña"
      />
      <img class="input-icon" src="../assets/ic_password.png" alt="" />
    </div>

    <p class="text-red-400 relative pb-6">
      <span v-if="error" class="absolute block inset-0"> {{ error }} </span>
    </p>

    <a class="font-semibold mt-2 mb-8 block" href="#">
      ¿Olvidaste tu contraseña?
    </a>
    <button class="button" @click="login">Iniciar Sesión</button>
  </form>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import auth from "@/services/authService";
import { validateEmail } from "@/utils/utils";

export default {
  name: "LoginForm",
  setup() {
    const router = useRouter();
    let error = ref("");
    const form = reactive({
      email: "",
      password: "",
    });

    const login = async () => {
      if (error.value) return;

      let user = await auth.login(form.email, form.password);

      if (user) {
        auth.setSessionForUser(user);
        router.push({ name: "Home" });
        return;
      }

      setError("Credenciales Incorrectas");
      setTimeout(() => setError(""), 2000);
    };

    const checkEmail = () => {
      if (form.email && !validateEmail(form.email)) {
        setError("Email inválido");
      } else {
        setError("");
      }
    };

    const setError = (msg) => (error.value = msg);

    return { login, ...toRefs(form), checkEmail, error };
  },
};
</script>

<style lang="scss" scoped>
.button {
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
    shadow-md
    transition;
}
</style>
