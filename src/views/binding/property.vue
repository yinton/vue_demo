<template>
    <div class="bk">
       conmponents     
       <el-button @click.stop="changes">点击从子组件修改</el-button>
    </div>
</template>    
<script>
export default {
    props:{
        config:{
            type:Object
        }
    },
    data(){
        return {

        }
    },
    methods:{
        changes(){
            console.log(123);
            this.config.name = '改变了，改变了';
            this.config.title = '改变了，改变了 -- title';
        }
    }
}
</script>  
<style scoped>

</style>