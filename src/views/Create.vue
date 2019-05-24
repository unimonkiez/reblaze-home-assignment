<template>
  <div class="create">
    <!-- <v-layout> -->
    <v-flex xs10 sm6 offset-sm3>
      <!-- v-bind:currentColor.sync="chosenColor" v-bind:currentWidth.sync="chosenWidth" -->
      <DrawingBoard
        ref="drawingBoard"
        class="drawingBoard"
        id="drawingBoard"
        v-bind:readonly="false"
        v-bind:currentColor.sync="color"
        v-bind:currentWidth.sync="width"
        @timerStopped="onTimerStopped"
      />
      <Palette
        class="palette"
        v-bind:colors="colors"
        @colorUpdate="onColorChanged"
        @widthUpdate="onChangeWidth"
      />
      <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on }">-->
      <v-btn flat icon>
        <v-icon @click="onClearCanvas">delete_forever</v-icon>
      </v-btn>
      <!-- </template>
      <span>Bottom tooltip</span>
      </v-tooltip>-->
      <v-btn flat icon>
        <v-icon @click="onSaveDrawing">save</v-icon>
      </v-btn>
    <v-switch
      v-model="privateDrawing"
      :label="`Private drawing: ${privateDrawing.toString()}.`"
    ></v-switch>
      <!-- </DrawingBoard> -->
      <!-- v-bind:currentColor.sync="chosenColor"  v-bind:currentWidth="chosenWidth" -->
    </v-flex>
    <!-- </v-layout> -->
  </div>
</template>


<script>
// @ is an alias to /src
import DrawingBoard from "@/components/DrawingBoard.vue";
// import Drawings from "@/drawings";
import Palette from "@/components/Palette.vue";
import Colors from "@/colors.js";

export default {
  name: "create",
  components: {
    DrawingBoard,
    Palette
  },
  props: {
    chosenColor: String,
    chosenWidth: Number,
    timeToDraw: Number
  },
  data() {
    return {
      // drawings: Drawings.data,
      colors: Colors.data.colors,
      color: this.chosenColor,
      width: this.chosenWidth,
      time: this.timeToDraw,
      privateDrawing: false
    };
  },
  mounted() {
    this.color = "#000000";
    this.width = 1;
  },
  methods: {
    onTimerStopped(timeOfDrawing) {
      this.time = timeOfDrawing;
    },
    onSaveDrawing() {
      this.$refs.drawingBoard.onStopTimer();
      alert(this.time);
      let today = new Date();
      let date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      let time = today.getHours() + ":" + today.getMinutes();
      let dateTime = date + " " + time;
    },
    onClearCanvas() {
      this.$refs.drawingBoard.onClearCanvas();
    },
    onColorChanged(color) {
      this.color = color;
    },
    onChangeWidth(width) {
      this.width = width;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .create{
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