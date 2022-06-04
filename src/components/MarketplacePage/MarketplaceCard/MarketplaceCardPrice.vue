<template>
  <q-card class="transparent full-height column justify-between" flat bordered>
    <!-- Top  -->
    <q-card-section class="q-pb-none">
      <marketplace-card-bar :soon="soon" />
    </q-card-section>

    <q-card-section>
      <!-- Token details -->
      <q-list separator class="text-brown text-uppercase" v-if="!soon">
        <q-item>
          <q-item-section class="op-60">Token price</q-item-section
          ><q-item-section side class="fn-700">
            <div>
              <span class="text-positive">+3.7%</span>
              <span class="text-brown q-ml-sm">$5</span>
            </div></q-item-section
          ></q-item
        >
        <q-item>
          <q-item-section class="op-60">Tokens available</q-item-section
          ><q-item-section side class="fn-700 text-brown"
            >1,199/1,200</q-item-section
          ></q-item
        >
        <q-item>
          <q-item-section class="op-60">Market cap</q-item-section
          ><q-item-section side class="fn-700 text-brown"
            >$6,000</q-item-section
          ></q-item
        >
      </q-list>

      <!-- Coming soon countdown -->
      <div v-else class="column items-center text-brown fn-700">
        <div class="text-uppercase op-60">Card Dropping In</div>
        <div class="fn-xl">{{ countdownDisplay }}</div>
      </div>
    </q-card-section>

    <!-- Actions -->
    <q-card-section class="row q-gutter-md">
      <div class="col-auto">
        <q-btn flat icon="bookmark" color="accent" round />
      </div>
      <div class="col">
        <q-btn class="fit" unelevated color="accent" :disable="soon"
          >Buy token(s)</q-btn
        >
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import MarketplaceCardBar from './MarketplaceCardBar.vue';
import { useCountdown } from 'src/hooks/countdown';
import Card from '../../../models/Card';

const { days, hours, minutes, seconds } = useCountdown(
  new Date('August 17, 2022 03:24:00')
);

const countdownDisplay = computed(() => {
  return `${days.value}:${hours.value}:${minutes.value}:${seconds.value}`;
});

interface Props {
  soon?: boolean;
  card: Card;
}

defineProps<Props>();
</script>

<style scoped lang="scss"></style>
