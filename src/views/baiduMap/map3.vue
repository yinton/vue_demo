<template>
    <div>
        <baidu-map class="map" style="display: flex;" center="北京" scroll-wheel-zoom>
            <p style="padding: 20px 10px;">以下是使用 `bm-view` 组件渲染的百度地图实例</p>
            <bm-view style="width: 100%;"></bm-view>
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP','BMAP_SATELLITE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
            <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true" :autoLocation="true" @locationSuccess="locationSuccessx"></bm-geolocation>

        </baidu-map>
        <div class="box"> 右上角加入比例尺控件 / 在右上角加入缩放控件 / 左上角加入地图类型控件 / 右下角加入缩略图控件 / 定位控件</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            locationSuccessx(a){
                console.log('定位成功了');
                console.log(a);   //包含了各种信息
            }
        }
    }
</script>
<style scoped>
    .map {
        width: 100%;
        height: 80vh;
    }
    .box {
        padding:15px;
    }
</style>