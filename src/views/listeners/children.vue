<template>
  <div class="child">
    <p>name: {{ name }}</p>
    <p>childCom1的$attrs: {{ $attrs }}</p> 
    <!-- 注意v-bind="$attrs"使得本组建的子组件可以拿到传的值如果不传，他的子组件也就是相对于其父，是孙组建，this.$attrs拿不到值，因为相对于当前组件的子组件来说，数据从父组件传过来的
    v-bind属性$attr,保证组件能够获取到父组件传递下来的props(除props属性中声明的属性以外)；
     -->
    <child-com2 v-bind="$attrs" v-on="$listeners"></child-com2> 
  </div> 
</template>
<script>
const childCom2 = () => import("./children2.vue"); 
export default {   
  data() {
    return {
      testx:"这就是纯粹的测试，看this.$attrs拿到的是哪个组件",
    }
  },
  components: {  
    childCom2
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  props: {
    name: String // name作为props属性绑定 下面的 this.$attrs中不会输出name，孙也不会了   //此外，name 可以直接展示出来 而其他的需要 this.$attrs 点 来调用
  },
  created() {
    console.log(this.$attrs);
    console.log('age',this.$attrs.age);
     // { "age": "18", "gender": "女", "height": "158", "title": "程序员成长指北" }
  }
}
</script>
<style scoped> 
.child {
  width:300px;
  height:300px;
  background-color:red;
  padding-left:10px;
}
</style>


