<template>
 <div>
     <div class="btn">
        <el-button v-for="(item,i) in btnData" :key="(i + 9).toString(36) + i" @click.stop="showDemo(i+1)" type="primary">{{item.name}}</el-button>
     </div>
     <div>子组件集中引入到一个js文件后，再引入到当前文件</div>
     <div class="box">
        <component :is="component" :desc="desc" @handleProps="handles"></component> 
     </div>
 </div>
</template>
<script> 
// import component1 from './D1.vue'; 
// import component2 from './D2.vue';  
// import component3 from './D3.vue'; 
import { component1, component2, component3, component4, component5, component6 } from './load'
export default {
    data(){
        return {
            desc:'父组件所传的值',
            btnData:[
                {name:'图片懒加载-vue_lazyLoad'},
                {name:'clipboard_复制插件的简单使用'},
                {name:'vue-i18n'},
                {name:'dayJS'},
                {name:'xlsx-导出Excel的各种操作'},
                {name:'element 主题定制操作1'}
            ],
            component: component1, 
        }
    },
    methods:{
        showDemo(i){
            const obj = {
                component1: component1,
                component2: component2,
                component3: component3,
                component4: component4,
                component5: component5, 
                component6: component6, 
            };
            // this.tip = true;
            this.component = obj[`component${i}`];
        },
        handles(val){
            console.log(val)
        }
    }
}
</script>  
<style scoped>
.box{
    background-color: #f2f2f2;
    width: 70%;
    margin: 10px auto;
    padding: 5px 10px 35px 10px;
    min-height: 70vh;
}
.box div:nth-child(1){
    padding-bottom: 10px;
}
</style>