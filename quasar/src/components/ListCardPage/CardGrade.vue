<template>
  <div
    class="column items-center bg-dark-cream items-stretch self-stretch full-height"
  >
    <div class="column items-center q-pa-md">
      <q-icon
        name="img:/assets/ListCardPage/number-five.png"
        size="40px"
        class="q-mb-md"
      />
      <q-item-label class="fn-lg fn-rc fn-600 text-primary q-mb-xl"
        >What's the grader and grade of the card?</q-item-label
      >
      <div
        class="row q-gutter-md q-my-lg self-stretch items-center justify-around"
      >
        <q-btn
          label="PSA"
          class="opt-btn bg-cream"
          @click="option = 'psa'"
          :color="option === 'psa' ? 'accent' : 'bg-cream'"
          :text-color="option === 'psa' ? 'white' : 'black'"
        />
        <q-btn
          label="BGS"
          class="opt-btn bg-cream"
          @click="option = 'bgs'"
          :color="option === 'bgs' ? 'accent' : 'bg-cream'"
          :text-color="option === 'bgs' ? 'white' : 'black'"
        />
        <q-btn
          label="SGC"
          class="opt-btn bg-cream"
          @click="option = 'sgc'"
          :color="option === 'sgc' ? 'accent' : 'bg-cream'"
          :text-color="option === 'sgc' ? 'white' : 'black'"
        />
        <q-btn
          label="OTHER"
          class="opt-btn bg-cream"
          @click="option = 'other'"
          :color="option === 'other' ? 'accent' : 'bg-cream'"
          :text-color="option === 'other' ? 'white' : 'black'"
        />
      </div>
      <div class="row self-stretch justify-end q-pr-xl input-field">
        <q-input
          filled
          v-model="name"
          placeholder="Player Name..."
          v-if="option === 'other'"
          bg-color="white"
        ></q-input>
      </div>

      <q-slider
        v-model="slider"
        color="accent"
        track-size="8px"
        :marker-labels="sliderMarkerLabel"
        :min="0"
        :max="10"
        class="self-stretch q-my-xl q-px-xl"
      />
    </div>
  </div>
</template>

<style scoped>
.opt-btn {
  width: 150px;
}

.input-field {
  height: 100px;
  width: 300px;
}
</style>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const slider = ref(0);

    const option = ref('');
    const name = ref('');

    watchEffect(() => {
      emit(
        'update:modelValue',
        `${option.value.toUpperCase()} ${slider.value > 0 ? slider.value : ''}`
      );
    });

    const sliderMarkerLabel = (val: number) => (val === 0 ? 'N/A' : `${val}`);

    return {
      slider,
      sliderMarkerLabel,
      option,
      name,
    };
  },
});
</script>
