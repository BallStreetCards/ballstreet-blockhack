<template>
  <div class="bg-banner text-cream">
    <div class="container-lg q-mx-auto row">
      <!-- Image -->
      <div
        class="bg-img col-12 col-md-3 q-px-md-lg row items-center justify-center"
      >
        <q-img class="w-img" src="/assets/MarketplacePage/test.png"></q-img>
      </div>
      <!-- Details -->
      <div
        class="col-12 col-md q-px-md-lg q-py-lg row justify-center items-center text-uppercase"
      >
        <div>
          <div class="op-60 fn-sm fn-300">Coming soon</div>
          <div class="row fn-xl q-mt-md">
            <div class="fn-700">Lamelo Ball</div>
            <div class="fn-300 op-80 q-ml-sm">#25</div>
          </div>

          <div class="row q-mt-md">
            <q-chip
              :key="tag"
              v-for="tag in tags"
              outline
              color="info"
              class="op-60"
              >{{ tag }}</q-chip
            >
          </div>
        </div>
      </div>
      <!-- Countdown -->
      <div
        class="col-12 col-md-auto q-px-md-lg q-py-lg row justify-center items-center"
      >
        <marketplace-banner-countdown />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MarketplaceBannerCountdown from './MarketplaceBannerCountdown.vue';
const tags = ['#72/99', 'on-card-autographed', 'jersey patch'];
</script>

<style scoped lang="scss">
.bg-banner {
  background-color: $banner;
}

.text-cream {
  color: $cream;
}

.w-img {
  width: 120px;
}

.bg-img {
  background-image: url('/assets/MarketplacePage/LaMelo Ball.png');
  background-repeat: no-repeat;
  background-position: left 50% top 0;
}
</style>
