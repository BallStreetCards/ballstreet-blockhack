<template>
  <q-card class="bg-cream col column border-round fit box-shadow">
    <q-card-section>
      <h2 class="q-my-none fn-700 text-primary fn-lg text-uppercase">
        Asset Summary
      </h2>
    </q-card-section>
    <q-space />
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
            class="border-round q-py-md text-center bg-cream"
          >
            <div class="fn-xs fn-700 text-uppercase text-brown op-60">
              {{ statName }}
            </div>
            <div class="fn-lg-xl fn-700 text-brown">
              {{ stat }}
            </div>
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
      'Listed %': '100%',
      'Listing Date': 'July 1, 2022',
    };
    return { stats };
  },
});
</script>
