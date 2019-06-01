<template>
  <v-app>
    <v-tabs v-model="currentRoute" @change="tabChanged" color="cyan" dark slider-color="red">
      <v-tab ripple>Home</v-tab>
      <v-tab ripple>Create</v-tab>
      <!-- <v-tab ripple>Show</v-tab> -->
    </v-tabs>

    <router-view v-if="ready" v-bind:drawings="drawings"/>
    <v-content></v-content>
  </v-app>
</template>
<script>
import Drawings from './drawings.js';
import Colors from './colors.js';
import { observer } from 'mobx-vue';

const indexToRouteName = [
  '/home',
  '/create',
  '/show'
];

export default observer({
  data() {
    return {
      drawings: new Drawings(),
      currentRoute: indexToRouteName.indexOf(this.$route.path),
      ready: false,
    }
  },
  methods: {
    tabChanged(routeIndex) {
      const route = indexToRouteName[routeIndex];
      this.$router.push(route)
    }
  },
  async created () {
    await this.drawings.getData();
    this.ready = true;
  },
})
</script>
