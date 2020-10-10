<template>
  <div>
    <!-- 在组件中操作路由跳转 -->
    <div>这是a组件</div>

    <router-link to="/b">跳转到b组件</router-link>

    <button @click="toBCom">按钮跳转到b组件</button>

    <a-child :toChild="test" @child-parent-func="getChildFunc"></a-child>

  </div>
</template>

<script>
import AChild from './a-child.vue'

export default {
  components: {
    AChild
  },
  data () {
    return {
      test: '传入组件内部参数'
    }
  },
  methods: {
    getChildFunc (data) {
      console.log(data)
    },
    toBCom () {
      // get请求 post请求

			console.log(this.$router)
			// 通过path&query跳转
      // this.$router.push({path: '/b', query: {name: 'tom', age: '10', id: '123', height: '180'}})

      // 通过name和params跳转
      this.$router.push({name: 'b', params: {newName: 'bob', newAge: '20'}})
    }
  }
}
</script>
