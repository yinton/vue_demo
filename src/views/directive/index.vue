<template>
<div class="test">

  <div v-if="bol" class="inp">
    <input v-focus type="text" class="box-inp z-padding-v-10px">
  </div>
  <div class="directive" @click="directivec">点击显示触发获得焦点</div> 
  <Loading></Loading>  
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
    directives: {     // inserted 钩子，当元素插入时调用,局部指令
      focus: {
        inserted: function (el) { 
          el.focus()
        }
      }
    } 
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


