<template>
  <div style="padding:10px 0;background-color:yellow;">
    loading ...全局 插件 ，也是一个组件，可全局使用
    <div>{{name}}</div>
  </div>
</template>
<script>
export default {
  props:{
    name:{
      type:String,
      default:'默认的值'
    }
  }
}
</script>

