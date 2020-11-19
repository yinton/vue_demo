<template>
 <div>
  <div class="z-textAlign-center ub-box ub-wrap z-padding-all-10px z-font-14">
  	<div class="z-width-20-percent z-bg-ff8 box" @click="$router.push('/bus')">
  	  $bus
  	</div> 
  	<div class="z-width-20-percent z-bg-b3b box" @click="$router.push('/parts')">
  	  组件基础的三个API
  	</div>   
    <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push('/signal')">
      通信provide/inject
    </div> 
    <div class="z-width-20-percent z-bg-fd4 box" @click="$router.push('/radioBroadcast')">
      组件通信派发与广播 （事件相关触发）相当于可以调用孙组件或者更下层的组件中的方法函数
    </div>   
    <div class="z-width-20-percent z-bg-80d box" @click="$router.push('/findComponents')">
      组件通信之找到任意组件实例 （非事件相关即可触发）工具函数中还包含了一个深度拷贝方法
    </div>  
    <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push('/form')">
      实战，数据验证功能的表单
    </div>
    <div class="z-width-20-percent z-bg-ff8 box" @click="$router.push('/grid')">
      布局 Grid 网格
    </div>   
    <div class="z-width-20-percent z-bg-b3b box" @click="$router.push('/proper')">
      探索组件与子组件的生命周期触发顺序
    </div>   
    <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push('/mechanism')">
      js执行机制的探究  
    </div>     
    <div class="z-width-20-percent z-bg-fd4 box" @click="$router.push('/transitions')">
      vue自带的过度组件的探究
    </div> 
    <div class="z-width-20-percent z-bg-80d box" @click="$router.push('/regExp')">
      是时候研究一波正则表达式了
    </div>   
    <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push('/promise')">
      promise的探究
    </div>  
    <div class="z-width-20-percent z-bg-ff8 box" @click="$router.push('/media')"> 
      css媒体查询以及预处理器媒体查询的探究
    </div>  
    <div class="z-width-20-percent z-bg-b3b box" @click="$router.push('/vuex')"> 
      vuex的探究
    </div>  
     <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push('/routers')"> 
      vue路由的探究，有一篇文档的知识点
    </div>   
     <div class="z-width-20-percent z-bg-b3b box" @click="$router.push('/svgs')"> 
      svgIcon组件的封装实现
    </div>   
     <div class="z-width-20-percent z-bg-80d box" @click="$router.push('/sticky')"> 
      <div>position:</div>
      <div>sticky：</div>
      <div>粘性固定</div>
    </div> 
    <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push('/cssLayout')"> 
       css样式，包括阴影等等 
    </div>   
    <div class="z-width-20-percent z-bg-ff8 box" @click="$router.push('/animation')"> 
       css动画，Animation 
    </div>   
    <div class="z-width-20-percent z-bg-b3b box" @click="$router.push('/muke')"> 
       慕课网webApp项目重要知识点总结
    </div>
    <div class="z-width-20-percent z-bg-ff8 box" @click="$router.push('/elementUi')"> 
       element-ui 样式修改
    </div>   
    <div class="z-width-20-percent z-bg-b3b box" @click="$router.push('/move')"> 
       移植 jqury 运动函数
    </div>    
    <div class="z-width-20-percent z-bg-80d box" @click="$router.push('/directive')"> 
       Vue -- 指令 、、 包括.sync .native 以及其他vue 修饰符使用
    </div>   
    <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push('/listeners')"> 
       $attrs与 $listeners
    </div>     
    <div class="z-width-20-percent z-bg-ff8 box" @click="$router.push('/install')"> 
       全局组件， / 插件  /  以及指令  
    </div> 
    <div class="z-width-20-percent z-bg-fd4 box" @click="$router.push('/goodlook')"> 
       移植的漂亮按钮以及 element——admin 中移植的 各种指令组件演示 (主要吸收作者的各种骚操作写法)
    </div>   
    <div class="z-width-20-percent z-bg-ff8 box" @click="$router.push('/echarts')"> 
       echarts
    </div>   
    <div class="z-width-20-percent z-bg-b3b box" @click="$router.push('/verification')"> 
       v-for 和v-if 在同一个 div 
    </div>      
    <div class="z-width-20-percent z-bg-80d box" @click="$router.push('/draggable')"> 
       vue-draggable \ sync 修饰符 以及是否能与 $attrs、$listeners配合使用，最后再测下 $ref在跨组件时的表现
    </div>     
    <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push('/canvas')"> 
       canvas
    </div>
    <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push('/baiduMap')">
       baiduMap
    </div>
    <div class="z-width-20-percent z-bg-fd4 box" @click="$router.push('/baseBorder')">
       baseBorder 自定义border内容框 
    </div>
    <div class="z-width-20-percent z-bg-ff8 box" @click="$router.push('/recursion/123')">
        recursion 递归函数 一个 顺便 params 传参的操作，在 router 文件开启 props 为true 
    </div>
    <div class="z-width-20-percent z-bg-b3b box" @click="$router.push({path:'/operation',query:{id:1}})">   
       vue operation （vue 的一些骚操作）
    </div>
    <div class="z-width-20-percent z-bg-80d box" @click="$router.push({path:'/classc'})">    
       export \ export default  与  Class ( 类 ) 
    </div>
    <div class="z-width-20-percent z-bg-80d box" @click="$router.push({path:'/vuePlugins'})">    
       vue 一众插件演示
    </div>
    <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push({path:'/lodash'})">    
       lodash 演示，以及防抖节流 以及闭包的理解感悟
    </div>
    <div class="z-width-20-percent z-bg-fd4 box" @click="$router.push({path:'/apexchart'})">    
        apexcharts 图标库
    </div>
    <div class="z-width-20-percent z-bg-ff8 box" @click="$router.push({path:'/alert'})">    
        全局提示组件 $Alert
    </div>
    <div class="z-width-20-percent z-bg-b3b box" @click="$router.push({path:'/axios'})">    
        axios 库的简单封装 \ 附 HTTP 讲解
    </div>
    <div class="z-width-20-percent z-bg-b3b box" @click="$router.push({path:'/float'})">    
        float 布局
    </div>
    <div class="z-width-20-percent z-bg-80d box" @click="$router.push({path:'/sku'})">    
        sku （商品多规格选择算法）
    </div>
    <div class="z-width-20-percent z-bg-ff9 box" @click="$router.push({path:'/sourceCode'})">    
        vue 源码 初探
    </div>    
    <div class="z-width-20-percent z-bg-fd4 box" @click="$router.push({path:'/arrayBuf'})">    
        掘金 -- 数组奇巧淫技
    </div>    
    <div class="z-width-20-percent z-bg-ff8 box" @click="$router.push({path:'/binding'})">     
        简单总结下，改变单项数据流的方式 1、 .sync修饰符  2、Vue.set 3、v-model也算  4、动态组件  5、封装的 input组件配合 computed  
    </div>    
        <div class="z-width-20-percent z-bg-ff8 box" @click="$router.push({path:'/canvasDemo'})">     
         一些小的vue案例总结：watch监听写法 "a.b"(){}，冻结data数据不响应\函数组件临时变量
    </div>  
  </div>
  <div>{{fullName}}</div>       
  <div @click="changes" class="z-margin-left-20px">点击改变computed 中的fullName</div>  
 </div> 
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // components: {
  //   HelloWorld
  // }
  data(){
    return {
      firstName: 'Foo',
      lastName: 'Bar'      
    }
  },
  methods:{ 
    changes(){
      this.fullName = 'John Doe';
      console.log('this.firstName='+this.firstName);
      console.log('this.lastName='+this.lastName);
    }, 
    upCallback(){
      let a = 10;
      let b = 20;
      let c = 30;
      this.getListDataFromNet( a, b, c, (arr) => {
           console.log('回调第一个函数，也就是第四个为函数的参数执行了' + '---' + arr);   
       }, () =>{
          console.log('回调后一个函数，kkkkk');
       })
     },
     getListDataFromNet( a, b, c, successCallback, errorCallback){
        console.log('a===' +a);
        console.log('b===' +b);
        console.log('c===' +c);   
        let query = '我是回调带过来的值'
        if(a<b) {
           successCallback(query);
        }else{
          errorCallback();
        }
     }
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  mounted(){
    this.upCallback();
  } 
}
</script> 
<style scoped>
	.box{padding:4% 0;}
</style>
