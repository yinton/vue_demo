<template>
<div>
    <div>
        在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了简化，Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。例如：

    </div>
    <!-- <component :is="syncComponet" />  -->
    <sync-componet ref="ssr">
        <template #head>
            <div>asjdlad</div>
            <d92 ref="ssrs" />
        </template>
    </sync-componet>
    <el-button @click.stop="aas()">点我</el-button>
</div>
</template>
<script>
import syncComponet from './D9_1.vue'
import D92 from './D9_2'
import ss,* as x from './D9.js'
export default {
    components:{
        syncComponet,
        D92
    },
    props:{
       
    },
    mounted(){
        console.log(x.aa())
        console.log(x.cc())
        console.log(ss())
    },
    data(){
        return{
            // syncComponet
        }
    },
    methods:{
        aas(){
            // console.log('当前组件');
            // this.$refs.ssr.d91();
            this.$refs.ssrs.d92();
        }
    }   
}
</script>