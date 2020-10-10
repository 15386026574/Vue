<template>
  <div class="main">
      <myheader></myheader>
  </div>
</template>
<style scoped>
.main {
  display: flex;
  margin: 0px;
  padding: 0px;
  flex-direction: row;
}
</style>
<script>
import header from './myheader.vue'
import containter from './mycontainter.vue'
import footer from './myfooter.vue'
export default {
  components: {
    'myheader': header,
    'mycontainer': containter,
    'myfooter': footer
  }
}
</script>