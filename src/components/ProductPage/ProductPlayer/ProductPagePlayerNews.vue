<template>
  <q-card class="border-round bg-cream box-shadow">
    <q-card-section class="row q-col-gutter-md q-pb-none q-pl-none">
      <div class="col">
        <div class="row">
          <div class="col-2 row gt-md items-en">
            <q-img src="/assets/ProductPage/trae-young-pose.png" />
          </div>
          <div class="col">
            <div class="q-py-lg q-px-xl q-mx-xl column q-gutter-y-sm">
              <div class="text-brown q-pl-md fn-xl fn-800">LATEST</div>

              <q-list v-if="newsList" dense class="q-mb-md q-pa-none">
                <q-item v-for="(news, i) in newsList" :key="i" class="q-my-sm">
                  <div class="fit column items-start">
                    <a
                      :href="news.OriginalSourceUrl"
                      class="fn-800 fn-link op-80 fn-lg text-primary text-uppercase"
                    >
                      {{ news.Title }}
                    </a>
                    <div class="fn-600 op-60 fn-sm text-brown text-uppercase">
                      {{ news.TimeAgo }} -
                      <span class="fn-400">{{ news.OriginalSource }}</span>
                    </div>
                    <div class="fn-400 col-6 op-60 fn-xs-p text-brown q-mt-md">
                      {{ news.Content }}
                    </div>
                  </div>
                </q-item>
              </q-list>
              <div class="fit row justify-center" v-else>
                <q-spinner-hourglass size="80" class="text-center" />
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

import { API_PLAYER_NEWS } from 'src/lib/sportsdata';
import PlayerNews from 'src/models/PlayerNews';
import axios, { AxiosResponse } from 'axios';

export default defineComponent({
  setup() {
    const tab = ref('player');
    const _playerData = useSWRV<AxiosResponse<PlayerNews[]>, string>(
      '/api/playerNews',
      () => axios.get(API_PLAYER_NEWS)
    );
    const newsList = computed<PlayerNews[] | null>(() =>
      _playerData.data?.value?.data
        ? {
            ..._playerData.data?.value?.data,
          }
        : null
    );

    return { tab, newsList };
  },
});
</script>
