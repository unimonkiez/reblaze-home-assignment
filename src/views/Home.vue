<template>
  <div class="home">
    <DrawingList class="drawings" v-bind:drawings="drawings"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DrawingList from "@/components/DrawingList.vue";
import Drawings from "@/drawings.js";

export default {
  name: "home",
  components: {
    DrawingList
  },
  data() {
    return {
      drawings: Drawings.data.draws
    };
  },
};
</script>