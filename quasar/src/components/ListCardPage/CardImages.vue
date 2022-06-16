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
        <div class="row q-gutter-x-md">
          <div class="column items-center">
            <div
              class="upload-img upload-block justify-center items-center row"
              v-if="!frontImage"
            >
              <q-btn
                round
                unelevated
                color="dark-cream"
                size="33px"
                class="bg-cream"
                @click="changeFrontImage"
              >
                <q-icon name="photo_camera" color="primary" size="50px"
              /></q-btn>
            </div>
            <q-img
              src="/assets/ListCardPage/front-card.png"
              class="upload-img"
              v-else
            ></q-img>
            <div class="text-brown fn-lg q-ma-md">Front</div>
          </div>

          <div class="column items-center">
            <div
              class="upload-img upload-block justify-center items-center row"
              v-if="!backImage"
            >
              <q-btn
                round
                unelevated
                color="dark-cream"
                size="33px"
                class="bg-cream"
                @click="changeBackImage"
              >
                <q-icon name="photo_camera" color="primary" size="50px"
              /></q-btn>
            </div>
            <q-img
              src="/assets/ListCardPage/back-card.png"
              class="upload-img"
              v-else
            ></q-img>
            <div class="text-brown fn-lg q-ma-md">Back</div>
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  // components:{ CC.MediaC},
  setup() {
    const frontImage = ref(false);
    const backImage = ref(false);

    const changeFrontImage = () => {
      frontImage.value = true;
    };

    const changeBackImage = () => {
      backImage.value = true;
    };

    return { frontImage, backImage, changeFrontImage, changeBackImage };
  },
});
</script>
