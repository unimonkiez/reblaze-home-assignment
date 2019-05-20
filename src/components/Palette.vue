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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Color from "@/components/Color.vue";

export default {
  name: "Palette",
  components: {
    Color
  },
  props: {
    colors: Array,
    // currentColor: String
  },

  methods: {
    onColorChanged(color)
    {
      this.$emit("update:chosenColor", color);
      // this.currentColor = color;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>