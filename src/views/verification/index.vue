<template>
  <div>
    <div class="box">
      <div class="head">
        <div class="row" v-for="(item,index) in list" :key="index">
          <span class="span-box" @click.stop="click(index)">{{item.name}}</span>
        </div>
      </div>
      <div class="row-box" v-for="(item,index) in content" :key="index" v-if="index === current">
        {{item}}   也是官方不推荐的写法   v-for与v-if写于同一个div中
      </div>
    </div>

    <div class="box2">
      <div class="head">
        <div class="row" v-for="(item,index) in listx" :key="index"> 
          <span class="span-box" @click.stop="clicks(index)">{{item.name}}</span>
        </div>
      </div> 
      <div class="row-box" v-for="(item,index) in activeUsers" :key="index">
        {{item}}  官方推荐的写法 ,将需要遍历的对象放在computed中过滤处理，此写法明显速度都要快一点啊啊啊啊啊
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[
        {name:'列表1'},
        {name:'列表1'},
        {name:'列表1'},
        {name:'列表1'}
      ],   
      listx:[
        {name:'列表2'},
        {name:'列表1'},
        {name:'列表1'},
        {name:'列表1'}
      ],  
      content:['这是日常的写法111','这是日常的写法2222','这是日常的写法3333','这是日常的写法4444'],
      current:0,
      currentx:0    
    }
  },
  methods:{
    click(i) {
       this.current = i;
    },
    clicks(i) {
       this.currentx = i; 
    }
  },
  computed: {            //官方推荐的写法啊啊啊啊啊啊啊 ；
    activeUsers: function () {
      const self = this;
      return this.content.filter(function (user,inde) { 
        return inde === self.currentx
      })
    }
  }
}
</script>
<style scoped>
.box {
  width:30%;
  position: absolute;
  left:30%;  
  top:20%;
}
.box2 {
  width:30%;
  position: absolute;
  left:30%;  
  top:59%;
}
.head div{
  display:inline-block;
  width:25%;
  text-align:center;
  height:50px;
  line-height: 50px;
}
.span-box {
   background-color: #e5f9ff;
   display:block;
}
.row-box {
  width:100%;
  height:300px;
  background-color:pink;
}
</style>





