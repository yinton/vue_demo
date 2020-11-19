<template>
 <div>
     <div class="btn">
        <el-button v-for="(item,i) in btnData" :key="(i + 9).toString(36) + i" @click.stop="showDemo(i+1)" type="primary">{{item.name}}</el-button>
     </div>
     <div>每次切换后，各个动态组件的 生命周期的 mounted 都会触发的,另外，动态组件可以正常传递值到子组件，只是他的值的变量是固定的,子组件亦可以正常抛出事件，父组件接受到后，触发，都是可以的</div>
     <div class="box"> 
        <component :is="component" :desc="desc" :values="valuesx" @handleProps="handles"></component> 
     </div>
     <!-- <div>input 的 v-model 与 props 值绑定： {{valuesx}}</div> -->
 </div>
</template>
<script> 
import component1 from './D1.vue'; 
import component2 from './D2.vue';
import component3 from './D3.vue';
import component4 from './D4.vue';
import component5 from './D5.vue';
import component6 from './D6.vue';
import component7 from './D7.vue';
import component8 from './D8.vue';
import component9 from './D9.vue';
import component10 from './D10.vue';
export default {
    data(){
        return {
            desc:'父组件所传的值',
            valuesx:'父组件的值,其实子组件是不会修改父组件所传值的',
            btnData:[
                {name:'函数式组件'},
                {name:'watch的高阶使用'},
                {name:'监听组件的生命周期'},
                {name:'程序化的事件监听器'}, 
                {name:'手动挂载组件'},
                {name:'props 传函数,可以理解为子组件调用父组件的方法'},
                {name:'slot操作，传参等'},
                {name:'$set'},
                {name:'动态组件 & 异步组件'},
                {name:'input 的v-model与 子组件 props 的自动响应，子自动更改父的值'}
            ],
            component: component1,
        }
    },
    mounted(){
      const query =  this.$route.query.id;
      console.log('路由传参数 id mounted监听===',query);
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
                component7: component7,
                component8: component8,
                component9: component9,
                component10: component10
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