<template>
<div>
   组件的solt(子组件定义的值，父组件可以通过 slot-scope拿到其值) 以及 组件自定义的 class 和 id 属性 
   <d71 class='a1' jdk="父组件传参数吧">
        <div>未设置 slot 具名插槽的</div>
        <!-- <span slot="icon">solt插入值</span> -->
        <template slot="icon" slot-scope="scope">
            <div @click.stop="soltEv">具名插槽 icon</div>
            <div>111111111</div>
            <div>{{scope}}</div>  
        </template>	    

   </d71>
</div>
</template>
<script>
import d71 from './D7_1'
export default { 
    components:{
        d71
    },
    methods:{
        soltEv(){
            console.log(12112)
        }
    }
    
}
</script>
<style scoped>
.a1{
    font-size: 30px;
    color: blueviolet;
}
</style>