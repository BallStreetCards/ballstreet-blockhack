<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar flat class="bg-dark-cream">
        <q-btn
          flat
          class="absolute"
          color="primary"
          dense
          round
          :icon="leftDrawerOpen ? 'navigate_before' : 'navigate_next'"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row justify-center">
          <q-img class="logo" src="/assets/ballstreet_logo.png" />
        </q-toolbar-title>
      </q-toolbar>
      <layout-timer />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-cream"
      :width="80"
      show-if-above
      bordered
    >
      <layout-drawer />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- TODO - FOOTER BINVIS BACKGROUND COVERS BUTTONS TO RPESS -->
    <q-footer class="bg-transparent row justify-end">
      <q-btn
        unelevated
        icon="message"
        class="q-ma-lg dc"
        size="20px"
        round
        href="https://discord.gg/gks5AT5v"
      />
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>
.logo {
  width: 85px;
  height: 85px;
  margin: -5px 0px;
}
.dc {
  background-color: #5865f2;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LayoutDrawer from '../components/Layout/LayoutDrawer.vue';
import LayoutTimer from '../components/Layout/LayoutTimer.vue';

export default defineComponent({
  components: { LayoutDrawer, LayoutTimer },
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(true);
    return {
      leftDrawerOpen,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
