<template>
  <div class="column fit">
    <div class="row">
      <!-- MY CARDS -->
      <div class="col text-uppercase text-primary fn-lg fn-800 q-pt-lg q-pb-lg">
        my cards
      </div>
      <div class="col q-pt-lg q-pb-lg">
        <div class="row justify-end">
          <!-- WALLPAPER BUTTON -->
          <div class="col-md-auto q-pr-sm">
            <q-btn flat dense color="brown" icon="wallpaper" />
          </div>
          <!-- SIGNAL CELLULAR ALT BUTTON -->
          <div class="col-md-auto q-pr-sm">
            <q-btn flat dense color="light-brown" icon="signal_cellular_alt" />
          </div>
          <!-- SORT BY -->
          <div class="col-6">
            <q-select
              rounded
              outlined
              dense
              label="Sort by"
              label-color="brown"
              bg-color="cream"
            ></q-select>
          </div>
        </div>
      </div>
    </div>
    <!-- CARDS -->
    <div class="row fit q-pl-xl q-pb-lg q-pt-lg q-col-gutter-x-xl">
      <div class="col">
        <q-img
          class="border-round fit"
          src="/assets/PortfolioPage/michael-jordan-card-one.png"
        />
      </div>
      <div class="col">
        <q-img
          class="border-round fit"
          src="/assets/PortfolioPage/pokemon-card.png"
        />
      </div>
      <div class="col">
        <q-img
          class="border-round fit"
          src="/assets/PortfolioPage/trae-young-card-one.png"
        />
      </div>
      <div class="col">
        <q-img
          class="border-round fit"
          src="/assets/PortfolioPage/tom-brady-card.png"
        />
      </div>
    </div>
    <div class="row fit q-pl-xl q-pb-lg q-pt-lg q-col-gutter-x-xl">
      <div class="col">
        <q-img
          class="border-round fit"
          src="/assets/PortfolioPage/tom-brady-card.png"
        />
      </div>
      <div class="col">
        <q-img
          class="border-round fit"
          src="/assets/PortfolioPage/michael-jordan-card-two.png"
        />
      </div>
      <div class="col">
        <q-img
          class="border-round fit"
          src="/assets/PortfolioPage/mickey-mantle-card.png"
        />
      </div>
      <div class="col">
        <q-img
          class="border-round fit"
          src="/assets/PortfolioPage/wayne-gretzky-card.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyCardsBottom',

  setup() {
    return {};
  },
});
</script>
