<template>
    <div>
        <baidu-map class="map" :center="{lng: 105.000, lat: 38.000}" :zoom="4" @ready="handler">
            <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler"></bm-point-collection>
        </baidu-map>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                points: []
            }
        },
        mounted(){

        },
        methods:{
            clickHandler (e) {
                alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
            },
            addPoints () {
                const points = [];
                for (let i = 0; i < 200; i++) {
                    const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21};
                    points.push(position)
                }
                this.points = points;
                console.log(this.points);
            },
            handler ({BMap, map}) {
                this.addPoints();
            },
        }
    }
</script>
<style scoped>
.map {
    width: 100%;
    height: 80vh;
}
</style>