<template>
  <div>
    <a>这是b界面</a>
    <!--  -->
    <button @click="toA">去往A界面</button>
    <button @click="getA">getDataQuery</button>
    <button @click="getAparams">getDatapa</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    // 注意取值用this.$route,
    // 注意传递值用this.$router
    toA () {
      console.log(this.$router)
      this.$router.push({ path: '/a' })
    },
    getA () {
      console.log(this.$route.query)
    },
    getAparams () {
      console.log(this.$route)
      console.log(this.$route.params)
    }
  }
}
</script>
