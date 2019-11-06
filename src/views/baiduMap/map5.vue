<template>
    <div>
        <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
            <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label content="我爱北京天安门" :labelStyle="{color: 'blue', fontSize : '18px'}" :offset="{width: -35, height: 30}"/>
            </bm-marker>
            <bm-marker :position="{lng: 116.424, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157}}"></bm-marker>
            <bm-marker :position="{lng: 116.434, lat: 39.915}" :dragging="true" @click="infoWindowOpen">
                <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
                    <div class="div-box">
                        <div>我爱北京天安门</div>
                        <div>自定义框架</div>
                    </div>
                </bm-info-window>
            </bm-marker>
        </baidu-map>
        <div>点击最后一个弹出框</div>
    </div>
</template>
<script>
    export default {
      data(){
          return {
            show:false
          }
       },
       methods:{
           infoWindowClose () {
               this.show = false
           },
           infoWindowOpen () {
               this.show = true
           }
       }
    }
</script>
<style scoped>
.map {
    width: 100%;
    height: 80vh;
}
.div-box {
    background: red;
    padding: 6px;
}
</style>