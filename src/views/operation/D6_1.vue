<template>
<div>
   d6_1 <el-button @click.stop="handle">点击触发事件，并且调用父组件传过来的 函数</el-button>
</div>
</template>
<script>
export default {
    props:{
        onSuccess: Function
    },
    methods:{
        handle(){
            this.onSuccess && this.onSuccess('子组件传回的值')
        }
    }
}
</script>