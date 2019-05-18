<template>
  <div class="create">
    <!-- <v-layout> -->
    <v-flex xs12 sm6 offset-sm3>
      <DrawingBoard id="drawingBoard" v-bind:readonly="false"/>
      <!-- </DrawingBoard> -->
      <Palette v-bind:colors="colors"/>
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
  // props: {
  //   data: Array
  // },
  data() {
    return {
      // drawings: Drawings.data,
      colors: Colors.data.colors
    };
  }
};
</script>
