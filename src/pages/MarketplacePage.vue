<template>
  <q-page class="bg-dark-cream">
    <marketplace-banner />
    <div class="container-lg q-mx-auto q-mt-lg">
      <marketplace-search />
    </div>
    <div class="container-lg q-mx-auto q-mt-xl gutter-cards q-mb-xl">
      <template v-if="cards.data">
        <template v-for="card in cards.data.value" :key="card[0]">
          <marketplace-card :card="card"></marketplace-card>
        </template>
      </template>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import MarketplaceBanner from 'src/components/MarketplacePage/MarketplaceBanner.vue';
import MarketplaceCard from 'src/components/MarketplacePage/MarketplaceCard/MarketplaceCard.vue';
import MarketplaceSearch from 'src/components/MarketplacePage/MarketplaceSearch.vue';

const cards = {
  data: {
    value: [
      {
        name: 'Lamelo Ball',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/ball-street-20550.appspot.com/o/img%2Flamelo_ball_front.png?alt=media&token=0efb1a50-8c40-4833-b213-67628102811c',
      },
      {
        name: 'Lamelo Ball',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/ball-street-20550.appspot.com/o/img%2Flamelo_ball_front.png?alt=media&token=0efb1a50-8c40-4833-b213-67628102811c',
      },
      {
        name: 'Lamelo Ball',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/ball-street-20550.appspot.com/o/img%2Flamelo_ball_front.png?alt=media&token=0efb1a50-8c40-4833-b213-67628102811c',
      },
    ],
  },
};
</script>

<style scoped lang="scss">
.gutter-cards > * + * {
  margin-top: 25px;
}
</style>
