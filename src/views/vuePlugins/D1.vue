<template>
<div>
    图片懒加载，据说可以极大地提高网页的加载速度
    <!-- <img v-lazy="'http://img0.imgtn.bdimg.com/it/u=2400233275,1017939005&fm=26&gp=0.jpg'" :key="1" alt=" " /> -->
    <img v-lazy="bo" :key="2" alt=" "/>
    <div style="height:97vh;"></div>
</div>
</template>    
<script> 
export default {
    computed:{
        bo(){
            return require('./img/bo.jpg')
        }
    },
    mounted(){
        
    },
    data(){
        return {
           aa:undefined
        }
    }
}
</script>	    