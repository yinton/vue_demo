<template>
<div>
   test33333333 {{body}}  <span @click.stop="sdj" style="background:red;margin-left:14px;padding:0 10px;">点击</span>
</div>
</template>    
<script>
export default {
    props: {
        body: {
            type:String,
            default:''
        }
    },
    data(){
        return {

        }
    },
    methods:{
        sdj(){
            console.log('asdasdasd123123')
            this.$emit('update:body', '撒旦234234')
        }
    }
}
</script>	