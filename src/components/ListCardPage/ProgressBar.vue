<template>
  <div class="column full-height main">
    <div class="col-2 row justify-center">
      <div class="progress" />
    </div>
    <div class="col-2 column items-center">
      <div class="circle-filled" />
    </div>
    <div class="col-2 column items-center">
      <div :class="slideNum < '2' ? 'circle' : 'circle-filled'" />
    </div>
    <div class="col-2 column items-center">
      <div :class="slideNum < '3' ? 'circle' : 'circle-filled'" />
    </div>
    <div class="col-2 column items-center">
      <div :class="slideNum < '4' ? 'circle' : 'circle-filled'" />
    </div>
    <div class="col-2 column justify-between items-center">
      <div
        class="col-auto"
        :class="slideNum < '5' ? 'circle' : 'circle-filled'"
      />
      <div class="row col-3 self-stretch">
        <div
          class="col-12 full-width"
          :class="(slideNum === '1' || slideNum === '5') && 'end'"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  background: linear-gradient(90deg, transparent 50%, #fbf7ea 50%);
}

.end {
  background: linear-gradient(90deg, transparent 50%, #f5f2e6 50%);
  width: 100%;
}

.circle {
  width: 25px;
  height: 25px;
  border: 4px #fbf7ea solid;
  border-radius: 50%;
  background: #1a394b;
}

.progress {
  height: v-bind(height);
  width: 10px;
  background: #c9dfec;
}

.circle-filled {
  width: 25px;
  height: 25px;
  border: 1px #c9dfec solid;
  border-radius: 50%;
  background: #c9dfec;
}
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: { slideNum: String },
  setup(props) {
    const height = computed(() => `${parseInt(props.slideNum || '0') * 101}%`);
    return { height };
  },
});
</script>
