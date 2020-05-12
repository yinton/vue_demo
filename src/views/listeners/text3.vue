<template>
  <div class="box">
    这是测试组建text3 (此为第三个子组件)
    这就是父组件的父组件的父组件 传来的值 {{$attrs}}
    <button style="background:red;" @click.stop="changes"> 点此传值到最上层 </button>  
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  inheritAttrs: false, 
  created() {
    console.log('textt3333打印====',this.$attrs); 
  },
  methods:{
    changes() {
       this.$emit('txt1','孙组件的子组件 -- 传过来的值啊啊啊');
    }
  }
  //$listeners 组件由下向上回传事件
}
</script>
</script>  
<style scoped>
.box {
  padding:0 10px 10px 10px;
  background-color:#eee;
  margin-top: 20px;
}
</style>
