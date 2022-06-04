<template>
  <q-page class="column bg-dark-cream">
    <div class="row fit">
      <!-- MY CARDS -->
      <my-cards />
    </div>
    <div class="row fit q-pa-lg">
      <!-- MY BINDERS -->
      <my-binders />
    </div>
    <div class="row fit q-pa-lg">
      <!-- MY CARDS BOTTOM -->
      <my-cards-bottom />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyCards from 'src/components/PortfolioPage/MyCards.vue';
import MyBinders from 'src/components/PortfolioPage/MyBinders.vue';
import MyCardsBottom from 'src/components/PortfolioPage/MyCardsBottom.vue';

export default defineComponent({
  components: {
    MyCards,
    MyBinders,
    MyCardsBottom,
  },
  name: 'PortfolioPage',
  setup() {
    return {};
  },
});
</script>
