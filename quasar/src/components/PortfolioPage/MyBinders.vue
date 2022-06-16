<template>
  <div class="column fit">
    <!-- BINDERS -->
    <div class="row text-uppercase text-primary fn-lg fn-800 q-pt-lg q-pb-lg">
      binders
    </div>
    <div class="row fit">
      <!-- ASHLEY'S CARDS -->
      <div class="col">
        <q-img src="/assets/PortfolioPage/binders.png">
          <div class="column bg-transparent fit justify-between">
            <div class="row q-pt-sm">
              <div class="col text-info text-uppercase fn-lg-xl fn-800">
                ashley's cards
              </div>
              <div class="row">
                <q-btn
                  flat
                  dense
                  color="info"
                  icon="more_vert"
                  class="items-start"
                />
              </div>
            </div>
            <div class="row text-info text-uppercase fn-sm fn-800">5 cards</div>
          </div>
        </q-img>
      </div>
      <!-- CHILDHOOD FAVES -->
      <div class="col q-pl-md q-pr-md">
        <q-img src="/assets/PortfolioPage/binders.png">
          <div class="column bg-transparent fit justify-between">
            <div class="row q-pt-sm">
              <div class="col text-info text-uppercase fn-lg-xl fn-800">
                childhood faves
              </div>
              <div class="row">
                <q-btn
                  flat
                  dense
                  color="info"
                  icon="more_vert"
                  class="items-start"
                />
              </div>
            </div>
            <div class="row text-info text-uppercase fn-sm fn-800">5 cards</div>
          </div>
        </q-img>
      </div>
      <!-- NEW -->
      <div bordered class="col border">
        <div
          class="column text-uppercase fit justify-center items-center text-brown fn-md fn-800"
        >
          + new
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.border {
  border: 1px solid $light-grey;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyBinders',

  setup() {
    return {};
  },
});
</script>
