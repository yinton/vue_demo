<template>
 <div>
    <div class="btn">
        <el-button v-for="(item,i) in btnData" :key="(i + 9).toString(36) + i" @click.stop="showDemo(i+1)" type="primary">{{item.name}}</el-button>
    </div>
    <div class="box">
        <component :is="component"></component>  
    </div>
 </div>
</template>
<script scoped> 
import { component1, component2, component3 } from './load'
export default {
    data() {
        return {
            btnData:[
                {name:'line'},
                {name:'line2'},
                {name:'图三'},
            ],
            component: component1, 
        }
    },
    methods:{
        showDemo(i){
            console.log(122)
            const obj = { 
                component1: component1, 
                component2: component2,
                component3: component3
            };
            // this.tip = true;
            this.component = obj[`component${i}`];
        },
    }
}
</script>