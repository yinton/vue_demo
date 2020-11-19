<template>
    <div style="padding:100px;">
       <div>路由中传 id mounted监听==={{getParamsId()}}</div>	    
       <div>也可以 通过props 传参数，变量是 路由文件里面的 那个变量{{id}}</div>	    
        <el-tree :data="treeData" :props="defaultProps"></el-tree>
        <el-button style="margin-top:20px;" @click.stop="digui">上面是生成树，下面是树 又递归回来的操作-且把每一项放入数组</el-button>
        <el-button style="margin-top:20px;" @click.stop="qiancopy">测试下浅拷贝 - 赋值问题</el-button>
        <pre>

            let obj = {a:13,n:90};
            let g = {...obj};
            obj.a = 999;
            console.log('g', g)  // 这样子，改变 obj 里面某个键值对 不会影响到浅拷贝的结果 g

            但如果 let obj = {a:13,n:90,op:{k:99}};
            obj.op.k = 999;  // 这样子改变后，是会影响到 g 的op 的，也就是 g 的 op 会随之改变
        </pre>
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
            },
            collect:[]   
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
        },
        digui() {
           let arr = [
              {
                 label: 'name1',
                 key: 1,
                 children: [
                    {
                        label: 'name1 - 1',
                        key: 2,
                    },
                    {
                        label: 'name1 - 2',
                        key: 3,
                        children: [
                           {
                              label: 'name2 - 1',
                              key: 4,             
                              children:[]               
                           }                           
                        ]
                    }
                 ]
              }
           ]
           console.log('元数据：为', arr);
           this.test_parse(arr)
        },
         test_parse(source){
            for (var key in source) {
                let {...ob} = source[key];
                delete ob.children;
                this.collect.push(ob);
                if (source[key].children&&source[key].children.length) {
                    this.test_parse(source[key].children)
                }
            }
        },
        qiancopy(){
         //   let obj = {a:13,n:90};
         //   let g = {...obj};
         //   obj.a = 999;
         //   console.log('g', g);
           console.log(this.collect);
        }
    }
}
</script>