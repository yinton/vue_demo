<template>
<div>
    <el-button @click.stop="zh" type="danger" plain>切换中文</el-button>
    <el-button @click.stop="en" type="danger" plain>切换英文</el-button>
    <div>{{$t('route.dashboard')}}</div> 
    <div>{{$t('route.documentation')}}</div> 
    <div>{{$t('route.guide')}}</div> 
    <div>{{$t('route.permission')}}</div> 
</div>
</template>    
<script> 
export default {
    mounted(){
        
    },
    data(){
        return {
         
        }
    },
    methods:{
        zh(){
            this.$i18n.locale = 'zh'
        },
        en(){
            this.$i18n.locale = 'en'
        }
    }
}
</script>	    