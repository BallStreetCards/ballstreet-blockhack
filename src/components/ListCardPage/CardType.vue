<template>
  <div class="column items-center bg-dark-cream items-stretch">
    <div class="column items-center q-pa-md">
      <q-icon
        name="img:/assets/ListCardPage/number-one.png"
        size="40px"
        class="q-mb-md"
      />
      <q-item-label class="fn-lg fn-rc fn-600 text-primary q-mb-sm"
        >What type of card are you listing?</q-item-label
      >
    </div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      arrows
      next-icon="img:/assets/ListCardPage/right-arrow.png"
      prev-icon="img:/assets/ListCardPage/left-arrow.png"
      infinite
      class="bg-dark-cream q-mx-xl"
      height="500px"
    >
      <q-carousel-slide name="sports" class="text-center overflow-hidden">
        <div class="text-brown fn-lg fn-rc fn-600">SPORTS</div>
        <q-img
          src="/assets/ListCardPage/sport-card.png"
          class="fit"
          fit="none"
        />
      </q-carousel-slide>
      <q-carousel-slide name="other" class="text-center overflow-hidden">
        <div class="text-brown fn-lg fn-rc fn-600">OTHER</div>
        <q-img
          src="/assets/ListCardPage/other-card.png"
          class="fit self-stretch"
          fit="none"
        />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const slide = ref('sports');
    return { slide };
  },
});
</script>
