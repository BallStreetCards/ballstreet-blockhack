<template>
  <div class="bg-primary fn-rc text-cream q-py-xs fn-600 text-center fn-xs">
    CARD DROPPING IN {{ `${int}`.padStart(2, '0') }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const int = ref('0:00:00:00');
    const drop = new Date('July 1, 2022');
    setInterval(() => {
      const now = new Date();
      // TIMER TO GET TO DATE. SORRY, THIS IS THE UGLIEST CODE I'VE EVER WRITTEN
      const time = Math.floor((drop.getTime() - now.getTime()) / 1000);
      int.value = `${`${(time / 86400) | 0}`.padStart(2, '0')}:${`${
        ((time / 3600) | 0) % 24
      }`.padStart(2, '0')}:${`${((time / 60) | 0) % 60}`.padStart(2, '0')}:${`${
        time % 60
      }`.padStart(2, '0')}`;
    }, 1000);
    return { int };
  },
});
</script>
