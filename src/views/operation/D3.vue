<template>
 <div> 
     <!-- <d31 @listenMounted="listenMounted" /> -->
     <d31 @hook:mounted="listenMounted" />
     <div>在父组件和子组件中，生命周期触发的顺序是：父组件的created - 子组件的 created - 子组件的mounted - 父组件的 mounted</div>	    
 </div>
</template>
<script>
import d31 from './D3_1.vue'; 
/*

上面 两种做法是有细微差别的，@listenMounted="listenMounted"是会 按照子的 mounted 语句顺序，而 @hook:mounted="listenMounted" 是会先吧子中 mounted 的执行完了，然后，触发，监听的结果

*/
export default {
    components:{
        d31
    },
    data(){
        return {
           
        }
    },
    methods:{
        listenMounted(){
            console.log('D3_1的mounted触发了现在！！')
        }
    },
    mounted() {                     
      //  this.$emit('listenMounted')    // 这个的子组件的情况 
      console.log('父组件的生命周期332211')
    }
}
</script>  
<style>
.bgs{
    background: chocolate;
    font-size: 30px;
    font-weight: 700;
}
</style>