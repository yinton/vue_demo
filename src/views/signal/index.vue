<template>
  <div class="z-padding-all-10px">
    <div>介绍一种无依赖的组件通信方法：Vue.js 内置的 provide / inject 接口这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效</div>
    <div class="z-margin-top-10px">假设有两个组件： 当前组件有一个子组件</div>
    <div class="z-margin-top-10px">provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。</div>
    <div class="z-margin-top-10px">当然其实可以在子中拿到比如根组件的数据（用户数据），在子中更改后，子中可以调用根组件的方法，就是从新获取数据的方法更新数据</div>   
    <div class="z-margin-top-10px">进阶技巧，结合混入文件使用可以</div> 
    <acosx></acosx>
  </div>
</template>
<script>
import acosx from '@/views/signal/a.vue'
import mixins_user from './mixins/user.js';
export default {
   // provide: {  // provide为vue内置的接口
   //   name: {a:'provide传值'}    //需要传的值是字符串 'Aresn'
   // },
   mixins: [mixins_user],
   provide(){  
     return {
       app:this.count,   //传递data里面的值； 上面穿的是字符串  
       name:this,   //甚至只写一个 this，使得子组件可以访问这个实例
       minis:this.userInfo
     }   
   },   
   components: {
     acosx,
   },
   data(){
     return {
       count:{a:'123',b:'asdasd'},
     }
   },
   methods:{

   },
   mounted() {
      console.log('调用混入内容')
      console.log(this.userInfo) //
   },
}
</script> 
<style scoped>
  
</style>
