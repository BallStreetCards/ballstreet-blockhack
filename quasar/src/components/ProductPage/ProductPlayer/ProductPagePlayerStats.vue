<template>
  <q-card class="border-round bg-cream box-shadow">
    <q-card-section class="q-pb-md row">
      <h3 class="q-mb-none q-mt-md fn-800 fn-xl text-uppercase">
        Season Averages
      </h3>
      <div class="col row items-end q-gutter-sm">
        <q-space />

        <q-btn
          :flat="year != y"
          :outline="year == y"
          v-for="y in ['2021', '2022']"
          :key="y"
          color="accent"
          @click="
            () => {
              year = y;
            }
          "
          dense
          class="q-px-lg fn-md border-round"
          >{{ y }}</q-btn
        >
      </div>
    </q-card-section>

    <q-card-section class="row q-pt-none q-col-gutter-sm">
      <div class="col">
        <div class="q-mb-md row q-col-gutter-md">
          <div
            v-for="(key, value, i) in playerDetails"
            :key="i"
            class="col-lg col-md-3 col-6 q-mx-none"
          >
            <div
              class="column q-pb-lg q-pt-md fit items-center bg-dark-cream border-round"
            >
              <div
                class="fn-600 col-6 op-60 text-brown fn-xs text-uppercase q-mb-none"
              >
                {{ value }}
              </div>
              <div class="fn-600 col-6 fn-lg q-mt-none col-grow text-brown">
                <span v-if="key">{{ key }}</span>
                <q-spinner v-else />
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useSWRV } from '@gcto/swrv-hooks';

import { API_PLAYER_STATS } from 'src/lib/sportsdata';
import PlayerStats from 'src/models/PlayerStats';
import axios, { AxiosResponse } from 'axios';

type Year = '2020' | '2021' | '2022';
export default defineComponent({
  setup() {
    const year = ref<Year>('2022');
    const _playerData2022 = useSWRV<AxiosResponse<PlayerStats>, string>(
      '/api/playerStats2022',
      () => axios.get(API_PLAYER_STATS(2022))
    );
    const _playerData2021 = useSWRV<AxiosResponse<PlayerStats>, string>(
      '/api/playerStats2021',
      () => axios.get(API_PLAYER_STATS(2021))
    );
    const _playerData2020 = useSWRV<AxiosResponse<PlayerStats>, string>(
      '/api/playerStats2018',
      () => axios.get(API_PLAYER_STATS(2018))
    );
    const getData = (year: Year) => {
      switch (year) {
        case '2020':
          return _playerData2020;
        case '2021':
          return _playerData2021;
        case '2022':
          return _playerData2022;
      }
    };
    const playerStats = computed<PlayerStats>(() => ({
      ...getData(year.value).data?.value?.data,
    }));

    const playerDetails = computed(() => ({
      'Field Goals %': playerStats.value.FieldGoalsPercentage,
      'Three Pointers %': playerStats.value.ThreePointersPercentage,
      'Free Throws %': playerStats.value.FreeThrowsPercentage,
      Rebounds: playerStats.value.Rebounds
        ? (playerStats.value.Rebounds / playerStats.value.Games).toFixed(1)
        : undefined,
      Assists: playerStats.value.Assists
        ? (playerStats.value.Assists / playerStats.value.Games).toFixed(1)
        : undefined,
      Blocks: playerStats.value.BlockedShots
        ? (playerStats.value.BlockedShots / playerStats.value.Games).toFixed(1)
        : undefined,
      Steals: playerStats.value.Steals
        ? (playerStats.value.Steals / playerStats.value.Games).toFixed(1)
        : undefined,
      Points: playerStats.value.Points
        ? (playerStats.value.Points / playerStats.value.Games).toFixed(1)
        : undefined,
    }));

    return { playerStats, playerDetails, year };
  },
});
</script>
