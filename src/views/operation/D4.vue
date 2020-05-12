<template>
    <div> 
        比如，在页面挂载时定义计时器，需要在页面销毁时清除定时器。这看起来没什么问题。但仔细一看 this.timer 唯一的作用只是为了能够在 beforeDestroy 内取到计时器序号，除此之外没有任何用处。这并不算严重的问题，但是它可以被视为杂物。
        <div>我们可以通过 $on 或 $once 监听页面生命周期销毁来解决这个问题：</div>
    </div>
</template> 
<script>
export default {
    data(){
        return {
           timer:null
        }
    },
    methods:{

    },
    // mounted() {
    //     this.timer = setInterval(() => {
    //         console.log(Date.now())
    //     }, 3000)
    // },
    // beforeDestroy() {
    //     clearInterval(this.timer)
    // }

    /* 上面是常规的写法 下面是 骚操作了：  */
    mounted() {
        this.creatInterval('hello')
    },
    methods:{
        creatInterval(msg) {
            let timer = setInterval(() => {
                console.log(msg)
            }, 3000)
            this.$once('hook:beforeDestroy', function() {
                clearInterval(timer)
                console.log('组件卸载了')
            })
        }
    }
}
</script>  