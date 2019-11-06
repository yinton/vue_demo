<template>
    <div>
        <label>关键词：<input v-model="keyword"></label>
        <label>地区：<input v-model="location"></label>
        <baidu-map>
            <bm-view class="map"></bm-view>
            <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
        </baidu-map>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                location: '北京',
                keyword: '百度'
            }
        }
    }
</script>
<style scoped>
.map {
    width: 100%;
    height: 50vh;
}
</style>