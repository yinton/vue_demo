<template>
    <div>
       <div style="padding:10px;background:red;">D9_2222</div> 
        <slot name="head"></slot>
    </div>
</template>	    
<script>
// import Vue from 'vue';
// const aa = Vue.component('async-example', function (resolve, reject) {
//   setTimeout(function () {
//     // 向 `resolve` 回调传递组件定义
//     resolve({
//       template: '<div>I am async!</div>'
//     })
//   }, 1000)
// })
export default {
    methods:{
        d92(){
            console.log('D9_2z组案件')
        }
    }
}
</script>  