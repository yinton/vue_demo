<template>
    <div class="list-box">
        <div class="" v-for="(item,i) in specList" :key="(i+9).toString(36) + i">
            <div class="list-type">{{listType[i]}}</div>
            <div class="row-list">
                <div :class="{actived : !optionSpecs.includes(row), danger: specsS.includes(row)}" class="row" v-for="(row,index) in item.list" :key="index" @click.stop="handelClick(item,i,row,index)">
                    {{row}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/*

原文 连接 ： https://juejin.im/post/5eef2fcee51d4574113a0203#heading-0

*/
import SpecAdjoinMatrix from './skuClass2'
// 现有套餐数
 const specList = [
    { title: "颜色", list: ["红色", "紫色", "白色", "黑色"] },
    { title: "套餐", list: ["套餐一", "套餐二", "套餐三", "套餐四"] },
    { title: "内存", list: ["64G", "128G", "256G"] }
  ];
  // 可选套餐 有哪些组合
  const specCombinationList = [
    { id: "1", specs: ["紫色", "套餐一", "64G"] },
    { id: "2", specs: ["紫色", "套餐一", "128G"] },
    { id: "3", specs: ["紫色", "套餐二", "128G"] },
    { id: "4", specs: ["黑色", "套餐三", "256G"] }
  ];
// 具体分类
const listType = ['颜色','套餐','内存'];
export default { 
    data(){
        return {
            specList,
            specCombinationList,
            listType,
            // specsS:['套餐一','紫色'],
            specsS:[],
            sku:null,
            optionSpecs:[],
        }
    }, 
    mounted(){
        this.getSkuData()
    },
    methods:{
        getSkuData(){
            //  let specsS = ['套餐一','紫色'];
            // let specsS = [];
            this.sku = new SpecAdjoinMatrix(this.specList,this.specCombinationList);
            console.log('sku.adjoinArray==',this.sku.adjoinArray);
            this.optionSpecs = this.sku.getSpecscOptions(this.specsS);    // 某阶段可选的 那个值是谁 ，比如 紫色相关的 可选项有哪些
            // 可选值有哪些
            console.log(this.optionSpecs,'optionSpecs')
        },
        restSpecs(){
            this.optionSpecs = this.sku.getSpecscOptions(this.specsS);   
            console.log(this.optionSpecs,'optionSpecs')
            console.log(this.specsS,'this.specsS')
        },
        handelClick(item,i,row,index) {
            // 首先判断下，是否能点击
            if(!this.optionSpecs.includes(row)) return console.log('没有然后了八八八')
            // 再判断下 是否点击了 重复的选项，如果重复点击了，则，删除之
            if(this.specsS.includes(row)){
                console.log('点击了重复的了')
                let num = this.specsS.findIndex(zind => {
                   return  zind === row
                })
                console.log('num====',num)
                // 删除后 执行下面函数
                this.specsS.splice(num,1)
                this.restSpecs()
                return
            }
             const sku = this.specList[i].list[index];
            if(this.specsS.length === 0) {
                   this.specsS.push(sku);
            } else {
                // 确保 this.specsS 这个数组最多只能有三个值，且每一个值为每一类套餐的其中一项，不能有重复的套餐类型
                for(let m = 0; m<this.specsS.length;m++){
                    if(this.specList[i].list.includes(this.specsS[m])) {
                        this.specsS.splice(m,1,sku);
                        console.log(this.specsS);
                        this.restSpecs()
                        return
                    }
                }
                this.specsS.push(sku);
            }
            console.log(this.specsS)
            // 重置 可选商品内容
           this.restSpecs();
        }
    }
}
</script>  
<style scoped>
.list-box {
    padding: 20px;
}
.row-list {
    display: flex;
}
.row {
    width: 100px;
    border: 1px solid #ccc;
    margin-left: 15px;
    padding: 7px 0;
    text-align: center;
}
.list-type {
    margin: 15px 0 15px 15px;
}
.actived {
    background-color: #e6e6e6;
    color: #b3b3b3;
    cursor:  not-allowed;
}
.danger{border: 1px solid red;color:red}
</style>
