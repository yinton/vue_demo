<template>
    <div>
        <div>这是父组件</div>
        <span>这是子：</span>
        <d6 :on-success="handleSuccess" />
        <div>接收子组件传回的值=：{{pro}}</div>
    </div>
</template>
<script>
import d6 from './D6_1'
export default {
    components:{
        d6
    },
    data(){
        return {
            pro:''
        }
    },
    methods:{
        handleSuccess(value){
            console.log('父组件的handleSuccess+参数',value)
            this.pro = value
        }
    }
    
}
</script>