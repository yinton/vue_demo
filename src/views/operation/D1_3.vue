<template>
 <div class="cart">
      <el-button @click.stop="addCount()" type="success"> + 数量 </el-button>
      <div class="cart-num">{{countNum.num}}</div>
      <el-button @click.stop="reduce()" type="success"> - 数量 </el-button>
 </div>
</template>
<script>
import Vue from 'vue'
export default {
    props:{
        countNum:Object
    },
    data(){
        return {
           
        }
    },
    methods:{
        reduce(){
            this.countNum.num--;
        },
        addCount(){
            if(!this.countNum.num){
                Vue.set(this.countNum,"num",1);  
            }else{
            this.countNum.num++; 
            }            
        }  
    }
}
</script>  
<style scoped>
.cart{
    display:flex
}
.cart-num{
    padding:0 10px;
}
</style>