<template>
  <div class="main row items-center">
    <!-- IMG -->

    <div class="col-md-grow col-12 self-stretch">
      <q-img
        class="img-container fit q-px-xxl"
        fit="none"
        src="/assets/ProductPage/card-slab-trae-young-136-immaculate.png"
      />
    </div>

    <!-- WHITE CARD -->
    <div
      class="bg-dark-cream box-shadow q-ml-md q-ml-md-none q-mb-xl q-mb-md-none col-grow card"
    >
      <div class="q-pa-xl">
        <!-- TOP -->
        <div class="row justify-between items-center">
          <div class="text-primary op-80">
            <strong>PANINI</strong> | Immaculate Collection 2018-2019
          </div>
          <q-chip color="primary" dark class="fn-600 fn-jost"> BGS 9 </q-chip>
        </div>
        <!-- NAME -->
        <div class="text-uppercase text-primary row q-gutter-sm fn-xl">
          <div class="fn-700 fn-rc">Trae Young</div>
          <div class="fn-300 op-80 fn-rc">#136</div>
        </div>
        <!-- TAGS -->
        <div class="row">
          <q-chip
            :key="tag"
            v-for="tag in tags"
            outline
            color="primary"
            class="op-60"
            >{{ tag }}</q-chip
          >
        </div>
        <!--  DATA -->
        <div class="q-py-lg">
          <div class="row justify-between">
            <div class="op-60 q-mx-none text-uppercase">Token Price</div>
            <div side class="fn-rc text-brown fn-700">$5</div>
          </div>
          <q-separator spaced />
          <div class="row justify-between">
            <div class="op-60 text-uppercase">TOKENS AVAILABLE</div>
            <div side class="fn-rc text-brown fn-700">1,200/1,200</div>
          </div>
          <q-separator spaced />
          <div class="row justify-between">
            <div class="op-60 text-uppercase">MARKET CAP</div>
            <div side class="fn-rc text-brown fn-700">$6,000</div>
          </div>
        </div>
        <!-- BUTTONS -->
        <div class="row q-col-gutter-x-md">
          <div>
            <q-btn flat icon="bookmark" color="accent" round />
          </div>
          <div class="col">
            <q-btn color="accent" icon="download" class="fit" outline
              >DEAL SHEET</q-btn
            >
          </div>
          <div class="col">
            <q-btn color="accent" class="fit" unelevated>BUY TOKEN(S)</q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$height: 700px;
.card {
  border-radius: 10px 00px 00px 10px;
}
.card-inner {
  max-width: 800px;
}
.img-container {
  max-height: $height;
}
.main {
  min-height: $height;
  width: 100%;
  margin-top: -2px;

  background: linear-gradient(
      180deg,
      rgba(49, 153, 215, 0.2) 0%,
      rgba(0, 15, 23, 0.2) 100%
    ),
    linear-gradient(
      257.44deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(26, 57, 75, 0.2) 100%
    ),
    #132d3c;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductMain',

  setup() {
    const tags = [
      '#72/99',
      'ON-CARD AUTOGRAPHED',
      'JERSEY PATCH',
      'ROOKIE CARD',
    ];
    return {
      tags,
    };
  },
});
</script>
