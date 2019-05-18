<template>
  <div class="drawing-thumb">
    I'm a drawing with id: {{draw.id}}
    <div class="drawing-thumb-board-container">
      <DrawingBoard v-bind:strokes.sync="draw.content" readonly/>
    </div>
  </div>
</template>

<script>
import DrawingBoard from "@/components/DrawingBoard.vue";

export default {
  name: "DrawingThumb",
  components: {
    DrawingBoard
  },
  props: {
    draw: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drawing-thumb-board-container {
  width: 20%;
}
/* .thumbnails:hover {
    width: 130%;
    transition: 0.5s;
  } */
</style>
