<template>
  <div class="z-padding-all-10px">
     <div>aaaaaaa</div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    } 
   },  //比父组件还早输出这些
  inject: ['app','name','minis'], //与上级组件的provide连用；  'app','name'与之对应
  mounted () {
    console.log(this.app);  // Aresn
    console.log('上面直接传值下面是this的获取');
    console.log(this.name.count); //需要调用的上级的，当然不一定是上面哪一级的那一页中的count，
    console.log(this.minis);  // 是调用的父组件的混入文件里的东西，由于比父组件还早输出古为空，一般不存在吧应该；
  },
  methods:{

  },  
}
</script> 
<style scoped>
  
</style>
