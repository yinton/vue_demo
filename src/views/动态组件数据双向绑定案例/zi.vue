<template>
    <div class="prop-box">
      <a-form-item :label="obj.fieldName" v-if="obj.fieldType==='select'" :label-col="{ span: 5 }" :wrapper-col="{ span: 14 }">
        <a-select :default-value="obj.defaultValue" style="width: 100%" @change="handleChange">
          <a-select-option :value="item.value" v-for="(item,i) in obj.data" :key="(i+9).toString(36) + i">
            {{item.key}}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :label="obj.fieldName" v-if="obj.fieldType==='text'" :label-col="{ span: 5 }" :wrapper-col="{ span: 14 }">
        <a-input placeholder="Basic usage" v-model="obj.defaultValue" />
      </a-form-item>
    </div>
</template>

<script>
  export default {
    name: 'propety',
    props:{
      obj:Object
    },
    methods:{
      handleChange(value) {
        console.log(`selected ${value}`);
        this.obj.defaultValue = value
      },
    }
  }
</script>

<style scoped lang="scss">
  .prop-box {
    width: 70%;
    margin: 0 15%;
  }

</style>