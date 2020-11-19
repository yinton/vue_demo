<template>
<div>
    lodash
    <div class="lodashs">
        这里是演示用的，详细的看下文档，只需要有一个印象即可
        <div class="box">
            <div>比较实用的方法：</div>
            <div class="box">1、 const res = _.dropRightWhile(arr1, function(o) { return !o.active; });  用法：将数组arr1中active字段取反的排除，返回相反的</div>
            <div class="box">2、_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual); 用法：返回，数组objects中不和第二个参数数组每一项相同的</div>
            <div class="box">3、var other = _.concat(array, 2, [3], [[4]]); 用法：将数组铺开，合并。如果是二维数组会被展开为一维</div>
            <div class="box">4、_.findIndex(users, function(o) { return o.user == 'barney'; }); 返回数组某一项等于某个值时，它在数组的第一次出现的位置（第几项）</div>
            <div class="box">5、_.flatten([1, [2, [3, [4]], 5]]); 减少一级array嵌套深度。可以吧数组的数组，平铺开，再往里就不行了应该 可以反复用于同一个数组的</div>
            <div class="box">6、_.flattenDeep([1, [2, [3, [4]], 5]]); 将array递归为一维数组。</div>
            <div class="box">7、_.uniqWith(objects, _.isEqual); 数组去重 可以是数组里面又有 {} 的情况</div>
            <div class="box">8、_.xorWith(objects, others, _.isEqual); 将两个数组中重复的部分去除，返回一个新的数组，包含了两个数组的内容（去除掉了重复的部分）</div>
            <div class="box">9、_.zipObject(['a', 'b'], [1, 2]); 将两个数组，第一个里面的当做 key 值，第二个当做 value值，组合为对象</div>
            <div class="box hj">
                10、防抖操作
                <div class="box">(1):// 避免窗口在变动时出现昂贵的计算开销。例如当前页面调用了窗口变动触发的函数，每一次变动后均触发函数，你会发现，每一次，缩放窗口，都会触发很多次的，现在只想其在一定的时间内触发</div>
            </div>
        </div>
    </div>
</div>
</template>    
<script>
import _ from 'lodash'
export default {
    mounted(){

    //   const that = this;
    //   window.onresize = () => {   //窗口改动时触发
    //       return (() => {
    //             window.screenWidth = document.body.clientWidth;
    //             console.log('窗口变动了')
    //       })();
    //   };
      const that = this;
      window.onresize = () => {   //窗口改动时触发
          return (() => {
                window.screenWidth = document.body.clientWidth;  
          },_.debounce(this.calculateLayout, 1000, {
            'leading': true,
            'trailing': false,
            'maxWait': 1000
            }))();
      };


    },
    methods:{
        calculateLayout(){
            console.log('窗口抖动')
        }
    }

}
</script>  
<style scoped>
.lodash{
    font-stretch: ultra-condensed;
    line-height: 1rem;
}
.box{
    margin-top: 10px;
}
.hj{
    font-weight: 700;
    margin-top: 30px;
}
</style>