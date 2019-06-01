<template>
  <div class="home">
    <DrawingList class="drawings" v-bind:drawings="drawings.data.draws"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DrawingList from "@/components/DrawingList.vue";

export default {
  name: "home",
  components: {
    DrawingList
  },
  props: {
    drawings: Object,
  },
};
</script>