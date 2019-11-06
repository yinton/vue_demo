<template>
    <div class="nml">
        <div>
            <baidu-map
                    :center="center"
                    :zoom="zoom"
                    @ready="handler"
                    class="bm-view"
            >
            </baidu-map>
        </div>
        <div class="btn-box">
            <el-row>
                <el-button @click.stop="goMap(1)">绘制路线</el-button>
                <el-button @click.stop="goMap(2)" type="primary">地图容器</el-button>
                <el-button @click.stop="goMap(3)" type="success">各种控件1</el-button>
                <el-button @click.stop="goMap(4)" type="info">各种控件2</el-button>
                <el-button @click.stop="goMap(5)" type="warning">各种覆盖物</el-button>
                <el-button @click.stop="goMap(6)" type="danger">覆盖物-海量点</el-button>
                <el-button @click.stop="goMap(7)">覆盖物-折线</el-button>
                <el-button @click.stop="goMap(8)" type="primary">信息窗体</el-button>
                <el-button @click.stop="goMap(9)" type="success">地区检索</el-button>
                <el-button @click.stop="goMap(10)" type="info">公交路线规划</el-button>
                <el-button @click.stop="goMap(11)" type="warning">各种覆盖物</el-button>
                <el-button @click.stop="goMap(12)" type="danger">覆盖物-海量点</el-button>
            </el-row>
        </div>

    </div>
</template>
<script>   //请使用在组件的 ready 事件来执行地图 API 加载完毕后才能执行的代码，不要试图在 vue 自身的生命周期中调用 BMap 类，
          //没有设置 center 和 zoom 属性的地图组件是不进行地图渲染的。
    export default {
         data(){
             return {
                 center: {lng: 0, lat: 0},
                 zoom: 3
             }
         },
        methods: {
            handler ({BMap, map}) {
             //   console.log(BMap, map);
                console.log('map自带的事件 -- ready');
                this.center.lng = 116.404;
                this.center.lat = 39.915;
                this.zoom = 15;
            },
            goMap(index){
                console.log(index);
                this.$router.push(`/map${index}`);
            }
        }
    }
</script>
<style scoped>
.bm-view {
    width: 100%;
    height: 80vh;
}
.btn-box {
    padding: 20px;
}
.nml .btn-box .el-button {
    margin-top:10px;
}
</style>