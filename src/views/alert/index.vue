<template>
    <div class="sad">
        <el-button @click.stop="handleOpen">点击打开 alert</el-button>
         <el-button @click.stop="handleOpen2">点击打开 alert</el-button>
    </div>
</template>
<script>  
export default {
    data(){
        return {

        }
    },
    methods:{
        handleOpen(){
            this.$Alert.info({
                 content: '我是提示信息xxxxx',
                 duration:3
            });
        },
        handleOpen2(){
            this.$Alert.info({
                 content: '我是提示信息xxxxx222',
                 duration:3
            });
        },
    }
}
</script>
<style scoped>
.sad{
    padding: 10px;
}
</style>