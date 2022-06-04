<template>
  <div
    :style="{ width: `${width}px` }"
    class="bg-cream box-shadow relative-position q-pa-xs"
  >
    <q-img :class="{ grayscale: soon }" :src="imageUrl"></q-img>
    <!--  Coming soon overlay -->
    <div
      v-if="soon"
      class="img-overlay text-white row items-center justify-center fn-lg rounded-borders text-uppercase"
    >
      <p>Coming soon</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  soon?: boolean;
  width: number;
  imageUrl: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.6);
}
</style>
