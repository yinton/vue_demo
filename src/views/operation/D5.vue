<template>
 <div> 
   <div class="font">在一些需求中，手动挂载组件能够让我们实现起来更加优雅。比如一个弹窗组件，最理想的用法是通过命令式调用，就像 elementUI 的 this.$message 。而不是在模板中通过状态切换，这种实现真的很糟糕。</div>
   <el-button class="btn" @click.stop="msg" type="primary">点击看弹出窗</el-button>
   这个暂时会有点问题。。
 </div>
</template>
<script>
export default {
    data(){
        return {
           
        }
    },
    methods:{
        msg(){
            this.$messagex({
                type: 'success',
                content: '成功信息提示',
                duration: 3000
            })
        }
    },
    mounted() {                     

    }
}
</script>  
<style scoped>
.font{
    font-size: 16px; 
    font-weight: 600;
}
.btn{
    margin-top: 20px;
}
</style>