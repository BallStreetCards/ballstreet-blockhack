<template>
  <div class="box-shadow-bottom row q-pa-sm rounded-borders">
    <div class="col">
      <q-input
        rounded
        outlined
        v-model="search"
        label="Search for cards..."
        label-color="brown"
        class="full-width"
        bg-color="cream"
        @keyup.enter="handleSearch"
      >
        <template v-slot:append>
          <q-icon
            name="search"
            color="primary"
            class="cursor-pointer"
            @click="handleSearch"
          /> </template
      ></q-input>
    </div>
    <div class="col-3 q-ml-md">
      <q-select
        v-model="sort"
        :options="options"
        rounded
        outlined
        label="Sort by"
        label-color="brown"
        bg-color="cream"
        popup-content-class="marketplace-search-select-popup"
      ></q-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type SortType = 'Newest' | 'Oldest' | 'Lowest' | 'Highest';

const search = ref('');
const sort = ref<SortType | null>(null);
const options: SortType[] = ['Newest', 'Oldest', 'Lowest', 'Highest'];

function handleSearch() {
  //TODO: logic here
}
</script>

<style lang="scss" scoped>
.box-shadow-bottom {
  box-shadow: 8px 10px 13px -10px #514d4031;
}
</style>
