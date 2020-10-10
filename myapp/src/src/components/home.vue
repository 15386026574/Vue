<template>
  <div>
      <div class="header">这是header</div>
      adasdasdasdas
      adasdasdasdasasdasdasdas
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    //   嵌套路由
  }
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 50px;
    background: red;
}
</style>
