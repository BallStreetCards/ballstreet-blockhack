<template>
  <q-list class="column fit bg-cream">
    <!-- AVATAR -->
    <div class="row justify-center q-py-lg">
      <q-avatar size="40px" v-if="user.data.value?.photoURL"
        ><q-img :src="user.data.value?.photoURL || ''"
      /></q-avatar>
      <q-skeleton size="40px" type="QAvatar" v-else />
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
        @click="logout"
      />
    </div>
  </q-list>
</template>

<script lang="ts">
import { useFirebaseUser } from '@gcto/firebase-hooks/lib';
import { defineComponent } from 'vue';
import { signOut, getAuth } from 'firebase/auth';
export default defineComponent({
  setup() {
    const user = useFirebaseUser();
    const auth = getAuth();
    const logout = () => signOut(auth);
    const routes = [
      {
        name: 'dashboard',
        icon: 'dashboard',
        route: '',
      },

      { name: 'marketplace', icon: 'store', route: 'marketplace' },
      { name: 'listing', icon: 'add', route: 'listing' },
    ];
    return { routes, user, logout };
  },
});
</script>
