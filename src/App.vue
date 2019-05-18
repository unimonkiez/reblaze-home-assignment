<template>
  <v-app>
    <v-tabs
      v-model="currentRoute"
      @change="tabChanged"
      color="cyan"
      dark
      slider-color="red"
    >
      <v-tab ripple>
        Home
      </v-tab>
      <v-tab ripple>
        Create
      </v-tab>
    </v-tabs>

    <router-view/>
    <v-content>
    </v-content>
  </v-app>
</template>
<script>
import Drawings from './drawings.js';
import Colors from './colors.js';

const indexToRouteName = [
  '/',
  '/create',
];

export default {
  data() {
    return {
      currentRoute: indexToRouteName.indexOf(this.$route.path),
    }
  },
  methods: {
    tabChanged(routeIndex) {
      const route = indexToRouteName[routeIndex];
      this.$router.push(route)
    }
  },
  created () {
    Drawings.getData();
    Colors.getData();
  },
}
</script>
