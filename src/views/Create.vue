<template>
  <div class="create">
    <!-- <v-layout> -->
    <v-flex xs12 sm6 offset-sm3>
            <!-- v-bind:currentColor.sync="chosenColor" v-bind:currentWidth.sync="chosenWidth" -->
      <DrawingBoard id="drawingBoard" v-bind:readonly="false" v-bind:currentColor.sync="chosenColor" v-bind:currentWidth.sync="chosenWidth"/> 
      <!-- </DrawingBoard> -->
      <Palette v-bind:colors="colors" @colorUpdate="onColorChanged"/>
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
    chosenWidth: Number
  },
  data() {
    return {
      // drawings: Drawings.data,
      colors: Colors.data.colors
    };
  },
  methods: {
    onColorChanged(color)
    {
      this.chosenColor = color;
    }
  }
};
</script>
