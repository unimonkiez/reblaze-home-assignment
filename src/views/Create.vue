<template>
  <div class="create">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <h1>This is a create page</h1>
        </v-card>  
        <DrawingBoard />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import DrawingBoard from '@/components/DrawingBoard.vue'
import Drawings from '@/drawings'

export default {
  name: 'home',
  components: {
    DrawingBoard
  },
  data() {
    return Drawings.data;
  },
}
</script>

