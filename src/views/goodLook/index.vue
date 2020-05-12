<template>
  <div class="components-container">
    <div class="singa">
      各种小组件移植演示 for element-adimin  1
    </div> 
    <div class="box">
      <div class="box-div">一般效果</div>
      <div class="pan-btn yellow-btn">Theme1</div>
    </div>

    <div class="box">
      <div class="box-div">点击带水波纹效果 / 顺带展示引入某个指令的写法 / 不是全局指令 </div>
       <el-button v-waves type="primary">
        水波纹效果
       </el-button>
       <el-button type="primary"> 
         不带效果
       </el-button>
       <div v-waves style="width:200px;height:200px;background-color:red;margin-top:30px;">
         指令放入该div后，点击看效果    
       </div>
    </div>

    <div class="box">
      <div class="box-div">图片hover效果</div> 
      <div class="pan-btn yellow-btn">
        <pan-thumb width="100px" height="100px" image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191">
          vue-element-admin
        </pan-thumb>
      </div>
    </div>

    <div class="placeholder-container">
      <div>滚动鼠标查看效果</div>
      <div v-for="(item,index) in 30" :key="index">back to top</div>
    </div> 
    <el-tooltip placement="top" content="toolti12"> 
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="1" transition-name="fade" />
    </el-tooltip> 

    <div class="box">
      <el-button type="primary" @click="dialogTableVisible = true">
        open a Drag Dialog
      </el-button>
      <el-dialog v-el-drag-dialog :modal="modalFalse" :visible.sync="dialogTableVisible" title="Shipping address">
        <el-table :data="gridData"> 
          <el-table-column property="date" label="Date" width="150" />
          <el-table-column property="name" label="Name" width="200" />
          <el-table-column property="address" label="Address" />
        </el-table>
      </el-dialog>
    </div>
    <div v-yy-drag-dialog>
      <div class="drags"> 
          <div class="drags-head"></div>
          按住头部可以拽。。
      </div> 
    </div>

    <div style="margin-top:20px;">
      <div>看一下子组件中的input，在父组件传值的操作，新视角 -- filename == {{filename}}</div>
      <inp v-model="filename" />
      <p>组件内部使用了 computed 计算属性（get和set），类似于 input 事件，即每次输入都触发，但这里用计算属性代替了，子组件，定义了一个 props，实际上父组件并未传递相关变量</p>
      <p>computed里面的变量是可以从新赋值的，通过自带的set。并且，当get 时，return 的变量，相当于对其赋值了，并且里面props 定义的 value，换为 data定义一个value是不对的，可能是由于，在计算属性的，set里return this.value时，他相当与绑定了其值在 value上，而data里的value不行</p>
    </div>

  </div>
</template>
<script>
import waves from './waves/index.js' // 水波纹指令
import panThumb from './panThumb/index' 
import backToTop from './backToTop/index'
import elDragDialog from './dragDialog/index' // base on element-ui
import yyDragDialog from './copyDrag/index'
import inp from './inp/index'
export default { 
  data() {
    return {
      filename:'',
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
      },
      dialogTableVisible:false,
      modalFalse:false,
      gridData: [{
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }]
    }
  },
  methods:{

  },
  directives: {
    waves,
    elDragDialog,
    yyDragDialog,
  },
  components: {
    panThumb,
    backToTop,
    inp
  }
}
</script>
<style scoped>
 .singa{
    display: block;
    font-size: 20px;
    color: #f1ebe5;
    text-shadow: 0 8px 9px #c4b59d, 0px -2px 1px #fff;
    font-weight: bold;
    text-align: center;
    background: linear-gradient(to bottom, #ff1a75 0%,#ff884d 100%);
    border-radius: 10px;
    line-height: 40px;
    cursor: default;   
    letter-spacing: 2px;    
 }
 .box {
    padding:20px;
 }
 .pan-btn {
    font-size: 14px;
    color: #fff;
    padding: 14px 36px;
    border-radius: 8px;
    border: none;
    outline: none;
    transition: 600ms ease all;
    position: relative;
    display: inline-block;
 }
 .pan-btn:hover {
    background: #fff;
 }
 .pan-btn:hover:before,
 .pan-btn:hover:after {
   width: 100%;
   transition: 600ms ease all;
 }
 .pan-btn:before,
 .pan-btn:after {
   content: '';
   position: absolute;
   top: 0;
   right: 0;
   height: 2px;
   width: 0;
   transition: 400ms ease all;
 }
 .pan-btn::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  .yellow-btn {
    background: #FEC171;
  }
  .yellow-btn:hover {
    color: #FEC171;
  }
  .yellow-btn:before,
  .yellow-btn:after {
    background: #FEC171;
  }
  .box-div {
    padding:5px;
  }
  .components-container {
    margin: 30px 20px;
    position: relative;
  }
  .placeholder-container div {
     margin: 10px;
  }
  .drags {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: aquamarine;
    left: 300px;
  }
  .drags>.drags-head {
      width: 100%;
      height: 40px;
      background-color: #ff1a75;  
  }
</style>


