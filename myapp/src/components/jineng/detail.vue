<template>
  <div>
    <div class="_header">
      <button>返回</button>
      <div>文章管理</div>
      <button>保存</button>
    </div>
    <div class="bigDiv">
      <span 
      :class="{active:curuent===index}"
      @click="changecuruent(index)"
      v-for="(item, index) in items" 
      v-bind:key="index">
      {{item.name}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [{ name: '文章列表' }, { name: '文章编写' }, { name: '文章分类' }],
      curuent:0
    }
  },
  methods: {
    changecuruent(data){
        this.curuent=data
    }
  },
}
</script>
<style scoped>
._header {
  display: flex;
  background-color: blueviolet;
  justify-content: space-around;
}
.bigDiv {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  background-color: blanchedalmond;
}
.bigDiv>span{
  box-sizing: border-box;
  border-right: 1px black solid;
  border-bottom: 1px black solid;
  cursor: pointer;
  flex: 1;
  line-height: 40px;
  text-align: center;
}
.bigDiv>span:last-child{
  border-right: none;
}
.active{
  background-color: azure;
}
</style>
