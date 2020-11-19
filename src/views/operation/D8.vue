<template>
    <div>
        set 看打印控制台 
        <el-button @click.stop="result()" type="primary">普通方法更新视图</el-button>
        <el-button @click.stop="result2()" type="primary">$set方法更新视图</el-button>
        <div>
            <div v-for="(item,i) in list" :key="(i+9).toString(36)+i">
                <span>model:{{item.model}} -- ak==：{{item.ak}}</span>
            </div>
            <div style="font-weight:bold;fong-size:23px;margin:10px;">上面探讨了在一个循环中，对于一个数组中本来就不存在的属性（ak），使用普通的方式直接对数组的第一项赋值，是无用的，使用 this.$set的话才会响应，其实应该也可以使用该方法，比如，将整一个数组，合并到数组第一项去，如果有需要的话</div>
        </div>
        <div>接下来要探讨的是在子组件中使用 this.$set对父组件数据有何影响</div>
        <d8 :arrs="list" @changeKeys="changeKey" />
        <div>好像在子组件直接使用$set是不行的，是不可以的，在子组件需要修改父组件传下的值，需要使用 Vue.set</div>
        <div>一般来说，$set最主要的作用是：可以对一个数据增加一个属性后，对其进行响应，因为 vue 2 的原因，使用的是 defineprotype 进行属性拦截，不能对没有的属性进行响应，如果，在子组件传一个数组，到父组件，父组件接受变量后，直接修改值，子组件也是会响应的，但是反之不行，因为默认是单项数据流</div>
    </div>
</template>    
<script>
const D8 = () => import('./D8_1')
export default {
    components:{
        D8
    },
    data(){
        return {
            list:[
                {name:'name1',title:'t1',model:'1111',key:''},
                {name:'name2',title:'t2',model:'2222',key:''}
            ]
        }
    },
    mounted(){
        let arr = [
            {name:'name1',title:'t1',model:'',key:'',op:{a:12}},
            {name:'name2',title:'t2',model:'',key:'',op:{a:23}}
        ];
        const key = arr[0].name + "_" + new Date().getTime();
        this.$set(arr,0,{          // 更新 数组第一项里面的 key 和 value 值，为两个新的值
            ...arr[0],           // 如果这里是 arr 而不是 arr[0] ，那么将整一个数组都有合并到了 数组的第一项了
            key,
            model:key
        })
        console.log('打印的东西arr==',arr)
    },
    methods:{
        result(){
            this.list[0].ak = 'asdasdad'
        },
        result2(){
            this.$set(this.list,0,{         
                ...this.list[0],
                ak:'asdadad1212'
            })
        },
        changeKey(val,index) {
            console.log(val);
            console.log(index);
            const key = val[index].key + "_" + new Date().getTime();  //动态生成
            val[0].name = 'asdadad'
            // this.$set(val, 0, { 
            //     ...val[index],             
            //     key,
            //     model: key,
            //     name:key
            // });     
        }
    }
}
</script>  