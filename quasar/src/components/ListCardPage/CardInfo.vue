<template>
  <div class="column items-center bg-dark-cream items-stretch">
    <div class="column items-center q-pa-md">
      <q-icon
        name="img:/assets/ListCardPage/number-three.png"
        size="40px"
        class="q-mb-md"
      />
      <q-item-label class="fn-lg fn-rc fn-600 text-primary q-mb-lg"
        >Tell us a bit about your card.</q-item-label
      >
      <div class="row self-stretch q-my-md">
        <div class="col-6 q-pr-sm">
          Player Name
          <q-input filled v-model="name" placeholder="Player Name..."></q-input>
        </div>
      </div>
      <div class="row self-stretch q-my-md">
        <div class="col-6 q-pr-sm">
          Manufacterer
          <q-input
            filled
            v-model="manufacterer"
            placeholder="Manufacterer..."
          ></q-input>
        </div>
        <div class="col-6 q-pl-sm">
          Collection
          <q-input
            filled
            v-model="collection"
            placeholder="Collection..."
          ></q-input>
        </div>
      </div>
      <div class="row self-stretch q-my-md">
        <div class="col-6 q-pr-sm">
          Year
          <q-input filled v-model="year" placeholder="YYYY"></q-input>
        </div>
        <div class="col-6 q-pl-sm">
          Card Number
          <q-input
            filled
            v-model="cardNumber"
            placeholder="Card Number..."
          ></q-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, PropType } from 'vue';

export default defineComponent({
  props: {
    modelValue: Object as PropType<Record<string, string>>,
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const name = ref(null);
    const manufacterer = ref(null);
    const collection = ref(null);
    const year = ref(null);
    const cardNumber = ref(null);
    watchEffect(() => {
      emit('update:modelValue', {
        manufacterer: manufacterer.value,
        collection: collection.value,
        year: year.value,
        cardNumber: cardNumber.value,
        name: name.value,
      });
    });
    return { name, manufacterer, collection, year, cardNumber };
  },
});
</script>
