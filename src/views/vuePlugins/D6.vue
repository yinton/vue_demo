<template>
   <div>
      <div>1、主题编辑器（在线生成并且可下载预览）应该是直接替换了原来的element-ui的引入样式，需引入整个文件夹，原来的element-ui css那个无需引入了</div>
      <el-date-picker
         v-model="value1"
         type="date"
         placeholder="选择日期">
      </el-date-picker>
      <el-button type="danger">危险按钮</el-button>
      <div>2、在项目中改变 SCSS 变量，新建一个样式文件，例如 element-variables.scss（本项目自带scss）并且在 组件中引用</div>
   </div>
</template>
<script>
export default {
    data(){
       return{
          value1:undefined
       }
    }
}
</script>