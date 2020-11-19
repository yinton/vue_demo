<template>
    <div>
        asd {{arrs}}
         <el-button @click.stop="result3()" type="primary">$set 这个会报错，相当于是在子组件 修改父组件的传下来的值，是不行的</el-button>
         <el-button @click.stop="result4()" type="primary">我们来理一理，$set可以设置一个不存在的属性使得它进行响应，他也可以将当前组件，抛出到父组件的数据增加数据后响应，主要是增加，后进行响应</el-button>
         <div v-for="(item,i) in po" :key="i">子组件的数组：{{item.name}} -- {{item.title}}</div>
    </div>
</template>    
<script>
export default {
    props:{
        arrs:{
            type:Array,

        }
    },
    data(){
        return {
            po:[{name:'子组件name==',title:'子组件标题啊啊啊啊'}]    
        }
    },
    methods:{
        result3(){
            console.log('asd')
            this.$set(this.arrs,0,{          // 更新 数组第一项里面的 key 和 value 值，为两个新的值
                ...this.arr[0],           // 如果这里是 arr 而不是 arr[0] ，那么将整一个数组都有合并到了 数组的第一项了
                key:12313,
                model:9990
            })
        },
        result4(){

            this.$emit('changeKeys',this.po,0)
        },
    }
}
</script>  