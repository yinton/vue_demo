<template>
    <div class="bk">
       test222测试组件 
       <el-button @click.stop="changess">点击从子组件修改 -- {{config3.name}}</el-button>
       <input type="text" v-model="config4.name" style="border:1px solid blue;">
    </div>
</template>    
<script>
export default {
    props:{
        config3:{ 
            type:Object
        },
        config4:{ 
            type:Object
        }
    },
    data(){
        return {

        }
    },
    methods:{
        changess(){
         this.config3.name = '修改了值了'
           
        }
    }
}
</script>  
<style scoped>

</style>