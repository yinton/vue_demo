<template>
  <div class="test">
    <div v-if="bol" class="inp">
      <input v-focus type="text" class="box-inp z-padding-v-10px">
    </div>
    <div class="directive" @click="directivec">点击显示触发获得焦点 -- 其实这里的input一直都是有焦点的，只是，div 隐藏与否的原因，因为 input 使用的指令一开始就触发的生命周期中就使得其获得焦点了</div> 
    <Loading></Loading>  
    {{syncTxt}} -- 需要响应的内容
    <syncx :value.sync="syncTxt" />
    <nativex @click.native.stop="jik()" />
  </div>
</template>
<script>
  const syncx = () => import('./syncCon')
  const nativex = () => import('./natives')
	export default {
    components:{
      syncx,
      nativex
    },
    data() {
      return {
         bol: false,
         syncTxt:'sync修饰符'
      }
    },
    methods:{
      directivec() {
        this.bol = !this.bol;
      },
      jik(){
        console.log(234)
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


