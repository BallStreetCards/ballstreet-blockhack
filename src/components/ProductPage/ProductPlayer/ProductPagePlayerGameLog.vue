<template>
  <q-card class="border-round q-pb-md bg-cream box-shadow">
    <q-card-section class="q-pb-none row">
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
    <q-card-section class="q-py-none">
      <div class="col q-mb-md q-mt-md">
        <q-list dense class="">
          <q-item
            v-for="(gameData, i) in [_header]"
            :key="i"
            class="fn-xs row items-center q-my-sm border-round fn-700 bg-brown text-white"
          >
            <div class="row items-center text-white col-12">
              <div class="col-2 text-white text-uppercase">
                {{ gameData?.DATE }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.OPP }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.TIME }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.['FG%'] }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.['3P%'] }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.['FT%'] }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.['REB'] }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.['AST'] }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.['BLK'] }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.['STL'] }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.['TO'] }}
              </div>
              <div class="col text-uppercase">
                {{ gameData?.['PTS'] }}
              </div>
            </div>
          </q-item>
        </q-list>
        <q-scroll-area class="scroll">
          <div
            v-if="gameDataList?.length == 0"
            class="fit row justify-center q-py-md"
          >
            <q-spinner-hourglass size="80" class="text-center" />
          </div>
          <q-list dense v-else>
            <q-item
              v-for="(gameData, i) in gameDataList"
              :key="i"
              class="fn-xs row items-center q-my-sm bg-dark-cream border-round 'op-60 fn-400 text-brown"
            >
              <div class="row items-center col-12">
                <div class="col-2 text-uppercase">
                  {{ gameData?.DATE }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.OPP }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.TIME }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.['FG%'] }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.['3P%'] }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.['FT%'] }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.['REB'] }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.['AST'] }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.['BLK'] }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.['STL'] }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.['TO'] }}
                </div>
                <div class="col text-uppercase">
                  {{ gameData?.['PTS'] }}
                </div>
              </div>
            </q-item>
          </q-list></q-scroll-area
        >
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.scroll {
  height: 350px;
}
</style>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useSWRV } from '@gcto/swrv-hooks';
import axios from 'axios';
import { API_PLAYER_GAME_STATS } from 'src/lib/sportsdata';
import PlayerGameStats from 'src/models/PlayerGameStats';
import { AxiosResponse } from 'axios';

export default defineComponent({
  setup() {
    const year = ref('2022');
    const tab = ref('player');
    const _gameData2021 = useSWRV<
      AxiosResponse<Record<string, PlayerGameStats>>,
      string
    >('/api/gameStats', () => axios.get(API_PLAYER_GAME_STATS(2021)));
    const _gameData2022 = useSWRV<
      AxiosResponse<Record<string, PlayerGameStats>>,
      string
    >('/api/gameStats', () => axios.get(API_PLAYER_GAME_STATS(2022)));

    const gameDataList = computed(() =>
      [
        ...Object.values({
          ...(year.value == '2021' ? _gameData2021 : _gameData2022).data?.value
            ?.data,
          // BirthDate: new Date(
          //   _playerData.data?.value?.data.BirthDate
          // ).toLocaleDateString(),
        }),
      ].map((game: PlayerGameStats) => ({
        r: game.LineupStatus,
        TEAM: game.Team,
        OPP: game.Opponent,
        DATE: new Date(game.Day).toLocaleDateString('en-US', {
          weekday: 'short',

          month: 'short',
          day: 'numeric',
        }),
        TIME: `${game.Minutes}:${`${game.Seconds}`.padStart(2, '0')}`,

        // f: game.,
        'FG%': game.FieldGoalsPercentage,
        '3P%': game.ThreePointersPercentage,
        'FT%': game.FreeThrowsPercentage,
        REB: game.TotalReboundsPercentage,
        AST: game.AssistsPercentage,
        BLK: game.BlocksPercentage,
        STL: game.StealsPercentage,
        TO: game.TurnOversPercentage,
        PTS: game.Points,
      }))
    );
    const _header = computed(() => {
      const map = {} as Record<string, string>;

      for (const key of Object.keys(gameDataList.value?.[0] || {})) {
        map[key] = key;
      }
      return map;
    });

    console.log('T');
    const queries = ['Height', 'Weight', 'BirthDate', 'Status', 'Experience'];

    return { queries, tab, gameDataList, _header, year };
  },
});
</script>
