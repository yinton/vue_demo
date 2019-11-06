<template>
    <div>
        <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
            <bm-info-window :position="{lng: 116.404, lat: 39.915}" title="Info Window Title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
                <p v-text="infoWindow.contents"></p>
                <button @click="clear">Clear</button>
            </bm-info-window>
            <bm-overlay
                    pane="labelPane"
                    :class="{sample: true, active}"
                    @draw="draw"
                    @mouseover.native="active = true"
                    @mouseleave.native="active = false">
                <div>我爱北京天安门</div>
            </bm-overlay>
            <bm-traffic :predictDate="{weekday: 7, hour: 12}">
            </bm-traffic>
        </baidu-map>
        <div>
            信息窗体 / 自定义覆盖物 /交通路况图
        </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                infoWindow: {
                    show: true,
                    contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                active: false
            }
        },
        methods: {
            infoWindowClose (e) {
                this.infoWindow.show = false
            },
            infoWindowOpen (e) {
                this.infoWindow.show = true
            },
            clear () {
                this.infoWindow.contents = ''
            },
            draw ({el, BMap, map}) {
                const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915));
                el.style.left = pixel.x - 60 + 'px';
                el.style.top = pixel.y - 20 + 'px';
            }
        }
    }
</script>
<style scoped>
.map {
    width: 100%;
    height: 80vh;
}
.sample {
    width: 120px;
    height: 40px;
    line-height: 40px;
    background: rgba(0,0,0,0.5);
    overflow: hidden;
    box-shadow: 0 0 5px #000;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: absolute;
}
.sample.active {
    background: rgba(0,0,0,0.75);
    color: #fff;
}
</style>