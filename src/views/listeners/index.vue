<template>
  <div class="nl">
    <div class="father">父组件 <span>{{grandfather}}</span></div> 
    <child-com1
      :name="name" 
      :age="age"
      :gender="gender"
      :height="height"
      title="程序员成长指北"
      @event1="ev2"
      class="uuId1"  
    ></child-com1> 
    <text-cs @txt1="ev3" @txt0="ev4" :tn="textName" />
    <div>{{sxs}} <span style="color:orange;">这是最上层的组件了</span> </div>
    <div>{{sx}} <span style="color:orange;">这是最上层的组件了</span> </div>
    <div style="background:#80bfff;margin-top:10px;">事实证明，组件传值，子组件定义v-bind="$attrs" v-on="$listeners"为桥梁的话，再往下，继续定义v-bind="$attrs" v-on="$listeners"，就可以传值到往下的任意层，理论上可以的，最后一层，也可以网上抛出事件到最顶层,最后一层的往上一层亦可以抛出事件到最顶层，因为有了连接的桥梁了</div>
  </div>
</template>
<script>
/*
 用于隔代关系的组件通讯
*/
const childCom1 = () => import("./children.vue");
const textCs = () => import("./text.vue");

export default {
   components: { childCom1 , textCs},
   data() {
    return {
      name: "zhang",
      age: "18",
      gender: "女",
      height: "158",
      grandfather:"",
      textName: 99999,
      sx:'',
      sxs:''
    };
  },
  methods:{
    ev2(val) {
      console.log(val);  
      this.grandfather = val;
    },
    ev3(val) {
      console.log(val);  
      this.sx = val;
    },
    ev4(val) {
      console.log(val);  
      this.sxs = val;
    },
  }
}
</script>
<style scoped>
.father {
  padding:10px;
  background:blue;
  width:20%;
  margin-bottom:20px;
}
.nl {
  background:rgba(255, 229, 255,.4);
  padding:10px;
}
span{
  color:#fff;
}
</style>


