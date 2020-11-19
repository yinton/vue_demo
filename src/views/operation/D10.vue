<template>
    <div>
        input 的 v-model 与 props 值绑定
        <pre>
            具体看代码 假设传入了一个 props 值为：
             value computed 的话是 计算的 下面 v-model 绑定的 值 filename  ，
            filename 是 父组件传的值，那么父组件里面也是 v-model = filename
        </pre>
        <el-input v-model="filename" placeholder="输入值后看" />
    </div>
</template>    
<script>
export default{
    props:{
        value:{
            type:String,
            default:''
        }
    },
    computed: {
        filename: {
            get() {
                return this.value
            },
            set(val) {
                console.log('set==',val)
                this.$emit('input', val)
            }
        }
    }
}
</script>
