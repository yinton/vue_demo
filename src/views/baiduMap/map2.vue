<template>
    <div>
        <baidu-map class="bm-view" :center="{lng: 102.7137805508, lat: 25.0497407153}" :zoom="17" :scroll-wheel-zoom="true" :mapStyle="mapStyle">
        </baidu-map>
        <div class="btn-box">地图容器 / 开启滚轮缩放 /设置自定义主题</div>
        <baidu-map
                class="bm-views"
                :center="center"
                :zoom="zoom"
                :scroll-wheel-zoom="true"
                mapType="BMAP_SATELLITE_MAP"
                @moving="syncCenterAndZoom"
                @moveend="syncCenterAndZoom"
                @zoomend="syncCenterAndZoom"
        >
        </baidu-map>
        <div class="btn-box">地图类型 / 经纬度等值双向绑定</div>
        <label>精度</label><input v-model.number="center.lng">
        <label>纬度</label><input v-model.number="center.lat">
        <label>缩放</label><input v-model.number="zoom">
    </div>
</template>
<script>   //syncCenterAndZoom函数表示在缩放或者精度改变时赋值到input框
    export default {
        data() {
            return {
                mapStyle: {
                    styleJson: [
                        {
                            "featureType": "all",
                            "elementType": "geometry",
                            "stylers": {
                                "hue": "#ff99cc",
                                "saturation": 89
                            }
                        },
                        {
                            "featureType": "water", //设置地图上展示的元素种类，支持point（兴趣点）、road（道路）、water（河流）、land（陆地）、building（建筑物）
                            "elementType": "all",
                            "stylers": {
                                "color": "#ffffff"
                            }
                        }
                    ]
                },
                center: {
                    lng: 116.404,
                    lat: 39.915
                },
                zoom: 15
            }
        },
        methods:{
            syncCenterAndZoom (e) {
                const {lng, lat} = e.target.getCenter();
                this.center.lng = lng;
                this.center.lat = lat;
                this.zoom = e.target.getZoom();
            }
        }
    }
</script>
<style scoped>
    .bm-view {
        width: 100%;
        height: 40vh;
    }
    .bm-views {
        width: 100%;
        height: 45vh;
    }
    .btn-box {
        padding: 10px;
    }
    input{
        border:1px solid #ccc;
        margin:0 17px;
        padding:4px 0;
    }
</style>