<template>
  <div class="p-container relative-position">
    <!-- Card -->
    <q-card class="row bg-cream box-shadow">
      <q-card-section class="col-12 col-md-auto">
        <!-- Filler to offset card and prevent overlap -->
        <div class="filler" />
      </q-card-section>

      <q-card-section class="col-12 col-md">
        <marketplace-card-history
          class="q-py-md"
          :soon="soon"
          :card="card"
        ></marketplace-card-history>
      </q-card-section>

      <q-card-section class="col-12 col-md-4">
        <marketplace-card-price :soon="soon" :card="card" />
      </q-card-section>
    </q-card>

    <!-- Card Image (placed here to show on top of card -> absolute positioning) -->
    <marketplace-card-image
      class="img-position"
      :width="260"
      :soon="soon"
      :image-url="card.imageUrl"
    />
  </div>
</template>

<script lang="ts" setup>
import MarketplaceCardPrice from './MarketplaceCardPrice.vue';
import MarketplaceCardHistory from './MarketplaceCardHistory.vue';
import MarketplaceCardImage from './MarketplaceCardImage.vue';
import Card from '../../../models/Card';

interface Props {
  soon?: boolean;
  card: Card;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.filler {
  width: 100%;
  height: 200px;
}

.img-position {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.p-container {
  padding-top: 200px;
}

@media (min-width: $breakpoint-md-min) {
  .filler {
    width: 100px;
    height: 100%;
  }

  .img-position {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .p-container {
    padding-top: 0;
    padding-left: 140px;
  }
}
</style>
