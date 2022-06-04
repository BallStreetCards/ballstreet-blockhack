<template>
  <div class="bg-transparent">
    <q-img class="bg-dark-cream" src="/assets/ProductPage/footer.png">
      <div class="fit row bg-transparent">
        <!-- DONT LIKE THIS- FIX IN THE FUTURE (RUSHED FOR DEMO PURPOSES) -->
        <div class="col-4"></div>
        <div class="col column items-center q-mt-xl">
          <div class="col-7"></div>
          <div class="col-5">
            <q-btn unelevated class="q-mt-xl q-px-xl" color="accent"
              >BUY TOKEN(S)</q-btn
            >
          </div>
        </div>
      </div>
    </q-img>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
