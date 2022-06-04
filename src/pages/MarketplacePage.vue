<template>
  <q-page class="bg-dark-cream">
    <marketplace-banner />
    <div class="container-lg q-mx-auto q-mt-lg">
      <marketplace-search />
    </div>
    <div class="container-lg q-mx-auto q-mt-xl gutter-cards q-mb-xl">
      <template v-if="cards.data">
        <template v-for="card in cards.data.value" :key="card[0]">
          <marketplace-card :card="card" :soon="true"></marketplace-card>
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
      { name: 'hello', imageUrl: 'HELLO' },
      { name: 'hello', imageUrl: 'HELLO' },
      { name: 'hello', imageUrl: 'HELLO' },
    ],
  },
};
console.log(cards.data.value);
</script>

<style scoped lang="scss">
.gutter-cards > * + * {
  margin-top: 25px;
}
</style>
