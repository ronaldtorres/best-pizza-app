<template>
  <div v-if="store" class="modal relative z-20">
    <div class="overlay fixed inset-0 bg-black opacity-30" @click="close"></div>
    <div class="modal-info shadow-md">
      <div class="modal-head w-full">
        <div class="w-full bg-yellow-300 h-40 rounded-t-md"></div>
        <button class="absolute top-2 right-2 px-4 py-3 rounded" @click="close">
          <img src="@/assets/close.svg" class="w-4" />
        </button>
        <div class="absolute -mt-14 md:-mt-20 ml-6 bg-white rounded-full p-2">
          <div
            class="relative w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden shadow-md"
          >
            <img
              class="w-full object-fill absolute inset-0"
              v-lazy="getImgUrl(`stores/store-${store.id}.png`)"
              :alt="store.name"
            />
          </div>
        </div>
      </div>
      <div class="modal-body bg-white px-6 py-10 mt-10 rounded-b-md">
        <h2 class="text-2xl font-bold">{{ store.name }}</h2>
        <p class="text-gray-500 mb-1">{{ store.description }}</p>
        <div class="flex items-center">
          <img class="w-3 inline-block" src="@/assets/location.svg" />
          <span class="ml-2 text-gray-700">{{ store.address }}</span>
        </div>
        <div class="mb-8">
          <h3
            class="text-xl inline-block font-semibold my-4 border-b-2 border-yellow-300"
          >
            Productos
          </h3>
          <div class="grid lg:grid-cols-2 gap-2">
            <ProductCard v-for="p in store.products" :key="p.id" :product="p" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { getImgUrl } from "@/utils/utils";

import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  setup() {
    let store = ref(null);

    const open = (value) => {
      store.value = value;
    };

    const close = () => {
      store.value = null;
    };

    return { open, close, store, getImgUrl };
  },
};
</script>

<style lang="scss" scoped>
.modal-info {
  max-height: 80vh;
  overflow-y: scroll;
  @apply w-11/12
    lg:max-w-2xl
    lg:w-6/12
    rounded-lg
    bg-white 
    mx-auto 
    fixed 
    left-2/4
    top-2/4;

  transform: translate(-50%, -50%);
}

.modal-head img {
  width: 101.5%;
  height: 101.5%;
}

// /* Hide scrollbar for Chrome, Safari and Opera */
// .no-scrollbar::-webkit-scrollbar {
//   display: none;
// }

// /* Hide scrollbar for IE, Edge and Firefox */
// .no-scrollbar {
//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
// }
</style>
