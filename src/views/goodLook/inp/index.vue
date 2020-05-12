<template>
  <div style="display:inline-block;">
    <!-- $t is vue-i18n global function to translate lang -->
    <label @click.stop="akl" class="radio-label" style="padding-left:0;">Filename(可点击): </label>
    <el-input v-model="filename" placeholder="请输入内容" style="width:350px;" prefix-icon="el-icon-document" />
  </div>
</template>
<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    // data(){        换乘 data 是不对的
    //     return {
    //         value:''
    //     }
    // },
    computed: {
        filename: {
            get() {
                return this.value
            },
            set(val) {          // 值更新时触发
                this.$emit('input', val)
            }
        }
    },
    methods:{
        akl(){ 
            console.log('子组件中计算属性filename====',this.filename);
            console.log('props--VALUE====',this.value);
         //   this.filename = '从新赋值了111啦啦啦'; 
           // console.log('======++-___------',this.filename);
        }
    }
}
</script>  
<style scoped>
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 10px 12px 0 30px;
  cursor: pointer;
}
</style>