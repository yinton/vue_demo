<template>
    <div>
        <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">
            <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>
            <bm-polygon :path="polygonPathx" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePathx"/>
            <bm-circle :center="circlePath.center" :radius="circlePath.radius" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" :editing="true"></bm-circle>
            <bm-label content="我爱北京天安门" :position="{lng: 116.404, lat: 39.925}" :labelStyle="{color: 'blue',background:'rgba(200,100,100,.6)',padding:'10px',border:'1px solid #ccc', fontSize : '24px'}" title="Hover me"/>
        </baidu-map>
        <div class="radius">
            折现 / 多边形 / 圆形 / 标签
        </div>
        <el-button @click.stop="addPolylinePoint()" type="danger">添加一个点 - 多边形</el-button>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                polylinePath: [
                    {lng: 116.414, lat: 39.915},
                    {lng: 116.415, lat: 39.920},
                    {lng: 116.423493, lat: 39.907445}
                ],
                polygonPathx: [
                    {lng: 116.412732, lat: 39.911707},
                    {lng: 116.39455, lat: 39.910932},
                    {lng: 116.403461, lat: 39.921336}
                ],
                circlePath: {
                    center: {
                        lng: 116.434,
                        lat: 39.915
                    },
                    radius: 500
                }
            }
        },
        methods: {
            updatePolylinePath (e) {
                this.polylinePathx = e.target.getPath();
            },
            updatePolylinePathx (e) {
                this.polylinePathx = e.target.getPath();
            },
            addPolylinePoint () {
                this.polylinePathx.push({lng: 116.404, lat: 39.915});
            },
            updateCirclePath (e) {
                this.circlePath.center = e.target.getCenter();
                this.circlePath.radius = e.target.getRadius();
            }
        }
    }
</script>
<style scoped>
.map {
    width: 100%;
    height: 80vh;
}
.radius {
    padding:20px;
}
</style>