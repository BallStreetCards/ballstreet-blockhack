<template>
  <div class="text-brown fit border-round">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey fn-800 q-mt-md q-pt-xl bg-transparent"
      active-color="primary"
      indicator-color="accent"
      align="start"
      narrow-indicator
    >
      <q-tab name="player" class="fn-md q-py-md q-px-xl">PLAYER</q-tab>
      <q-tab name="stats" class="fn-md q-py-md q-px-xl">STATS</q-tab>

      <q-tab name="game" class="fn-md q-py-md q-px-xl">GAME LOG</q-tab
      ><q-tab name="news" class="fn-md q-py-md q-px-xl">NEWS</q-tab>
    </q-tabs>

    <!-- CARD -->
    <q-tab-panels v-model="tab" animated class="box-shadow border-round">
      <q-tab-panel name="player" class="q-pa-none">
        <product-page-player-info />
      </q-tab-panel>
      <q-tab-panel name="stats" class="q-pa-none">
        <product-page-player-stats />
      </q-tab-panel>
      <q-tab-panel name="game" class="q-pa-none">
        <product-page-player-game-log />
      </q-tab-panel>
      <q-tab-panel name="news" class="q-pa-none">
        <product-page-player-news />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProductPagePlayerGameLog from './ProductPlayer/ProductPagePlayerGameLog.vue';
import ProductPagePlayerInfo from './ProductPlayer/ProductPagePlayerInfo.vue';
import ProductPagePlayerNews from './ProductPlayer/ProductPagePlayerNews.vue';
import ProductPagePlayerStats from './ProductPlayer/ProductPagePlayerStats.vue';

export default defineComponent({
  components: {
    ProductPagePlayerInfo,
    ProductPagePlayerStats,
    ProductPagePlayerNews,
    ProductPagePlayerGameLog,
  },
  setup() {
    const tab = ref('player');
    const details = {
      manufacturer: 'PANINI',
      collection: 'Immaculate Collection',
      year: '2018-2019',
      grade: 'BGS 9',
      'card number': '#136 72/99',
    };
    return { details, tab };
  },
});
</script>
