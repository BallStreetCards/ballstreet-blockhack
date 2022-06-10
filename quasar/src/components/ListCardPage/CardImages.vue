<template>
  <div class="">
    <div class="column items-center bg-dark-cream items-stretch">
      <div class="column items-center q-pa-md">
        <q-icon
          name="img:/assets/ListCardPage/number-two.png"
          size="40px"
          class="q-mb-md"
        />
        <q-item-label class="fn-lg fn-rc fn-600 text-primary q-mb-lg"
          >Add Images</q-item-label
        >

        <div class="row q-col-gutter-x-md">
          <div class="upload-img" v-for="side in sides" :key="side.name">
            <div class="text-brown fn-lg q-ma-md text-center text-uppercase">
              {{ side.name }}
            </div>
            <q-img
              v-if="side.image"
              :src="side.image"
              class="upload-img upload-block"
            >
              <div class="bg-transparent q-pa-none">
                <q-btn
                  icon="close"
                  dense
                  round
                  flat
                  color="red"
                  class="q-ma-none"
                  @click="side.image = ''"
                /></div
            ></q-img>
            <media-input v-else v-model="side.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.upload-block {
  background-color: #e9e6d8;
}

.upload-img {
  height: 400px;
  width: 300px;
}
</style>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect } from 'vue';
import MediaInput from '../forms/MediaInput.vue';

export default defineComponent({
  components: { MediaInput },

  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const sides = reactive([
      {
        name: 'front',
        image: '',
      },

      {
        name: 'back',
        image: '',
      },
    ]);

    watchEffect(() => {
      emit('update:modelValue', [sides[0].image, sides[1].image]);
    });

    return {
      sides,
    };
  },
});
</script>
