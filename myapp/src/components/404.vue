<template>
  <div>
    <h1>404</h1>
    <button @click="goBack">goBack</button>
  </div>
</template>
<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
