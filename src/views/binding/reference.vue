<template>
    <div class="bk">
       普通子组件11  
       <el-button @click.stop="changess">点击从子组件修改</el-button>
       {{config2.list.name}}
    </div>
</template>    
<script>
export default {
    props:{
        config2:{ 
            type:Object
        }
    },
    data(){
        return {

        }
    },
    methods:{
        changess(){
            this.config2[0] = 34;
            console.log(123,this.config2);
        }
    }
}
</script>  
<style scoped>

</style>