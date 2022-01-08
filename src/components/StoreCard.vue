<template>
  <div class="card cursor-pointer">
    <div class="card-image mb-3 relative overflow-hidden">
      <img
        class="aspect-square w-full"
        v-lazy="getImgUrl(`store-${data.id}`)"
        :alt="data.name"
      />
      <img
        class="aspect-square w-full absolute object-cover inset-0"
        v-lazy="getImgUrl(`store-${data.id}-alt`)"
        :alt="data.name + 'food'"
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
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const getImgUrl = (name) => require(`../assets/stores/${name}.png`) ?? "";

    return {
      getImgUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  .card-image img:nth-child(2) {
    opacity: 0;
    transform: translateY(100%);
    width: 0px;
    @apply transition-all duration-300;
  }

  &:hover {
    .card-image img:nth-child(2) {
      transform: translateY(0%);
      opacity: 1;
      width: auto;
    }
  }
}
</style>
