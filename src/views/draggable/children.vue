<template>
  <div>
    <span>children中</span>
    <input type="text" v-model="str" style="height:30px;border:1px solid #ccc;">
    <h2>word:{{ word }}</h2>
  </div>
</template>
<script>
export default{
  props: {
    word: {
      type:String,
       default:''
    }
  },
  data() {
    return {
       str:''
    }
  },
  watch: {
    str: function(newValue, oldValue) {
      //每当str的值改变则发送事件update:word , 并且把值传过去
      this.$emit('update:word', newValue)
    }
  }
}
</script>
<style scoped>

</style>