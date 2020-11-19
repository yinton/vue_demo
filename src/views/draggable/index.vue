<template>
  <div>
    <!-- 调用组件  -->
      <draggable tag="ul" v-model="listdata"
        @end="handleMoveEnd"
        @start="handleMoveStart"
        :move="handleMove"
         :options="{animation:300,group:'people', scroll:true,scrollSpeed:2000,scrollSensitivity:10}"
      > 
      <transition-group tag="div" name="list" class="list-main">
        <li class="li-box" v-for="(item,index) in listdata" :key="index">{{item.name}}</li>
      </transition-group>
      </draggable>
      <!-- 展示list数据效果 -->
      <div class="data-show">data:=={{listdata}}</div>
      <input type="text" v-model="wrd" style="height:30px;border:1px solid #ccc;margin:10px 0;"> 
      <childrens :word.sync="wrd" />
      <div style="padding:10px 0;font-size:20px;">父组件传值时  :word.sync="wrd"  子组件抛出方法时的写法：this.$emit('update:word', newValue)，此时 newValue的那个值就自动双向绑定到了 word 类似于抛出input事件</div>
    <childrens2 v-bind.sync="obj" />
    <div style="margin-top:30px;">红色线框外面的值：</div>
    <childrens3 :body.sync="bodys" />
    <div style="font-weight:600;">事实证明，.sync 修饰符 是可以和 v-bind="$attrs" v-on="$listeners" 配合使用的（跨组件响应），当然了，也可以和 最上层组建的 v-model 进行响应</div>
  </div>
</template>
 
<script>
import draggable from 'vuedraggable'
const childrens = () => import('./children')
const childrens2 = () => import('./children2')
const childrens3 = () => import('./test1')
export default {
  name: 'draggabletest',
  components: { 
    draggable,
    childrens,
    childrens2,
    childrens3
  },
  data () {
    return {
      wrd:'asd',
      bodys:'最外层的变量',
      obj:{
        list:[],
        name:'小明',
        desc:'描述'
      },
      listdata:[
        {
          id: 1,
          name: '叶1落森1'
        },
        {
          id: 2,
          name: '叶2落森2'
        },
        {
          id: 3,
          name: '叶3落森3'
        },
        {
          id: 4,
          name: '叶4落森4'
        },
        {
          id: 5,
          name: '叶5落森5'
        }
      ]
    }
  },
  methods:{
    handleMoveEnd (evt) {
      console.log('end', evt)
    },
    handleMoveStart ({oldIndex}) {
      console.log('start', oldIndex, this.basicComponents)
    },
    handleMove (q,p) {
       console.log('move1',q.draggedContext.index);
       console.log('move1',q.relatedContext.index);
       //this.listdata.splice(0,0,{name:'asd',id:12})
    },
  }
}
</script>
<style>
  /* // 列表动画 */
  .list-enter-active {
    transition: all .5s;
  }

  .list-leave-active {
    transition: all .3s;
  }

  .list-enter,
  .list-leave-to
  /* .list-leave-active for below version 2.1.8 */
    {
      opacity  : 0;
      transform: translateX(-100px);
    }

  .list-enter { 
    height: 30px;
  }
</style>
<style scoped>
.li-box{
  padding:10px 0;
  background-color:#00cccc;
  margin: 10px 0;
}
div .li-box:nth-child(1){
   background: red;
}
div .li-box:nth-child(2){
   background: blue;
}
.data-show{
  background: pink;
  padding:20px 0;
}


.list-main {
    min-height : 60px;
    position: relative;
    border: 1px #ccc dashed;
    overflow-x: auto;
    overflow-y: auto;
    white-space: nowrap;
  }


</style>