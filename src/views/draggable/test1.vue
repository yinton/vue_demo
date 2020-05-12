<template>
<div style="width:600px;height:200px;border:1px solid red;line-height:90px;">
    test22222222  
    <childrens4 v-bind="$attrs" v-on="$listeners" />
</div>
</template>    
<script>
const childrens4 = () => import('./test2')
export default {
    components:{
        childrens4
    },
    data(){
        return {

        }
    },

}
</script>	