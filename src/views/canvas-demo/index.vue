<template>
  <div style="padding:30px;">
    <button @click="() => $forceUpdate()">
      $forceUpdate() 强制刷新模板-- 开始执行 update 生命周期
    </button>
    <el-button @click="asd">change{{ a }}</el-button>
    <pre style="font-size:20px;">
      data 里面有 b:{c:2,d:3}
      watch:{    // 可以监听 b 的 b.c 这个属性。。一般对象会加一个深度监听，监听其内部所有属性的变化
         "b.c":function(val,oldVal) {   
            console.log(12)
         }
      } // watch 中可以执行任何逻辑，如函数节流，Ajax 异步获取数据，甚至操作 DOM（这里重点函数节流）

      如果data里面响应式变量 在template中了，那么更改该变量会触发 update。
      不可在update中进行 date数据的修改
    </pre>
    <el-button @click="asdx">试着改变被冻结的对象</el-button>
    <p v-for="(item, i) in tableData" :key="(i + 9).toString(36)">
      {{ item.name }}
    </p>
    被 Object.freeze(arr) 方法冻结前是可以响应的，冻结后就不行了
    <pre>
   mounted() {   // 是否可以将获取的数据冻结 赋值以提升性能
     const arr = Array(10)
       .fill(1)
       .map((item) => {
         return {
           date: "2020-07-22",
           name: "yinton1",
         };
       });
     this.tableData = Object.freeze(arr);
  },
    </pre>
    {{oke}}
    <div style="font-weight:bold;">这里简单总结下：Object.freeze(arr),冻结对象后，数据无法再进行响应了，而且在data 的return 外面 定义一个 this.oke 的变量，后，其他地方可以通过this调用到，template里面也可以展示，但是无法进行响应，更改后无法响应</div> 
    <pre style="margin:20px 0 20px 0;font-size:23px;">
      函数式组件  :  无状态，无实例，没有 this 上下文，无生命周期，一般用来做展示用的
      利用函数式组件在模板中做临时变量（在vue 的模板中，是没有提供临时变量的，
      但是开发过程中，临时变量是非常有必要的）,例子如下所示，可直接看代码

      再说一下，函数式组件使用临时变量这操作，其实，就是为了使用临时变量，
      slot 里面的所有东西都是可以
    </pre>	  
    <demo
      :var1="`hello ${name}`"
      :var2="destoryClock ? 'hello vue2':'hello world'"
    >
        <template v-slot="{var1, var2}">
            <div style="background:red;">
              {{ var1 }} -- 
              {{ var2 }}
            </div>
        </template> 
    </demo>
  </div>
</template>
<script>
import demo from './demo.js'
export default {
  components:{
    demo
  },
  updated() {
    console.log("触发update了");
  },
//   mounted() {
//     const arr = Array(10)
//       .fill(1)
//       .map((item) => {
//         return {
//           date: "2020-07-22",
//           name: "yinton1",
//         };
//       });
//     this.tableData = Object.freeze(arr);
//   },
  data() {
    const arr = Array(10)
      .fill(1)
      .map((item) => {
        return {
          date: "2020-07-22",
          name: "yinton",
        };
      });
      this.oke = '在data 的return 外面 设置一个 this.oke'  
    return {
      a: 12,
      tableData: Object.freeze(arr),
      name:"vue",
      destoryClock: false
    };
  },
  methods: {
    asd() {
      console.log(1267);
      this.a = 112;
    },
    asdx() {
      console.log("tableData", this.tableData);
      console.log("oke", this.oke);
      this.oke = 'aaaaaaa'
      this.tableData[0].name = "yinwei";
    },
  },
};
</script>
<style scoped></style>
