<template>
  <div class="box">
    这是测试组建text2  (此为第二个子组件)
    <span @click.stop="changesxx"> 点击这里测试抛出事件至上层 </span>    
    <text-cs3 v-bind="$attrs" v-on="$listeners" /> 
    
  </div>
</template>
<script>
const textCs3 = () => import("./text3.vue");
export default {
    data() {
      return {

      }
    },
    methods:{
        changesxx() {
          this.$emit('txt0','孙组件 -- 传过来的值啊啊啊');
        }
    },
    inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
    components:{ textCs3 }
}
</script>  
<style scoped>
.box {
  padding:0 10px 10px 10px;
  background-color:#eee;
  margin-top: 20px;
}
span{
    color:red;
}
</style>
