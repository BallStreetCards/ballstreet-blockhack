<template>
  <div class="">
    <div class="w-cd">
      <div class="text-center text-uppercase">
        <div class="bg-gradient fn-cd fn-xl row q-pt-md q-mb-sm fn-orbitron">
          <div class="col">{{ days }}</div>
          <div class="col-auto">:</div>
          <div class="col">{{ hours }}</div>
          <div class="col-auto">:</div>
          <div class="col">{{ minutes }}</div>
          <div class="col-auto">:</div>
          <div class="col">{{ seconds }}</div>
        </div>
        <div class="cd-label row">
          <div class="col">Days</div>
          <div class="col">Hours</div>
          <div class="col">Minutes</div>
          <div class="col">Seconds</div>
        </div>
      </div>
      <div class="row q-mt-md">
        <q-btn class="col" color="accent">View Details</q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCountdown } from 'src/hooks/countdown';
const { days, minutes, hours, seconds } = useCountdown(
  new Date('June 30, 2022 23:15:00')
);
</script>

<style scoped lang="scss">
.w-cd {
  width: 22rem;
}

.cd-label {
  color: #545654;
  background-color: #1c1a1c;
}

.bg-gradient {
  background: linear-gradient(to bottom, #1c1a1c, black);
}
</style>
