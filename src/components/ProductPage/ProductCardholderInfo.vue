<template>
  <q-card flat class="bg-cream text-brown fit border-round box-shadow">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey fn-800 bg-transparent"
      active-color="primary"
      indicator-color="accent"
      align="justify"
      narrow-indicator
    >
      <q-tab name="card" class="fn-md q-py-md">The Card</q-tab>
      <q-tab name="lister" class="fn-md q-py-md">The Lister</q-tab>
    </q-tabs>

    <!-- CARD -->
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="card" class="bg-cream q-pt-none">
        <p class="op-80 fn-xs-p q-mt-none fn-jost fn-400 q-pa-md">
          The card is easily among Trae Young's most sought-after RPA's. The
          Immaculate Collection example possesses a perfectly graded on-card
          autograph along with a stunning volt-green and black jersey patch. The
          card itself is in outstanding condition with impeccable centring and
          sharp corners. Trae Young is among the premier young talents in the
          NBA and seems poised for a bright future. There are only 99 of these
          cards in existence and a BGS 9 is among the highest grade card
          available.
        </p>
        <q-separator />
        <q-list dense class="q-mb-md q-mt-lg">
          <q-item
            v-for="(value, key, i) in details"
            :key="i"
            class="row q-my-xs"
          >
            <div class="fn-600 col-6 fn-xs op-80 text-brown text-uppercase">
              {{ key }}
            </div>
            <div class="fn-600 col-6 fn-xs col-grow text-brown">
              {{ value }}
            </div>
          </q-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="lister" class="bg-cream q-pt-none">
        <div class="fn-600 q-px-md q-pb-none">
          <div class="fn-800 fn-lg q-pt-md">@BYDEKCARDS</div>
          <div class="fn-600 fn-md-p op-80">AMAR</div>
        </div>
        <p class="op-80 fn-xs-p q-mt-none fn-400 q-pa-md">
          My name’s Amar and I’m from Toronto, Ontario. As a die hard and life
          long Raptors fan, I was fully involved in our championship run. Even
          saw Kawhi’s game 7 winning shot in the arena. Knowing how special that
          moment was for the city and country, I wanted to collect basketball
          cards from our championship year. I collect rare Raptors cards and
          Canadians like SGA. My holy grail is the Kyle Lowry Championship
          Logoman 1/1 I own. Not the most expensive card I have but the best
          card that exists for the greatest Raptor of all time - delivering on
          his promise to win us a championship!
        </p>
        <div class="op-80 fn-xs q-mt-none fn-400 q-pa-md">
          - Amar (@BYDEKCARDS)
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const tab = ref('card');
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
