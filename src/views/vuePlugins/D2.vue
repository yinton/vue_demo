<template>
<div>
    复制相应的内容--比如下面这句话
    <div>
        <input id="share-code" type="text" v-model="init.code">
        <button class="copy-btn" data-clipboard-action="copy" data-clipboard-target="#share-code" @click="copy">copy</button>
        <button class="copy-btn" data-clipboard-action="cut" data-clipboard-target="#share-code" @click="copy">cut</button>
    </div>

</div>
</template>
<script>
import Clipboard from 'clipboard';
export default {
    data(){
        return {
            init:{
                code:'啥的健康撒谎杜卡迪'
            }
        }
    },
    methods:{
        copy() {
            if(!this.init.code) return;
            var clipboard = new Clipboard('.copy-btn')
            clipboard.on('success', e => {
            this.$message('复制成功');
            e.clearSelection();     // 清除选中状态 ，否则，点击按钮后，字是被选中的状态
              // 释放内存
              clipboard.destroy();
            })
            clipboard.on('error', e => {
                // 不支持复制
        　　　　　　//console.log('该浏览器不支持自动复制')
                // 释放内存
                clipboard.destroy()
            })
       }
    },
}
</script>  
<style scoped>
.copy-btn {
    padding: 10px 25px;
    background: burlywood;
    margin-right: 10px;
}
#share-code{
    border: 1px solid #ccc;
    padding: 7px 5px;
}
</style>