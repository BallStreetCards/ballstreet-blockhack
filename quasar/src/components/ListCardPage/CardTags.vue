<template>
  <div class="column items-center bg-dark-cream items-stretch">
    <div class="column items-center q-pa-md">
      <q-icon
        name="img:/assets/ListCardPage/number-four.png"
        size="40px"
        class="q-mb-md"
      />
      <q-item-label class="fn-lg fn-rc fn-600 text-primary q-mb-md"
        >Tell us a bit about your card.</q-item-label
      >

      <div class="self-stretch q-pa-lg col-6">
        Tags (Max 5)
        <div class="bg-cream q-pa-md">
          <q-btn
            v-for="(option, index) in options"
            :key="index"
            :label="option"
            color="primary"
            rounded
            unelevated
            :outline="!selected.includes(option)"
            class="q-ma-xs"
            @click="clickOption(option)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watchEffect } from 'vue';

export default defineComponent({
  props: {
    modelValue: Object as PropType<string[]>,
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const options = [
      'Rare',
      'Common',
      'Base',
      'Label Autographed Card',
      'Logo Patch',
      'Parallel',
      'Autograph',
      'Insert',
      'Logoman',
      'Jersey Card',
      'Patch Card',
      '1-of-1',
      'Letterman Card',
      'Cut Autograph',
      'Rookie Card',
      'Hard-Signed Autographed Card',
    ];

    const maxSelected = () => {
      return selected.value.length > 4;
    };

    const selected = ref<string[]>([]);
    watchEffect(() => {
      emit('update:modelValue', selected.value);
    });
    const clickOption = (option: string) => {
      if (!maxSelected() && !selected.value.includes(option))
        selected.value.push(option);
      else if (selected.value.includes(option))
        selected.value = selected.value.filter((val) => val != option);
    };

    return { options, selected, clickOption };
  },
});
</script>
