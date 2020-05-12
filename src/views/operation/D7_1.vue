<template>
<div>
   d7_1
    <slot name="icon" :obj="obj"></slot> 
    <slot></slot> 
    <div>{{jdk}}</div> 
</div>
</template>
<script>
export default {
    props:{
        jdk:String
    },
    data(){
        return{
            text:'我是子组件',
            obj:{name:'子组件的值',age:29}
        }
    }   
}
</script>