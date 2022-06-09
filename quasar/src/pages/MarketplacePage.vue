<template>
  <q-page class="bg-dark-cream row">
    <div class="col">
      <marketplace-banner />
      <div class="container-lg q-mx-auto q-mt-lg">
        <marketplace-search />
      </div>
      <div class="container-lg q-mx-auto q-mt-xl gutter-cards q-mb-xl">
        <template v-if="cards">
          <div v-for="[cardId, card] in cards" :key="cardId">
            <marketplace-card :card="card"></marketplace-card>
          </div>
        </template>

        <!-- {{ Object.keys(cards) }} -->
        <!-- {{ Object.values(cards) }} -->
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { useFirestoreCollection } from '@gcto/firebase-hooks/lib';
import Card from 'src/models/Card';
import MarketplaceCard from '../components/MarketplacePage/MarketplaceCard/MarketplaceCard.vue';
import MarketplaceBanner from 'src/components/MarketplacePage/MarketplaceBanner.vue';
import MarketplaceSearch from 'src/components/MarketplacePage/MarketplaceSearch.vue';
import { computed } from 'vue';

const cardsCache = useFirestoreCollection<Card>('marketplace-cards');
const cards = computed(() => [...(cardsCache.data.value?.entries() || [])]);
</script>

<style scoped lang="scss">
.gutter-cards > * + * {
  margin-top: 25px;
}
</style>
