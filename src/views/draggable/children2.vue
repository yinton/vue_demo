<template>
  <div>
    <span @click="see">children2中演示传对象</span>
       
  </div>
</template>
<script>
export default{

  data() {
    return {
       str:''
    }
  },
  methods:{
    see(){
      console.log(122);

    }
  }
}
</script>
<style scoped>

</style>