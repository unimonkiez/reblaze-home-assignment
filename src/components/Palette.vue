<template>
  <div class="palette">
    <div class="color-container">
      <Color
        v-for="(item, index) in colors"
        v-bind:key="item.id"
        v-bind:color.sync="colors[index]"
        @clicked="onColorChanged"
      />
    </div>
    <div class="size-container">
      <vue-slider class="slider"
        v-model="sliderValue"
        v-on:drag-start="onDragStart"
        v-on:dragging="onDragging"
        v-on:drag-end="onDragEnd"
      ></vue-slider> {{ sliderValue}}
      <span class="width-circle"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import Color from "@/components/Color.vue";

export default {
  name: "Palette",
  components: {
    Color,
    VueSlider
  },
  props: {
    colors: Array,
    currentWidth: Number
    // currentColor: String
  },
  data() {
    return {
      sliderValue: 0,
    };
  },
  methods: {
    onColorChanged(color) {
      this.$emit("colorUpdate", color);
      // this.currentColor = color;
    },
    onDragStart() {
      // alert(1)
    },
    onDragging() {
      // this.currentWidth = {{ currentWidth }};
    },
    onDragEnd() {
      // this.currentWidth = sliderValue; 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.size-container {
  width: 80%;
  /* display: inline-block; */
}

.width-circle {
  box-shadow: 1px 5px 5px black;
  height: 30px;
  width: 30px;
  margin-right: 2px;
  background-color: #a299b9;
  border-radius: 50%;
  display: inline-block;
}

/* .slider{
  
} */
</style>