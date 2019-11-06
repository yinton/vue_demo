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
    
  </div>
</template>
<script>
/*
 用于隔代关系的组件通讯
*/
const childCom1 = () => import("./children.vue");

export default {
   components: { childCom1 },
   data() {
    return {
      name: "zhang",
      age: "18",
      gender: "女",
      height: "158",
      grandfather:""
    };
  },
  methods:{
    ev2(val) {
      console.log(val);  
      this.grandfather = val;
    }
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


