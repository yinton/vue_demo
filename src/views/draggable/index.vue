<template>
  <div>
    <!-- 调用组件  -->
    <draggable tag="ul" v-model="listdata"
      @end="handleMoveEnd"
      @start="handleMoveStart"
      :move="handleMove"
    >
      <li class="li-box" v-for="(item,index) in listdata" :key="index">{{item.name}}</li>
    </draggable>
    <!-- 展示list数据效果 -->
    <div class="data-show">{{listdata}}</div>
    <input type="text" v-model="wrd" style="height:30px;border:1px solid #ccc;margin:10px 0;"> 
    <childrens :word.sync="wrd" />
    <div style="padding:10px 0;font-size:20px;">父组件传值时  :word.sync="wrd"  子组件抛出方法时的写法：this.$emit('update:word', newValue)，此时 newValue的那个值就自动双向绑定到了 word 类似于抛出input事件</div>
   <childrens2 v-bind.sync="obj" />
  </div>
</template>
 
<script>
import draggable from 'vuedraggable'
const childrens = () => import('./children')
const childrens2 = () => import('./children2')
export default {
  name: 'draggabletest',
  components: { 
    draggable,
    childrens,
    childrens2
  },
  data () {
    return {
      wrd:'asd',
      obj:{
        list:[],
        name:'小明',
        desc:'描述'
      },
      listdata:[
        {
          id: 1,
          name: '叶落森1'
        },
        {
          id: 2,
          name: '叶落森2'
        },
        {
          id: 3,
          name: '叶落森3'
        },
        {
          id: 4,
          name: '叶落森4'
        },
        {
          id: 5,
          name: '叶落森5'
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
    handleMove () {
      console.log('move')
      return true
    },
  }
}
</script>
<style scoped>
.li-box{
  padding:10px 0;
  background-color:#00cccc;
}
.data-show{
  background: pink;
  padding:20px 0;
}
</style>