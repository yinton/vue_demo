<template>
 <div> 
     d3_1子组件，监听子组件的生命周期 触发的 情况
     <div class="bgs">测试父组件对子组件样式的影响问题,父组件如果style标签里面没加 scoped ，则子组件若使用了其父组件中的类名，会获得该样式，即使子组件style加了scoped</div>
 </div>
</template>
<script>

export default {
    data(){
        return {
           
        }
    },
    mounted() {
        console.log(1111111111111)
        this.$emit('listenMounted')
        console.log(2222222222222)
    }
}
</script>  
<style scoped>

</style>