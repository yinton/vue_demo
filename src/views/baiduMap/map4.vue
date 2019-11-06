<template>
    <div>
        <baidu-map class="map" :zoom="zoom" style="display: flex;" center="北京" scroll-wheel-zoom @ready="setDistanceToolInstance">
            <p style="padding: 20px 10px;">以下是使用 `bm-view` 组件渲染的百度地图实例</p>
            <bm-view style="width: 100%;"></bm-view>
            <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
            <bm-panorama></bm-panorama>
            <bm-control>
                <div class="asd">
                    <button @click="addZoom(19)">缩放至最大</button>
                    <button @click="addZoom(10)">还原</button>
                    <button @click="addZoom(3)">缩放至最小</button>
                    <button @click="openDistanceTool">开启测距</button>
                </div>

            </bm-control>
        </baidu-map>
        <div class="box">城市选择控件 / 插入全景控件 / 自定义控件 BmControl 组件允许开发者自由定制控件。 / 引入第三方测距插件</div>
    </div>
</template>
<script>
    import DistanceTool from 'bmaplib.distancetool'
    export default {
        unmount () {
            distanceTool && distanceTool.close();
        },
        data(){
            return {
                zoom: 10
            }
        },
        methods:{
            addZoom (level) {
                this.zoom = level
            },
            setDistanceToolInstance ({map}) {
                this.distanceTool = new DistanceTool(map, {lineStroke : 2})
            },
            openDistanceTool (e) {
                const {distanceTool} = this;
                distanceTool && distanceTool.open()
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
    .asd {
        width: 100%;
        transform: translateX(100%);
    }
    .asd button {
        width:100px;
        padding:10px 0;
        margin:10px 10px;
        background: white;
        box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    }
</style>