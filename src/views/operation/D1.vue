<template>
 <div>
    d111   {{desc}} 
    <div @click.stop="handle">点击向父抛出事件</div>
    <div>函数式组件，无任何的生命周期和方法</div>
    <el-alert
        title="下面是函数式组件,只可设置样式，里面没有任何方法和生命周期，但是其实是可以，传回值的。。,点击每一项就知道了,并且，可以使用框架带的组件在里面展示"
        type="success">
    </el-alert>
    {{currentItem}}
    <List :list="list" :itemClick="item => (currentItem = item)" />
    <el-button type="danger">顺便演示下样式穿透</el-button>    
    <el-alert
        title="顺便演示下 子组件 this.$emit('update:num',2) 子组件 更改父组件 的值（状态）父组件使用 sync 修饰符。。之前其实演示过了。。 sync修饰符绑定的是需要响应的内容"
        type="error">
    </el-alert>
    <num-demo :num.sync="numState" :obj.sync="objData" :dj="shop"/>  
        
    <div @click.stop="()=>{numState = 1}"> 点击此处可重置 num的值 -- {{numState}}</div>
     <div>{{objData}}</div>
    <el-alert
        title="另外，再演示一个 子组件改变父组件 状态 （双向数据流的demo）父组件向子组件传入的是数值，父组件，计算数组中某个字段的累加值，类似购物车，选择后，显示总价的需求，子组件内部是使用this.$set,增加数量的按钮单独为一个组件"
        type="error"> 
    </el-alert>
    <div class="add-btn" v-for="(item,index) in shop" :key="(index+9).toString(36) + index">
        <span>名称：{{item.name}} -- 价格：{{item.price}}</span>
        <count :count-num="item" />
    </div>
    <div>上面的操作是，点击了加的，才会出现减号的，所以先点击加号才会正常</div> 
    <el-button type="primary">此处总价为：{{totalPrice}}</el-button>
   
 </div>
</template>
<script>
import List from './D1_1.vue'
import numDemo from './D1_2.vue'
import count from './D1_3.vue'
export default {
    props:{
        desc: String
    },
    components: {
        List,
        numDemo,
        count
    },
    watch:{
        currentItem(val){
            console.log('watch监听',val)    // 这样子就可以进行各种操作了    
        }
    },
    computed:{
        totalPrice() {
            let totals = 0;
            totals = this.shop.reduce((total, item) => total +  item.price*item.num, 0); 
            return totals;
        }
    },
    data(){
        return {
            numState:1,
            objData:{
                title:'obj标题',
                name:'obj名字',
                count:1
            },
            shop:[
                {name:'商品1',price:10,num:1},
                {name:'商品2',price:20,num:1},
                {name:'商品3',price:30,num:1},
            ],
            list: [
                {
                   title: 'title111',
                   content: 'content111'
                },
                {
                   title: 'title222',
                   content: 'content222'
                }
            ],
            currentItem: ''
        }
    },
    mounted(){
        console.log('D11的生命周期')
    },
    methods:{
        handle(){
            this.$emit('handleProps','子组件所传参数');
        }
    }
}
</script>  
<style scoped>
/deep/ .el-button--danger{
    background: chocolate;
}
.add-btn{
    padding:10px 0;
    display: flex;
    align-items: center;
}
.add-btn span{
    margin-right: 10px;
}
</style>