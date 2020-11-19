<template>
    <div class="dynames">
        <div class="font">
            1、现在演示下 component 动态组件 双向数据绑定问题，还有 inptut 在子组件里面 的那种操作
        </div>
        <div>{{config.name}} --- {{config.title}}</div>	    
        <component :is="component" :config="config"></component>
        <div class="fan font">
           一个对比例子，非 动态组件，正常的子组件,传对象不会报错，传那个 数组也不会报错，但是字符串会，可能是因为字符串是传值，的，也可能是因为，vue 原理改了吧，弄个更加复杂点的例子，将从 config2
        </div>	    
        <reference :config2="config2" /> 
        <el-button @click="fuzhi">点击12赋值</el-button>
        <reference2 :config3="config3" :config4="config4" />     
        config4: -- {{config4.name}}
        <div class="fan font">
            一个更加复杂的例子是：父组件 展示一个对象，并且 在点击事件的时候，将某一个值赋值给子组件，子组件直接修改，传过来的该值，也能更改，并且父组件相对应得那个值也该了,还有情况是，一个对象传入了组件里面以后，如果传入的值绑定的是一个 输入框，如果传入的值是字符串，输入框中输入值后，相当于修改了 传入值，是字符的话报错，是对象的某个属性的话就没问题了
        </div>	  

        下面演示的是： 传入字符串，子组件 computed 处理，是的双向绑定的
        <FilenameOption v-model="filename" />
        FilenameOption=={{filename}}
    </div>
</template>    
<script>
import propety from './property';
import reference from './reference';
import reference2 from './test2';
import FilenameOption from './FilenameOption';
export default {
    components:{
        reference,
        reference2,
        FilenameOption
    },
    data(){
        return {
           component:propety,
           filename: '',
           config4:{name:''},
           config:{
               name:'那么1111',
               title:'标题222'
           },
           config3:{},
           config2:{
               list:{name:'config2 -- asfasf'},
               abc:{abb:'lfjhalkfj见附件'}
           }
        }
    },
    methods:{
        fuzhi(){
            this.config3 = this.config2.list
        }
    }
}
</script>  
<style scoped>
.dynames {
    padding: 20px;
}
.font{
    font-size: 17px;
    font-weight: 600;
}
.fan {
    margin-top: 20px;
}
</style>