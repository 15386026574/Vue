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
