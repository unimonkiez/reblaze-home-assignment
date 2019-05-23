<template>
  <div class="home">
    <DrawingList v-bind:drawings="drawings"/>
  </div>
</template>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAjyIEh7BeVP0ThoytWPx1koKgcefVE0hw",
    authDomain: "drawing-canvas-1b118.firebaseapp.com",
    databaseURL: "https://drawing-canvas-1b118.firebaseio.com",
    projectId: "drawing-canvas-1b118",
    storageBucket: "drawing-canvas-1b118.appspot.com",
    messagingSenderId: "614915358649",
    appId: "1:614915358649:web:a3f14caf3216258f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

<script>
// @ is an alias to /src
import DrawingList from "@/components/DrawingList.vue";
import Drawings from "@/drawings.js";

export default {
  name: "home",
  components: {
    DrawingList
  },
  data() {
    return {
      drawings: Drawings.data.draws
    };
  }
};
</script>

</script>