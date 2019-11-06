<template>
    <baidu-map>
        <bm-view class="map" center="北京">
        </bm-view>
        <bm-transit start="百度大厦" end="北京邮电大学西门" :auto-viewport="true" location="北京"></bm-transit>
    </baidu-map>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .map {
        width: 100%;
        height: 50vh;
    }
</style>