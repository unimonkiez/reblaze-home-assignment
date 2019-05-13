<template>
  <div class="drawing-list">
    <div class="drawings-container">
      <DrawingThumb v-for="(item, index) in data" v-bind:key="item.id" v-bind:data.sync="data[index]" />
    </div>
  </div>
</template>

<script>
import DrawingThumb from '@/components/DrawingThumb.vue'

export default {
  name: 'DrawingList',
  components: {
    DrawingThumb
  },
  props: {
    data: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
