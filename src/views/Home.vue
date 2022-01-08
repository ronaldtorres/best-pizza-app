<template>
  <div class="mx-8 lg:mx-16 relative">
    <div class="flex justify-end mt-2">
      <button class="flex p-3" @click="logout">
        <img width="20" src="@/assets/ic_password.png" alt="logout" />
        <span class="text-gray-600 font-semibold ml-1">Salir</span>
      </button>
    </div>

    <div class="w-full xl:w-10/12 pb-32">
      <p
        class="text-gray-500 border-yellow-300 border-b-2 inline-block mb-8 px-2"
      >
        Pizzerías
      </p>
      <header class="mb-12">
        <h1 class="text-3xl font-bold">Tiendas</h1>
        <p class="text-gray-500 text-xl">Escoge tu pizzería favorita</p>
      </header>

      <div
        v-if="stores"
        class="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-x-10 gap-y-6"
      >
        <template v-for="store in stores" :key="store.id">
          <StoreCard :data="store" @click="showStoreDetails(store)" />
        </template>
      </div>

      <StoreModal ref="modal" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import auth from "@/services/authService";
import storesService from "@/services/storesService";
import StoreCard from "@/components/StoreCard.vue";
import StoreModal from "@/components/StoreModal.vue";

export default {
  name: "Home",
  components: {
    StoreCard,
    StoreModal,
  },
  setup() {
    let stores = ref([]);
    let modal = ref(null);
    const router = useRouter();

    onMounted(async () => {
      stores.value = await storesService.all();
    });

    const showStoreDetails = (store) => {
      modal.value.open(store);
    };

    const logout = () => {
      auth.removeSessionForUser();
      router.push({ name: "Login" });
    };

    return { stores, showStoreDetails, modal, logout };
  },
};
</script>

<style lang="scss"></style>
