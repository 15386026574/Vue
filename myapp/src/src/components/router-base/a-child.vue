<template>
  <div class="box">
      这是a-child子组件
      {{toChild}}

      <button @click="sendParent">a-child-click</button>
  </div>
</template>

<script>
export default {
    name: 'a-child',
    props: {
      toChild: {
        type: String,
        default: ''
      }
    },
  data () {
    return {}
  },
  methods: {
    sendParent () {
      this.$emit('child-parent-func', 666)
    }
  }
}
</script>

<style scoped>
.box {
    width: 200px;
    height: 200px;
    background: red;
    color: #000;
    font-size: 20px;

}
</style>
