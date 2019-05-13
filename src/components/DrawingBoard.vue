<template>
  <canvas
    ref="canvas"
    v-on:mousedown="handleMouseDown"
    v-on:mouseup="handleMouseUp"
    v-on:mousemove="handleMouseMove"
    width="800px"
    height="800px">
  </canvas>
</template>

<script>

export default {
  name: 'DrawingBoard',
  data: function () {
    return {
      mouse: {
        current: {
          x: 0,
          y: 0
        },
        down: false
      }
    }
  },
  methods: {

    getRatio(){
        const canvas = this.$refs.canvas;
        const actualWidth = canvas.getBoundingClientRect().width;
        const canvasWidth = canvas.width;
        return canvasWidth / actualWidth;
    },
    draw: function (event) {
      
      // requestAnimationFrame(this.draw);
      if (this.mouse.down ) {
        var c = this.$refs.canvas;

      var ctx = c.getContext("2d");
        
      ctx.clearRect(0,0,800,800);
        
    
      ctx.lineTo(this.mouse.current.x, this.mouse.current.y);
      ctx.strokeStyle ="#F63E02";
      ctx.lineWidth = 2;
      ctx.stroke()
      }
      
      },
      handleMouseDown: function (event) {
        this.mouse.down = true;

        var c = this.$refs.canvas;

        const ratio = this.getRatio();

        this.mouse.current = {
          x: event.offsetX * ratio,
          y: event.offsetY * ratio
        }

              
        var ctx = c.getContext("2d");

        ctx.moveTo(this.mouse.current.x, this.mouse.current.y)
        

      },
          handleMouseUp: function () {
        this.mouse.down = false;
      },
      handleMouseMove: function (event) {

        var c = this.$refs.canvas;

        const ratio = this.getRatio();

        this.mouse.current = {
          x: event.offsetX * ratio,
          y: event.offsetY * ratio
        }
        
        this.draw(event)
        
      }
    },
                    ready: function () {
                      
                      var c = this.$refs.canvas;
      var ctx = c.getContext("2d");
                      ctx.translate(0.5, 0.5);
                      ctx.imageSmoothingEnabled= false;
    this.draw();
  }
}
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
