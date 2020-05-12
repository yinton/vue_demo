<template>
    <div style="padding:100px;">
       <div>路由中传 id mounted监听==={{getParamsId()}}</div>	    
       <div>也可以 通过props 传参数，变量是 路由文件里面的 那个变量{{id}}</div>	    
        <el-tree :data="treeData" :props="defaultProps"></el-tree>
    </div>
</template>      
<script>
import { transData } from './util'
const tree = [
  {
     id: "402800816f1267c4016f1780929c0007",
     index: 0,
     name: "云锡",
     pid: "0"
  },
  {
     id: "402800816f1267c4016f1780929c00070",
     index: 10,
     name: "云锡2",
     pid: "1"
  },
  {
     id: "402800816f1267c4016f1789fd91000c",
     index: 1,
     name: "熔炼车间",
     pid: "402800816f1267c4016f1780929c0007"	
  },		
  {
     id: "402800816f1267c4016f178b6e0e000d",
     index: 2,
     name: "液态化焙烧车间",
     pid: "402800816f1267c4016f1780929c0007"
  },
  {
     id: "402800816f1267c4016f178ddcf0000f",
     index: 3,
     name: "回转窑焙烧车间",
     pid: "402800816f1267c4016f1780929c0007"
  },	
  {
     id: "402800816f1267c4016f1784b7d10009",
     index: 4,
     name: "顶吹炉",
     pid: "402800816f1267c4016f1789fd91000c"
  },
  {
     id: "402800816f1267c4016f1785ffb6000a",
     index: 5,
     name: "烟化炉",
     pid: "402800816f1267c4016f1789fd91000c"
  },
  {
     id: "402800816f1267c4016f17870dd3000b",
     index: 6,
     name: "精炼离心机",
     pid: "402800816f1267c4016f1789fd91000c"
  }
];

export default {
   props:{
      id:String | Number
   },
    data(){
        return {
           tree,
           treeData:[],
           defaultProps: {
             children: 'children',
             label: 'name'
           }
        }
    },
    mounted(){
        //const query =  this.$route.params.id;
       // console.log('路由中传 id mounted监听===',query);

        this.treeData = transData(tree,'id','pid','children');
        console.log('treeData==',this.treeData);
        let aa = true;
        let bb = undefined;
        aa && (bb = 123123)
        console.log('bb',bb)
    },
    methods:{
         getParamsId() {
            return this.$route.params.id
        }
    }
}
</script>