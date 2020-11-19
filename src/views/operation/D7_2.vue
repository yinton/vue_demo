<template>
<div>
   d7_2  <slot>默认内容 -- v-bind:user="user"</slot>
   <slot name="header" v-bind:user="user"></slot>
   <slot name="footer" v-bind:user="user"></slot>
   <slot name="dynamic" v-bind:user="user"></slot>
   <slot name="named" v-bind:user="user"></slot>
</div>
</template> 
<script>
export default {
    props:{
       
    },
    data(){
        return{
            user:{
                name:'user子组件使用者'
            }
        }
    }   
}
</script>