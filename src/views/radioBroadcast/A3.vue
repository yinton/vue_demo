<template>
    <div class="z-padding-all-10px" style="background-color:orange;">
        <div>A3 页面 最外层向该页面直接通讯 （此组件相对来说是最外层的孙组件的子组件）</div> 
    </div>
</template> 
<script>
export default {
    name:'a3',
    data(){
        return {

        }
    },
    methods: {
        showMessagen (text) {
            window.alert(text + '这是A3组件了啊啊啊啊啊');
        },
    },
    mounted () {
        this.$on('on-messagen', this.showMessagen); //随时都在监听变化的。。。  
    }
}
</script>