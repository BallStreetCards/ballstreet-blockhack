<template>
  <q-list class="column fit bg-cream">
    <!-- AVATAR -->
    <div class="row justify-center q-py-lg">
      <q-skeleton size="40px" type="QAvatar" />
    </div>
    <q-separator class="q-mx-sm" horizontal />

    <div class="row justify-center q-gutter-y-sm q-py-lg">
      <q-btn
        v-for="route in routes"
        :key="route.name"
        color="primary"
        class="op-60"
        :to="`/${route.route}`"
        round
        flat
        :icon="route.icon"
        size="15px"
      />
    </div>
    <q-space />

    <div class="row justify-center q-gutter-y-sm q-py-lg">
      <q-btn
        color="primary"
        class="op-60"
        round
        flat
        icon="settings"
        size="15px"
      />
      <q-btn color="primary" class="op-60" round flat icon="info" size="15px" />
    </div>
    <q-separator class="q-mx-sm" horizontal />
    <div class="row justify-center q-gutter-y-sm q-py-lg">
      <q-btn
        color="primary"
        class="op-60"
        round
        flat
        icon="meeting_room"
        size="15px"
      />
    </div>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const routes = [
      {
        name: 'dashboard',
        icon: 'dashboard',
        route: '',
      },

      { name: 'marketplace', icon: 'store', route: 'marketplace' },
      { name: 'listing', icon: 'add', route: 'listing' },
    ];
    return { routes };
  },
});
</script>
