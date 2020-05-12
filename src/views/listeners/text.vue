<template>
  <div class="box">
    这是测试组建text 的三个测试用，用于实验，向组件的孙组件的子组件传值，甚至是更往下的嵌套的组件 (此为第一个子组件)
    <div>
      <text-cs2 v-bind="$attrs" v-on="$listeners" />
    </div>
  </div>
</template>
<script>
const textCs2 = () => import("./text2.vue");
export default {
    data() {
      return {

      }
    },
    inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
    components:{ textCs2 }

}
</script>  
<style scoped>
.box {
  padding:10px;
  background-color:#eee; 
  margin-top: 80px;
}
</style>

