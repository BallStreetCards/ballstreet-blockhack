<template>
  <q-page class="bg-dark-cream row">
    <div class="col">
      <marketplace-banner />
      <div class="container-lg q-mx-auto q-mt-lg">
        <marketplace-search />
      </div>
      <div class="container-lg q-mx-auto q-mt-xl gutter-cards q-mb-xl">
        <template v-if="cards">
          <template v-for="card in cards" :key="card[0]">
            <marketplace-card :card="card"></marketplace-card>
          </template>
        </template>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import {
  collection,
  query,
  onSnapshot,
  getFirestore,
} from 'firebase/firestore';
import Card from 'src/models/Card';
import { ref } from 'vue';

const cards = ref<Card[]>([]);
const db = getFirestore();
const q = query(collection(db, 'marketplace-cards'));
onSnapshot(q, (querySnapshot) => {
  const nCards: Card[] = [];
  querySnapshot.forEach((doc) => {
    nCards.push(doc.data() as Card);
  });
  cards.value = nCards;
});
</script>

<style scoped lang="scss">
.gutter-cards > * + * {
  margin-top: 25px;
}
</style>
