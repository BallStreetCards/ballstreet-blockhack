<template>
  <!-- Overlay -->
  <div :class="{ grayscale: soon, 'op-40': soon, 'no-pointer-events': soon }">
    <!-- Bar -->
    <div class="h-bar b-round overflow-hidden row">
      <div class="bg-primary" :style="{ width: `${p1}%` }"></div>
      <div class="bg-accent" :style="{ width: `${p2}%` }"></div>
      <div class="bg-brown op-10" :style="{ width: `${100 - p1 - p2}%` }"></div>
    </div>

    <!-- Bar Label -->
    <div class="text-center fn-md fn-700 text-uppercase text-brown">
      <p class="q-mb-none q-mt-md">{{ p1 }}%</p>
      <p class="q-mb-none op-60 fn-500">Available</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  soon?: boolean;
}
defineProps<Props>();
const p1 = 50;
const p2 = 33;
</script>

<style lang="scss" scoped>
.h-bar {
  height: 10px;
}

.b-round {
  border-radius: 9999px;
}
</style>
