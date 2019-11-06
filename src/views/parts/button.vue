<template>
  <div class="asdaqq">
    <div class="asdad">
      <button :class="'i-button-size' + size" >
        <slot></slot>  
        <slot name="test"></slot>
      </button>
    </div>
  </div>
</template>

<script>
  // 判断参数是否是其中之一
  function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
        return true;
      }
    }
    return false;
  }

  export default {
    props: {
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default']); //不是其中之一就会报错
        },
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        title:'通过ref调用的东西'
      }
    },
    mounted(){
      console.log(this.disabled);
    },
  }
</script>
<style scoped>
.i-button-sizedefault{width:100px;height:30px;}
.i-button-sizelarge{width:150px;height:30px;}
.i-button-sizesmall{width:60px;height:30px;}
</style>
