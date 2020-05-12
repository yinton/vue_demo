<template>
 <div>
    <el-button @click.stop="addNum" type="primary">子组件中点击 增加 </el-button>
    <el-button @click.stop="addObj" type="primary">子组件中点击 查看若传入的是对象</el-button>
 </div>
</template>
<script>

export default {
    props:{
        num:Number,
        obj:Object,
    },
    data(){
        return { 
           nums:0
        }
    },
    methods:{
       addNum(){
           this.nums = this.num;
           console.log(this.nums);
           this.nums = this.nums + 1;
           this.$emit('update:num', this.nums); 
       },
       addObj(){
           let a = this.obj;
           a.count = 10;
           console.log(this.obj);
           this.$emit('update:obj', a); 
       }
    }
}
</script>  