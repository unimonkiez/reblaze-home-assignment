<template>
  <!-- <div id="cursor" :class="[ readonly ? '.cursor-readonly' : '.cursor' ]"/> -->
  <div ref="cursor" id="cursor" class="cursor"/>
</template>

<script>
export default {
  name: "DrawingBoardCursor",
  props: {
    readonly: Boolean,
    coordinates: Object
  },
  mounted: function() {
    // window.addEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    handleMouseMove: function(event) {
      var cursor = document.getElementById("cursor");

      cursor.style.transform = `translate(${this.coordinates.x - 10}px, ${this
        .coordinates.y - 10}px)`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 100px solid rgb(0, 0, 150);
  pointer-events: none;
  user-select: none;
  mix-blend-mode: difference;
  opacity: 0;
  transition: opacity 1s;
}
.cursor-readonly {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 100px solid rgb(15, 150, 10);
  pointer-events: none;
  user-select: none;
  mix-blend-mode: difference;
  opacity: 0;
  transition: opacity 1s;
}
</style>
