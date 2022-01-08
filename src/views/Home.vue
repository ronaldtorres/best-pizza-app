<template>
  <div class="mx-8 lg:mx-16 relative overflow-y-auto max-h-screen">
    <div class="flex justify-end mt-2">
      <button class="flex p-3" @click="logout">
        <img width="20" src="@/assets/ic_password.png" alt="logout" />
        <span class="text-gray-600 font-semibold ml-1">Salir</span>
      </button>
    </div>

    <div class="w-full xl:w-10/12 2xl:w-8/12 pb-32">
      <p
        class="text-gray-500 border-yellow-300 border-b-2 inline-block mb-8 px-2"
      >
        Pizzerías
      </p>
      <header class="mb-12 flex flex-wrap md:justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold">Tiendas</h1>
          <p class="text-gray-500 text-xl mb-2">Escoge tu pizzería favorita</p>
        </div>
        <div class="input w-full md:w-1/2 px-0 mb-0">
          <input
            type="text"
            name="search"
            placeholder="Buscar"
            @input="search"
          />
        </div>
      </header>

      <div
        v-if="storesResult.length"
        class="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-x-10 gap-y-6"
      >
        <template v-for="store in storesResult" :key="store.id">
          <StoreCard :data="store" @click="showStoreDetails(store)" />
        </template>
      </div>
      <p v-else class="text-gray-500">Sin Resultados.</p>

      <StoreModal ref="modal" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import auth from "@/services/authService";
import storesService from "@/services/storesService";
import { debounce } from "@/utils/utils";

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
    let storesResult = ref([]);
    let modal = ref(null);
    const router = useRouter();

    onMounted(async () => {
      stores.value = await storesService.all();
      storesResult.value = stores.value;
    });

    const showStoreDetails = (store) => {
      modal.value.open(store);
    };

    // Implement search with input event debounce
    const search = debounce((e) => {
      let value = e.target.value?.toLowerCase();
      if (stores.value && value) {
        storesResult.value = stores.value.filter((s) =>
          s.name.toLowerCase().includes(value)
        );
      } else {
        storesResult.value = stores.value;
      }
    }, 300);

    const logout = () => {
      auth.removeSessionForUser();
      router.push({ name: "Login" });
    };

    return { showStoreDetails, modal, logout, search, storesResult };
  },
};
</script>

<style lang="scss"></style>
