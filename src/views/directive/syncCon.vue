<template>
    <div @click.stop="sy">
       点击测试 .sync 修饰符     
    </div>
</template>    
<script>
    export default {
        props:{
           value:{
               type:String
           }     
        },
        data() {
            return {

            }
        },
        mounted(){

        },
        methods:{
            sy() {
                console.log(12);
                this.$emit('update:value', '子组件改变了，父组件一并更改了');
            }
        }
    }
</script>
<style scoped>

</style>