<template>
  <q-card class="bg-cream box-shadow fit col border-round">
    <q-card-section>
      <div class="col-12 row justify-between">
        <h2 class="q-my-none fn-700 text-primary fn-lg text-uppercase">
          Price History
        </h2>
        <div class="row q-col-gutter-md items-end">
          <div v-for="interval in intervals" :key="interval" class="col">
            <q-btn flat color="brown" dense class="op-60 fn-xs">
              {{ interval }}
            </q-btn>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <apex-chart
        type="area"
        :options="config"
        :series="series"
        height="250px"
      />
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.graph {
  &-button {
    width: 100px;
  }
  &-option {
    align-self: start;
    width: 90%;
  }
}
</style>

<script lang="ts">
import { ApexOptions } from 'apexcharts';
import { defineComponent, computed } from 'vue';
import ApexChart from 'vue3-apexcharts';

export default defineComponent({
  components: { ApexChart },
  name: 'ProductPriceHistory',
  setup() {
    const intervals = ['ALL', '1M', '3M', '6M', 'YTD'];
    const config: ApexOptions = {
      chart: {
        type: 'area',
        foreColor: '#888888',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value.toFixed(2) + ' $';
          },
        },
      },
      colors: ['#f58426'],
    };
    const series = [
      {
        name: 'Token Price',
        data: [
          [1486684800000, 5.0],

          [1487116800000, 5.0],
          // [1486684800000, 34],
          // [1486684860000, 34],
          // [1486684840000, 34],
          // [1486771200000, 43],
          // [1486857600000, 31],
          // [1486944000000, 43],
          // [1487030400000, 33],
          // [1487116800000, 52],
        ],
      },
    ];
    const details = computed(() => [
      {
        name: 'Market Cap',
        value: `$${0}.00`,
      },
      {
        name: 'Share Price',
        value: `$${0}.00`,
      },
      { name: 'Investors', value: '204' },
      { name: '% Listed', value: '45.4%' },
    ]);

    return { details, series, config, intervals };
  },
});
</script>
