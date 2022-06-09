<template>
  <q-card class="border-round bg-cream box-shadow">
    <q-card-section class="row q-pa-none q-col-gutter-md">
      <div class="col">
        <div class="row">
          <div class="col-3 column justify-end">
            <q-img src="/assets/ProductPage/trae-young.png" />
          </div>
          <div class="col">
            <div class="q-py-lg q-px-lg q-mx-sm column q-gutter-y-sm">
              <div class="text-accent fn-xl fn-600">#11</div>
              <div class="text-brown fn-xl fn-800">TRAE YOUNG</div>
              <div class="row q-gutter-md items-center">
                <q-avatar size="25px"
                  ><q-img src="/assets/ProductPage/team-logo-hawks.png"
                /></q-avatar>
                <div class="text-brown q-ml-md fn-md fn-700">HAWKS</div>
                <div class="text-brown q-ml-md fn-md fn-400">PG</div>
              </div>
              <p class="op-80 fn-xs-p fn-400 fn-jost q-mt-md">
                Trae Young (born September 19, 1998) is an American professional
                basketball player for the Atlanta Hawks of the National
                Basketball Association (NBA). He played college basketball for
                the Oklahoma Sooners. In 2017, he tied the then-record in
                National Collegiate Athletic Association (NCAA) Division I
                single-game assists with 22. Young became the only player to
                ever lead the NCAA in both points and assists in a single
                season. He was drafted by the Dallas Mavericks in the 2018 NBA
                draft with the fifth pick, and later traded to the Atlanta
                Hawks, along with a future first-round pick, for the draft
                rights to Luka Dončić. He joined Dončić in a unanimous selection
                to the 2019 NBA All-Rookie First Team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-shrink">
        <q-separator class="full-height gt-sm" vertical />
      </div>
      <div class="col-md-4 col-12 column justify-center">
        <q-list dense class="q-mb-md q-mt-xl">
          <q-item v-for="(value, i) in queries" :key="i" class="row q-my-sm">
            <div class="fn-600 col-6 fn-xs op-60 text-brown text-uppercase">
              {{ value }}
            </div>
            <div
              class="fn-600 col-6 fn-xs col-grow text-brown"
              v-if="playerData?.[value]"
            >
              {{ playerData?.[value] }}
            </div>
            <q-skeleton class="fit" v-else />
          </q-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useSWRV } from '@gcto/swrv-hooks';
import axios from 'axios';
import { API_PLAYER_DETAILS } from 'src/lib/sportsdata';
import PlayerDetails from 'src/models/PlayerDetails';
import { AxiosResponse } from 'axios';

const InchtoFeet = (n: number) => `${Math.floor(n / 12)}'${n % 12}"`;

export default defineComponent({
  setup() {
    const tab = ref('player');
    const _playerData = useSWRV<AxiosResponse<PlayerDetails>, string>(
      '/api/playerStats',
      () => axios.get(API_PLAYER_DETAILS)
    );

    const playerData = computed<PlayerDetails | Record<string, never>>(() =>
      _playerData.data.value
        ? {
            ..._playerData.data.value.data,
            BirthDate: new Date(
              _playerData.data?.value.data.BirthDate
            ).toLocaleDateString(),
            Weight: `${_playerData.data.value.data.Weight} lbs`,
            Height: InchtoFeet(_playerData.data.value.data.Height),
            Experience: `${_playerData.data.value.data.Experience * 4} Years`,
          }
        : {}
    );

    console.log('T');
    const queries = ['Height', 'Weight', 'BirthDate', 'Status', 'Experience'];

    return { queries, tab, playerData, _playerData };
  },
});
</script>
