<template>
  <div v-if="product" class="product-card">
    <div class="bg-white shadow-md rounded-md p-2">
      <div class="flex">
        <div class="w-5/12 lg:w-5/12">
          <img
            v-lazy="getImgUrl(`stores/product-${product.id}.png`)"
            :alt="product.name"
            class="rounded-md"
          />
        </div>
        <div class="ml-3 py-2 w-6/12">
          <div class="max-w-full h-full flex flex-wrap">
            <h2 class="text-md block font-medium w-full truncate">
              {{ product.name }}
            </h2>
            <p class="w-full">$12.000</p>
            <div class="flex justify-between self-end text-sm font-medium">
              <div></div>
              <button
                class="mb-2 md:mb-0 bg-yellow-300 font-bold px-5 py-2 text-white rounded-md hover:bg-yellow-400"
                type="button"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getImgUrl } from "@/utils/utils";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return { getImgUrl };
  },
};
</script>
