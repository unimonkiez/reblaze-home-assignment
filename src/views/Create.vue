<template>
  <div class="create">
    <!-- <v-layout> -->
    <v-flex xs10 sm6 offset-sm3>
      <!-- v-bind:currentColor.sync="chosenColor" v-bind:currentWidth.sync="chosenWidth" -->
      <!-- v-bind:strokes="drawingStrokes" -->
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
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="drawingName"
          :rules="[rules.required, rules.min, rules.max]"
          placeholder="Drawing name"
        ></v-text-field>
      </v-form>
      <v-btn flat icon>
        <v-icon @click="onSaveDrawing">save</v-icon>
      </v-btn>
      <!-- <v-text-field value="${this.time}"></v-text-field> -->
      <v-switch v-model="privateDrawing" :label="`Private drawing: ${privateDrawing.toString()}.`"></v-switch>
      <!-- </DrawingBoard> -->
      <!-- v-bind:currentColor.sync="chosenColor"  v-bind:currentWidth="chosenWidth" -->
    </v-flex>
    <!-- </v-layout> -->
  </div>
</template>


<script>
// @ is an alias to /src
import DrawingBoard from "@/components/DrawingBoard.vue";
import Palette from "@/components/Palette.vue";
import Colors from "@/colors.js";
// import Uuid from "uuid/v4";

export default {
  name: "create",
  components: {
    DrawingBoard,
    Palette
  },
  props: {
    // chosenColor: String,
    // chosenWidth: Number,
    // timeToDraw: Number,
    drawings: Object
  },
  // computed: {
  //   form() {
  //     return {
  //       name: this.drawingName
  //     };
  //   }
  // },
  data() {
    return {
      valid: true,
      // strokes: [],
      colors: Colors.data.colors,
      color: this.chosenColor,
      width: this.chosenWidth,
      time: this.timeToDraw,
      privateDrawing: false,
      drawingName: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 3 || "Min 3 characters",
        max: v => v.length <= 20 || "Max 20 characters"
      }
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
      if (this.$refs.form.validate()) {
        this.$refs.drawingBoard.onStopTimer();
        const today = new Date();
        const date =
          today.getDate() +
          "/" +
          (today.getMonth() + 1) +
          "/" +
          today.getFullYear();
        const time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        const dateTime = date + " " + time;

        const creator = "Admin";

        const drawing = {
          // id: creator + "," + this.drawingName + "," + date + "," + time,
          // id: Uuid.uuidv4(),
          name: this.drawingName,
          creator: creator,
          private: this.privateDrawing,
          date: dateTime,
          time: this.time,
          content: this.$refs.drawingBoard.drawingStrokes
        };

        this.drawings.addDrawing(drawing);
        alert("'" + drawing.name + "'" + " was saved successfully!");
      }
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