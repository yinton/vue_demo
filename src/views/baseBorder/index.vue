<template>
    <div class="cover">
        展示border组件自定义边框
        <BaseBorder style="width:200px;height:400px;">
            <div>
                asdad
            </div>
        </BaseBorder>
        <div class="container">
            <div class="box">
                <div style="padding:35px;color: white">撒打算的</div>
                <div class="tl"></div>

            </div>
        </div>
        <div class="box-div1">
            asdasad
            <span class="span-box">a奥术大师多萨达</span>
        </div>
    </div>
</template>
<script>
    import BaseBorder from './border.vue';
    export default {
        data(){
            return{

            }
        },
        components:{
            BaseBorder
        }
    }
</script>
<style scoped>
    .cover{
        background: #0c2027;
        height: 100vh;
    }
    .container{
        width:900px;
        height:400px;
    }
    .box{
       position: relative;
        width:100%;
        height:100%;
        overflow: hidden;
        padding: 0;

    }
</style>