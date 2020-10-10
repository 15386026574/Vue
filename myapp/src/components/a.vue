<template>
  <div>
    <a>这是a界面</a>
    <button @click="toB">去往B界面query</button>
    <button @click="toBpa">去往B界面paramas</button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    toB () {
      this.$router.push({ path: '/b', query: { name: 'YYB', age: 12 } })
    },
    toBpa () {
      this.$router.push({ name: 'b', params: { name: 'YYBLOVE', age: 122 } })
    }
  }
}
</script>
