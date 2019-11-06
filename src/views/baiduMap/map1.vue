<template>
    <div>
        <baidu-map class="bm-view"
                   :center="{lng: 116.404, lat: 39.915}"
                   :zoom="14"
                   @mousemove="syncPolyline"
                   @click="paintPolyline"
                   @ready="handler"
                   @rightclick="newPolyline">
            <bm-control>
                <button class="btn" @click="toggle('polyline')">{{ polyline.editing ? '停止绘制' : '开始绘制' }}</button>
                <button class="btn" @click="MapCxt()">查看绘制数据</button>
            </bm-control>
            <bm-polyline :path="path" v-for="path of polyline.paths"></bm-polyline>
        </baidu-map>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                polyline: {
                    editing: false,
                    paths: [

                    ]
                }
            }
        },
        mounted(){

        },
        methods:{
            handler ({BMap, map}) {
                //   console.log(BMap, map);
                console.log('map自带的事件 -- ready');

            },
            toggle (name) {
                this[name].editing = !this[name].editing;
            },
            syncPolyline (e) {
              //  console.log(e);
                console.log('在地图移动触发');
                if (!this.polyline.editing) {
                    return
                }
                const {paths} = this.polyline;  //结构赋值
                if (!paths.length) {
                    return
                }
                const path = paths[paths.length - 1];
                if (!path.length) {
                    return
                }
                if (path.length === 1) {
                    path.push(e.point);
                }
                this.$set(path, path.length - 1, e.point); //第一个参数表示要设置的那个 对象或者数组，第二个参数表示 key ，若为数组就是 索引，第三个表示设置的值
            },
            newPolyline (e) {
                console.log('rightclick鼠标右键点击事件');
                if (!this.polyline.editing) {
                    return
                }
                const {paths} = this.polyline;
                if(!paths.length) {
                    paths.push([])
                }
                const path = paths[paths.length - 1];
                path.pop();
                if (path.length) {
                    paths.push([])
                }
            },
            paintPolyline (e) {
                console.log(e);
                console.log('点击事件');
                if (!this.polyline.editing) {
                    return
                }
                const {paths} = this.polyline;    // let paths = this.polyline.paths;
                !paths.length && paths.push([]);  // 如果 && 符号左边的条件为真，则执行 右边的语句，否则不执行 这里就是说paths里面没有值时执行右边语句
                paths[paths.length - 1].push(e.point);
            },
            MapCxt(){
                console.log(this.polyline);   // this.polyline 第一项是一个数组，存储的数据表示第一次绘制，第二项表示第二次绘制的数据
            }
        }
    }
</script>
<style scoped>
    .bm-view {
        width: 100%;
        height: 80vh;
    }
    .btn {
        width:100px;
        height:40px;
        background-color: rgba(0, 204, 153, .6);
        margin:20px;
    }
</style>