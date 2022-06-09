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
      :width="user.data.value ? 80 : 200"
      show-if-above
      bordered
    >
      <layout-drawer v-if="user.data.value" />
      <q-list class="column fit bg-cream" v-else>
        <!-- AVATAR -->
        <div
          class="fn-md text-dark fn-jost fn-800 text-center text-uppercase q-my-md"
        >
          Get Started
        </div>
        <q-separator class="q-mx-sm" horizontal />
        <q-btn outline class="q-mx-sm q-mt-sm fn-xs"> Connect with NEAR</q-btn>
        <q-btn outline class="q-mx-sm q-mt-sm fn-xs" @click="signInGoogle">
          Connect with GOOGLE</q-btn
        >
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- TODO - FOOTER BINVIS BACKGROUND COVERS BUTTONS TO RPESS -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        unelevated
        icon="message"
        class="q-ma-lg dc text-white"
        size="20px"
        round
        href="https://discord.gg/gks5AT5v"
      />
    </q-page-sticky>
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
import { useFirebaseUser } from '@gcto/firebase-hooks';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

export default defineComponent({
  components: { LayoutDrawer, LayoutTimer },
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInGoogle = () => signInWithPopup(auth, provider);

    const user = useFirebaseUser();
    return {
      leftDrawerOpen,
      user,
      signInGoogle,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
