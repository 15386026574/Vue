<template>
  <div>
    <!-- 在组件中操作路由跳转 -->
    <div>这是b组件</div>

    <router-link to="/a">跳转到b组件</router-link>

    <button @click="toACom">按钮跳转到a组件</button>
    <button @click="getArg">获取参数</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    toACom () {
      console.log(11)
      this.$router.push({path: '/a'})
    },
    getArg () {
      // console.log(window.location.href)

      console.log(this.$route)
    }
  }
}
</script>
