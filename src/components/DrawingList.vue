<template>
  <div class="drawing-list">
    <div class="drawings-container">
      <DrawingThumb
        v-for="(item, index) in drawings"
        v-bind:key="item.id"
        v-bind:draw.sync="drawings[index]"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DrawingThumb from "@/components/DrawingThumb.vue";

export default {
  name: "DrawingList",
  components: {
    DrawingThumb
  },
  props: {
    drawings: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
