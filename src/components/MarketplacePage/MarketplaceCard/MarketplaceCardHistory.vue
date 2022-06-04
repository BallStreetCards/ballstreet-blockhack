<template>
  <div>
    <!-- Overlay -->
    <div
      :class="{
        'relative-position': true,
        grayscale: soon,
        'op-40': soon,
        'no-pointer-events': soon,
      }"
    >
      <!-- TOP -->
      <div class="row justify-between items-center">
        <div class="text-primary op-80">
          <strong>PANINI</strong> | Immaculate Collection 2018-2019
        </div>
        <q-chip color="primary" dark class="fn-600 fn-jost"> BGS 9 </q-chip>
      </div>
      <!-- Name -->
      <div class="text-uppercase text-primary row fn-xl q-mt-md">
        <div class="fn-700">{{ card.name }}</div>
        <div class="fn-300 op-80 q-ml-sm">#136</div>
      </div>
      <!-- Tags -->
      <div class="row q-mt-md">
        <q-chip
          :key="tag"
          v-for="tag in tags"
          outline
          color="primary"
          class="op-60"
          >{{ tag }}</q-chip
        >
      </div>

      <!-- Chart -->
      <div>
        <apex-chart
          type="area"
          :options="config"
          :series="series"
          height="250px"
        />
      </div>
    </div>
    <!-- END OF OVERLAY -->

    <!-- Buttons -->
    <div class="row q-col-gutter-x-md">
      <div class="col">
        <q-btn color="accent" icon="download" class="fit" outline
          >DEAL SHEET</q-btn
        >
      </div>
      <div class="col">
        <q-btn color="accent" class="fit" outline>View Details</q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ApexChart from 'vue3-apexcharts';
import Card from '../../../models/Card';

interface Props {
  soon: boolean | undefined;
  card: Card;
}

defineProps<Props>();

const tags = ['#72/99', 'ON-CARD AUTOGRAPHED', 'JERSEY PATCH'];

const config = {
  chart: {
    type: 'area',
    foreColor: '#888888',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  animations: {
    initialAnimation: {
      enabled: false,
    },
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: 'datetime',
    labels: {
      show: false,
    },
  },
  colors: ['#f58426'],
};
const series = [
  {
    name: 'Share value',
    data: [
      [1486684800000, 34],
      [1486684860000, 34],
      [1486684840000, 34],
      [1486771200000, 43],
      [1486857600000, 31],
      [1486944000000, 43],
      [1487030400000, 33],
      [1487116800000, 52],
    ],
  },
];
</script>

<style lang="scss" scoped></style>
