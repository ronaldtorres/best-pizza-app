<template>
  <div class="store-card cursor-pointer">
    <div class="card-image mb-3 relative overflow-hidden">
      <span class="overlay rounded-md flex items-center justify-center">
        <span class="text-lg font-semibold leading-5 text-gray-800 text-center">
          {{ data.description }}
        </span>
      </span>
      <img
        class="aspect-square w-full"
        v-lazy="getImgUrl(`stores/store-${data.id}.png`)"
        :alt="data.name"
      />
    </div>
    <div class="card-text">
      <p class="font-bold text-lg text-gray-900 truncate">
        {{ data.name }}
      </p>
      <p class="text-gray-500">{{ data.address }}</p>
    </div>
  </div>
</template>

<script>
import { getImgUrl } from "@/utils/utils";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  setup() {
    return {
      getImgUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.store-card {
  .card-image {
    .overlay {
      @apply inset-0 absolute bg-yellow-300 opacity-0 transition;
    }
  }

  &:hover {
    .card-image .overlay {
      opacity: 1;
    }
  }
}
</style>
