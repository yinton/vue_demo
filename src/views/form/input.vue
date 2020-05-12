<template>
  <input
      type="text"
      :value="currentValue" 
      @input="handleInput"
      @blur="handleBlur"
  />
</template>
<script>
import Emitter from '@/utils/emitter.js';
export default {
    name: 'iInput',
    mixins: [ Emitter ],
    props: {
      value: {
          type: String,
          default: ''
      },
    },
    data () {
      return {
          currentValue: this.value
      }
    },
    watch: {
      value (val) {
          this.currentValue = val;
      }
    },
    methods: {
      handleInput (event) {
          const value = event.target.value;
          this.currentValue = value;
          this.$emit('input', value);
          this.dispatch('iFormItem', 'on-form-change', value);
      },
      handleBlur () {
          this.dispatch('iFormItem', 'on-form-blur', this.currentValue);
      }
    }
 }
</script>
<style scoped>
  input{
    border:1px solid #eee;
    padding:10px;
    width:100%;
    margin:10px;
  }
</style>