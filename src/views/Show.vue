<template>
  <div class="show">
    <v-flex xs10 sm6 offset-sm3>
      This is '{{this.drawing.name}}', by '{{this.drawing.creator}}', created on the {{this.drawing.date}} and took {{this.calculateTime(this.drawing.time)}} seconds to make.
      <DrawingBoard
        ref="drawingBoard"
        class="drawingBoard"
        id="drawingBoard"
        v-bind:strokes.sync="drawing.content"
        v-bind:readonly="true"
      />
      <v-btn flat icon>
        <v-icon @click="onRedraw">replay</v-icon>
      </v-btn>
      <v-btn flat icon>
        <v-icon @click="onPauseRedraw">pause_circle_filled</v-icon>
      </v-btn>
      <v-btn flat icon>
        <v-icon @click="onEdit">edit</v-icon>
      </v-btn>
    </v-flex>
  </div>
</template>


<script>
// @ is an alias to /src
import DrawingBoard from "@/components/DrawingBoard.vue";

export default {
  name: "show",
  components: {
    DrawingBoard
  },
  props: {
    drawing: Object
  },
  data() {
    return {};
  },
  methods: {
    onRedraw() {
      alert(10);
    },
    onPauseRedraw() {},
    onEdit() {},
    onClearCanvas() {
      this.$refs.drawingBoard.onClearCanvas();
    },
    calculateTime(time) {
      if (time < 60) {
        return time;
      } else {
        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;

        if (minutes == 1) {
          return minutes + " minute and " + seconds;
        } else {
          return minutes + " minutes and " + seconds;
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .show{
  display:flex;
  flex-direction:row;

} */
/* .palette{
  width: 80%;
} */
/* .drawingBoard{
  float: right;
}  */
</style>
