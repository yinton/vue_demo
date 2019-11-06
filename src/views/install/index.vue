<template>
  <div>
    全局组件以及插件的使用,下面全局使用一个注册好的全局插件组件，并且可以任意地方调用到
    <Loading name="本组件调用时所穿的之。。。"></Loading>  
    <div>下面演示使用全局插件</div>
    <div v-if="bol" class="inp">
      <input v-autoFcsss type="text" class="box-inp z-padding-v-10px">
    </div> 
    <div class="directive" @click="directivec">点击显示触发获得焦点</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        bol: false
    }
  },
  methods:{
    directivec() {
      this.bol = !this.bol;
    }
  },
}
</script>
<style scoped>
.inp {
  margin-left:20px;
}
input {
  padding-left:10px;
}
.directive {
  background-color:red;
  padding:10px 10px;
}
</style>


