<template>
  <canvas
    ref="canvas"
    v-on:mousedown="handleMouseDown"
    v-on:mouseup="handleMouseUp"
    v-on:mousemove="handleMouseMove"
    width="800px"
    height="800px"
  ></canvas>
</template>

<script>
export default {
  name: "DrawingBoard",
  data: function() {
    return {
      mouse: {
        current: {
          x: 0,
          y: 0
        },
        down: false
      }
    };
  },
  props: {
    strokes: {
      type: Array,
      default: function() {
        return [];
      }
    },
    readonly: Boolean
  },
  mounted: function() {
    // var c = this.$refs.canvas;
    // var ctx = c.getContext("2d");
    // ctx.translate(0.5, 0.5);
    // ctx.imageSmoothingEnabled= false;
    this.draw();
  },
  methods: {
    getRatio() {
      const canvas = this.$refs.canvas;
      const actualWidth = canvas.getBoundingClientRect().width;
      const canvasWidth = canvas.width;
      return canvasWidth / actualWidth;
    },
    draw: function(event) {
      // requestAnimationFrame(this.draw);
      // if (this.mouse.down )
      var c = this.$refs.canvas;

      var ctx = c.getContext("2d");

      ctx.clearRect(0, 0, 800, 800);

      this.strokes.forEach(draw => {
        ctx.beginPath();

        const [firstCordinate, ...otherCordinates] = draw.coordinates;

        ctx.moveTo(firstCordinate.x, firstCordinate.y);

        otherCordinates.forEach(coordinate => {
          ctx.lineTo(coordinate.x, coordinate.y);
        });

        ctx.strokeStyle = draw.color;
        ctx.lineWidth = draw.width;

        ctx.stroke();
      });
    },
    handleMouseDown: function(event) {
      if (!this.readonly) {
        const newStrokes = this.strokes;
        this.mouse.down = true;

        var c = this.$refs.canvas;

        const ratio = this.getRatio();

        newStrokes.push({
          width: 10,
          color: "#ff0000",
          coordinates: [
            {
              x: event.offsetX * ratio,
              y: event.offsetY * ratio
            }
          ]
        });

        this.$emit("update:strokes", newStrokes);
      }
    },
    handleMouseUp: function() {
      if (!this.readonly) {
        this.mouse.down = false;
      }
    },
    handleMouseMove: function(event) {
      if (!this.readonly && this.mouse.down) {
        const newStrokes = this.strokes;

        var c = this.$refs.canvas;

        const ratio = this.getRatio();

        newStrokes[newStrokes.length - 1].coordinates.push({
          x: event.offsetX * ratio,
          y: event.offsetY * ratio,
        });

        this.$emit("update:strokes", newStrokes);
        this.draw();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
  background: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: auto;
}
</style>
