<template>
  <q-card class="bg-cream col box-shadow">
    <q-card-section>
      <h2 class="q-my-none fn-700 text-primary fn-lg fn-rc text-uppercase">
        Asset Summary
      </h2>
    </q-card-section>
    <q-card-section>
      <div class="row q-col-gutter-md">
        <div
          v-for="(stat, statName, i) in stats"
          :key="{ statName }"
          class="col-6"
          :class="Object.values(stats).length - 1 == i ? 'col-12' : ''"
        >
          <q-card
            flat
            bordered
            class="border-round q-pa-md text-center bg-cream"
          >
            <div class="fn-xs fn-700 text-uppercase text-brown op-60">
              {{ statName }}
            </div>
            <div class="fn-md fn-700 text-uppercase text-brown">{{ stat }}</div>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductAssetSummary',
  setup() {
    const stats = {
      'Market Cap': '$6000',
      Investors: '1',
      'Token Price': '$5',
      'Listed %': '99%',
      'Listed Date': 'May 1, 2022',
    };
    return { stats };
  },
});
</script>
