<template>
<div>
   组件的solt(子组件定义的值，父组件可以通过 slot-scope拿到其值) 以及 组件自定义的 class 和 id 属性 
   <d71 class='a1' jdk="父组件传参数吧">
        <div>未设置 slot 具名插槽的1111111显示在插槽的响应位置</div>
        <!-- <span slot="icon">solt插入值</span> -->
        <template slot="icon" slot-scope="scope">
            <div @click.stop="soltEv">具名插槽 icon</div>
            <div>111111111</div>
            <div>{{scope}}</div>  
        </template>	    
 
   </d71>
   <div style="margin-top:30px;font-weight:550;">
        在 2.6.0 中，为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute,上面的语法vue3.0不再支持了
   </div>
   <d72>
       <div>12 一个不带 name 的出口会带有隐含的名字“default”。再写一个div，什么都不加、不管位置如何比如，也是可以的，也会默认添加到默认插槽</div>	    
         <div>11111111111111111111</div>	   
       <template v-slot:header="slotProps">
           这里v-slot:header 指定插槽 名字，需要用 template标签，否则报错 (只有一种例外情况),老版本语法不会报错
           <div style="font-size:23px;margin-top:15px;">插槽里面返回的数据：<span style="color:red;">{{ slotProps.user.name }} </span> -- 里面返回值的语法v-bind:user="user" -- slotProps也可以是任意的名字</div>
         
       </template>

       <template v-slot:footer="{ user }">
         <span style="color:red;margin-top:10px;">{{ user.name }}</span>  -- 也可以使用解构(或者重命名都是可以的)，接受插槽返回的值，简化上面的写法 ，甚至还可以指定默认值：v-slot="{ user = { firstName: 'Guest' } }" 用于插槽 prop 是 undefined 的情形
        
       </template>

       <template v-slot:[dynamicSlotName]="{ user }">
           <div style="margin-top:10px;">
                <span style="color:red;">{{ user.name }}</span> 
                动态插槽
           </div>

       </template>

        <template #named="{ user }">
           <div style="margin-top:10px;">
                <span style="color:red;" @click.stop="slotData(user)">{{ user.name }}</span> 
                具名插槽简写 #named="{ user }"  ---  #default="{ user }" 表示的是默认插槽
           </div>

       </template>
      
   </d72>

</div>
</template>
<script>
import d71 from './D7_1'
import d72 from './D7_2'
export default { 
    components:{
        d71,
        d72
    },
    data(){
        return{
            dynamicSlotName:'dynamic'
        }
    },
    methods:{
        soltEv(){
            console.log(12112)
        },
        slotData(user){
            console.log('211asd',user)
        }
    }
    
}
</script>
<style scoped>
.a1{
    font-size: 30px;
    color: blueviolet;
}
</style>