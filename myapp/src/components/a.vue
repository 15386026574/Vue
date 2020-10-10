<template>
  <div>
    <a>这是a界面</a>
    <button @click="toB">去往B界面</button>
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
    }
  }
}
</script>
