<template>
  <div class="child">
    children2 
    <div class="listener" @click="change">点我向祖父传值</div>
    <p>age: {{ age }}</p>
    <p>childCom2: {{ $attrs }}</p>
  </div>
</template> 
<script>
export default {
  data() {
    return {

    }
  },
  inheritAttrs: false, 
  props: {
    age: String      //下面的this.$attrs不会输出age了 ，但是age可以直接展示出来在tenmlate
  },
  created() {
    console.log(this.$attrs); 
    // { "gender": "女", "height": "158", "title": "程序员成长指北" }
  },
  methods:{
    change() {
       this.$emit('event1','孙组建传过来的值啊啊啊');
    }
  }
  //$listeners 组件由下向上回传事件
}
</script>
<style scoped>
.child {
  width:300px;
  height:100px;
  background-color:orange;
  margin-top:20px;
}
.listener {
  width:130px;
  padding:10px;
  background-color:pink;
}
</style>


