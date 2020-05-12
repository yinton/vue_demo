<template>
 <div>
      d 222  {{desc}}
      <div @click.stop="handle">点击向父抛出事件</div>
      <el-alert
           title="watch的高阶用法"
           type="error">
      </el-alert>
      <div>1、立即执行(比created还要早执行)，细看 打印控制台</div>  
      <div>2、深度监听添加属性 deep：true</div>
      <div>3、触发监听一个属性，执行多个方法（监听的某个属性，设为数组）</div>
       <el-button type="info" @click.stop="handlex">点此观察控制台，监听多个方法</el-button>
       <div>4、监听多个变量（watch本身无法监听多个变量，但是可以将需要监听的多个变量通过计算属性返回对象，再监听这个对象来 -- 实现监听多个变量）</div>
       <el-button type="info" @click.stop="changes">点此观察控制台，监听多个变量</el-button>

 </div>
</template>
<script>

export default {
    props:{
        desc: String
    },
    computed: {     //compouted
        msgObj() {
            const { msg1, msg2 } = this
            return {
                msg1,
                msg2
            }
        }
    },
    watch: {
        name: {
            immediate: true,
            handler(val){
                console.log('watch打印监听name',val)
            },
        },
        title:[
            'sayName1',
            function(newVal, oldVal) {
                this.sayName2()
            },
            {
                handler: 'sayName3',
                immaediate: true             // 这里 虽然设为了true 但是一开始是不执行的
            }
        ],
        msgObj: {
            handler(newVal, oldVal) {
                console.log('newVal==',newVal);
                console.log('oldVal==',oldVal);
                if (newVal.msg1 != oldVal.msg1) {
                    console.log('msg1 is change')
                }
                if (newVal.msg2 != oldVal.msg2) {
                    console.log('msg2 is change')
                }
            },
            deep: true,
            immaediate: true 
        }
    },
    data(){
        return {
            name: 'Joe',
            title:'yt',
            msg1: 'apple',
            msg2: 'banana'
        }
    },
    mounted(){
        console.log('D22的生命周期mounted')
    },
    created(){
        console.log('D22的生命周期created')
    },
    methods:{
        changes(){
            console.log('lalala',this.msgObj)
            this.msg1 = 'apple22';
            this.msg2 = 'banana22';
        },
        handle(){
            this.$emit('handleProps','子组件所传参数');
        },
        handlex(){
            this.title = 'yw';
        },
        sayName1() {
            console.log('sayName1==>', this.title)
        },
        sayName2() {
            console.log('sayName2==>', this.title)
        },
        sayName3() {
            console.log('sayName3==>监听的是title。。一来执行', this.title)
        }
    }
}
</script>  