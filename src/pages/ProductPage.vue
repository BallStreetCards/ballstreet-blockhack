<template>
  <q-page class="column bg-dark-cream">
    <product-main />
    <div class="row q-pa-md-xl q-pa-md q-col-gutter-md">
      <div class="col-md-7 self-stretch col-12">
        <product-price-history />
      </div>
      <div class="col-md-5 col-12">
        <product-asset-summary />
      </div>
      <!-- VIDEO -->
      <div class="col-md-7 self-stretch col-12">
        <product-video />
      </div>
      <!-- INFO -->
      <div class="col-md-5 col-12">
        <product-cardholder-info />
      </div>

      <!-- SPORTSDATA -->
      <div class="col-12">
        <product-player />
      </div>
    </div>

    <product-page-footer />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductMain from 'src/components/ProductPage/ProductMain.vue';
import ProductAssetSummary from 'src/components/ProductPage/ProductAssetSummary.vue';
import ProductPriceHistory from 'src/components/ProductPage/ProductPriceHistory.vue';
import ProductCardholderInfo from 'src/components/ProductPage/ProductCardholderInfo.vue';
import ProductPlayer from 'src/components/ProductPage/ProductPlayer.vue';
import ProductVideo from 'src/components/ProductPage/ProductVideo.vue';
import ProductPageFooter from '../components/ProductPage/ProductPageFooter.vue';

export default defineComponent({
  components: {
    ProductMain,
    ProductAssetSummary,
    ProductPriceHistory,
    ProductCardholderInfo,
    ProductPlayer,
    ProductVideo,
    ProductPageFooter,
  },
  name: 'EssentialLink',
  setup() {
    return {};
  },
});
</script>
