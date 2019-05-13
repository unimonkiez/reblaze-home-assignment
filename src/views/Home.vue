<template>
  <div class="home">
    <DrawingList v-bind:data="draws"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DrawingList from '@/components/DrawingList.vue'
import Drawings from '@/drawings'

export default {
  name: 'home',
  components: {
    DrawingList
  },
  data() {
    return {
      draws: Drawings.data.draws,
    };
  }
}
</script>
