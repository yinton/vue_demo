<template>
    <div>
        vue Source Codeasd   123123  asda 
        <span @click="asd">asd</span>
    </div>
</template>
<script>
import { VVue } from './VueClass'
export default {
    data() {
        return {

        }
    },
    methods:{
        asd(){
            
        }
    },
    mounted(){
        let query = {
                data:{
                    name:'123', title:'标题11' 
                }
            }
        // 当 new 时 内部进行了系列操作 ，当获取或者是设置值的时候，又会相应触发 经由 Object.defineProperty 劫持的 各个属性 get 或者 set 的 方法    
        let vue = new VVue(query);
         console.log('render~', vue._data.name); // 这里是可以
         vue._data.name = '999999999'
         
    }
}
</script>  
