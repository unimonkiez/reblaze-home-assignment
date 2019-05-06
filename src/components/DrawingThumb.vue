<template>
  <div class="drawing-thumb">
    I'm a thumb with id: {{data.id}}
  </div>
</template>

<script>
export default {
  name: 'DrawingThumb',
  props: {
    data: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
