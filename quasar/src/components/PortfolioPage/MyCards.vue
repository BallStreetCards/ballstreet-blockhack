<template>
  <q-img src="/assets/PortfolioPage/TOP3.png">
    <div class="column bg-transparent fit">
      <div class="col q-pl-lg q-pr-lg">
        <div class="row q-pb-lg">
          <!-- MY CARDS -->
          <div class="col text-info text-capitalize fn-lg-xl fn-800">
            my cards
          </div>
          <div class="row">
            <!-- QR CODE BUTTON -->
            <div class="col q-pr-sm">
              <q-btn
                flat
                dense
                color="info"
                icon="qr_code"
                class="bg-grey-blue"
              />
            </div>
            <!-- PLAY ARROW BUTTON -->
            <div class="col">
              <q-btn
                flat
                dense
                color="info"
                icon="play_arrow"
                class="bg-grey-blue"
              />
            </div>
          </div>
        </div>
        <div class="row justify-center items-end q-gutter-x-xl">
          <!-- LEFT CARD -->
          <div class="col-md-auto q-pr-xl q-pb-md">
            <div class="row">
              <div class="col">
                <q-img
                  class="card-two border-round"
                  src="/assets/PortfolioPage/trae-young-card-one.png"
                />
              </div>
              <div class="column">
                <q-btn
                  flat
                  dense
                  color="info"
                  icon="more_vert"
                  class="items-start"
                />
              </div>
            </div>
          </div>
          <!-- MIDDLE CARD -->
          <div class="col-md-auto q-pr-xl q-pl-xl">
            <div class="row">
              <div class="col">
                <q-img
                  class="card-one border-round"
                  src="/assets/PortfolioPage/michael-jordan-card-one.png"
                />
              </div>
              <div class="column">
                <q-btn
                  flat
                  dense
                  color="info"
                  icon="more_vert"
                  class="items-start"
                />
              </div>
            </div>
          </div>
          <!-- RIGHT CARD -->
          <div class="col-md-auto q-pl-xl q-pb-md">
            <div class="row">
              <div class="col">
                <q-img
                  class="card-two border-round"
                  src="/assets/PortfolioPage/michael-jordan-card-two.png"
                />
              </div>
              <div class="column">
                <q-btn
                  flat
                  dense
                  color="info"
                  icon="more_vert"
                  class="items-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-img>
</template>

<style lang="scss" scoped>
.card-one {
  height: 350px;
  width: 200px;
}

.card-two {
  height: 295px;
  width: 170px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyCards',

  setup() {
    return {};
  },
});
</script>
