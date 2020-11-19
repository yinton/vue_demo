<template>
 <!-- 弹出框 -->
  <a-modal
    title="模型编辑"
    style="top:18%;"
    width="905px"
    okText="提交"
    :visible="modal1Visi"
    @ok="() => set1VisibleOk(false)"
    @cancel="() => setVisible(false)"
  >
    <div style="min-height:427px;">
     <!--   开始循环动态组件   -->
      <template v-for="(item,i) in dynamicData">
        <div class="component-box">
          <component :is="component" :obj="item">12</component>
          <span class="delete">
            <a-popconfirm title="确定删除吗？" ok-text="是" cancel-text="否" @confirm="deleteControl(i)">
              <a-button icon="delete" shape="circle"></a-button>
            </a-popconfirm>
          </span>
        </div>
      </template>
      <!--   增加输入框   -->
      <div class="btn-box">
        <a-button @click.stop="addControl(1)" type="dashed" style="width: 20%" >
          <a-icon type="plus" /> 输入框
        </a-button>
        <a-button @click.stop="addControl(2)" type="dashed" style="width: 20%;margin-left: 15px" >
          <a-icon type="plus" /> 选择框
        </a-button>
      </div>
    </div>
    <bm-attribute ref="sRest" :modalState="attributeState" v-model="attributeState" @getInput="getInputData" @getSelect="getSelectData" :showState="showState" />
  </a-modal>
</template>

<script>
  import propety from './propety.vue';
  import bmAttribute from './bmAttributeSet.vue';
  import { modifyBusniessBmAttribute as mAttribute } from '@/api/bm'
  export default {
    name: 'bmPopup',
    components:{
      bmAttribute
    },
    props:{
      modal1Visi:Boolean,
      dynamicData:{
        type: Array,
        default:() => []
      },
      bmId:String
    },
    data(){
      return {
        component: propety,
        attributeState:false,
        showState:1,

      }
    },
    methods:{
      setVisible(modal1Visible) {
        this.$emit('input',modal1Visible)
      },
      // 一级弹出框的 确认按钮 点击后提交数据更改
      set1VisibleOk(cis) {
      //  console.log('打印出动态数据123',this.dynamicData)
        // 提交时 全部都要提交，所以的话 这里需要将select 里面的 data 转为json 才行
        let copydynamicData = JSON.parse(JSON.stringify(this.dynamicData));
        copydynamicData.forEach(item => {
            if(typeof item.data === 'object'){
                item.data = JSON.stringify(item.data)
            }
        })
        // console.log('打印出动态数据123copydynamicData',copydynamicData);
        // console.log('原始数据',this.dynamicData)
        mAttribute(copydynamicData).then(res=>{
          //console.log('xxx',res)
          if(res.code === 200){
            this.$message.success('操作成功')
            this.$emit('input',cis);
          }else{
            this.$message.info('请重试')
          }
        })
      },
      deleteControl(i) {
        // let copydynamicData = JSON.parse(JSON.stringify(this.dynamicData));
        this.dynamicData.splice(i,1);
        // mAttribute(copydynamicData).then(res=>{
        //   // console.log('xxx',res)
        //   if(res.code === 200){
        //     this.$message.success('修改成功')
        //     this.dynamicData.splice(i,1);
        //   }
        // })
      },
      addControl(i) {
         this.showState = i
         this.attributeState = true;
         this.$refs.sRest.changeSelectState()
       //  console.log(this.showState);
       // this.dynamicData.push({type:'two',key:'name1',value:'',data:[{key:'number1',value:'number1'},{key:'number2',value:'number2'},{key:'number3',value:'number3'}]})
         // this.dynamicData.push({type:'one',key:'name1',value:'value1'})
      },
      // 添加 input 输入框
      getInputData(val){
          //console.log('asd',val);
          this.dynamicData.push({fieldType:'text',fieldName:val.key,defaultValue:val.value,data:'',requiredOrNot: "0",unifyBusDomainModelId:this.bmId})
      },
      // 添加 select 选项框
      getSelectData(val){
        val.unifyBusDomainModelId = this.bmId;
        this.dynamicData.push(val);

      }
    }
  }
</script>

<style scoped lang="scss">
.component-box {
  position: relative;
  .delete {
    position: absolute;
    right: 23%;
    top: 5px;
  }
}
.btn-box {
  width: 70%;
  margin: 0 15%;
  padding-left: 66px;
}
</style>