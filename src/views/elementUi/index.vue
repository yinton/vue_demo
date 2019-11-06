<template>
<div class="oppx">
	<div class="cBox z-margin-top-10px">
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>			
	</div>
	<div class="z-margin-top-10px">
	  <el-button>默认按钮</el-button>
	  <el-button type="primary">主要按钮</el-button>
	  <el-button type="success">成功按钮</el-button>
	  <el-button type="info">信息按钮</el-button>
	  <el-button type="warning">警告按钮</el-button>
	  <el-button type="danger">危险按钮</el-button>		 
	</div>
	<div class="oppx z-margin-top-20px">
	  <el-alert
	    title="成功提示的文案"
	    type="success">
	  </el-alert>			
	</div>
	<div class="kol">
		<el-alert
		  title="成功提示的文案123s"
		  type="success">
		</el-alert>
	</div>
	<div class="steps"> 
		<ul class="progressbar">
			<li v-for="(item,index) in obj" :key="index" :class="{changeColor:item.active}" :style="{width:liwidth}">
				<div class="progressbar-box">
					<div>主管审批</div>
					<div>处理时间：2018/09/19 11：20：19</div>
					<div>操作人：jeecg</div>
				</div>
			</li>
		</ul>
	</div>
 </div>	
</template>
<script>
	export default {
		data() {
			return {
				radio:'1',
				liwidth:'',
				obj:[
					{active:true},
					{active:false},
					{active:false},
					{active:false},
					
				]
			}
		},
		mounted() {
			 this.liwidth = 100 / 4 + '%'
		}
	}
</script>
<style>
	.cBox .el-button { 
			border-radius:15px;
			border:3px solid #eee;
			background-color:red;
	}
 .oppx > .el-alert {
 	 width:50%;
 	 color:red;
 	 height:30px;
 	 line-height:30px;
 	 background-color:blue;
 }
 .steps {
  padding:20px 0;
	background-color:#eee;
 }
.progressbar {    
  text-align: center;
  overflow: hidden;
  counter-reset: step;
  z-index: 99;
	display:flex;
}

.progressbar li {
  list-style-type: none;
  font-size: 9px;
  position: relative;
}

.progressbar li:before { 
  content: counter(step);
  counter-increment: step;
  width: 36px;
  line-height: 36px;
  display: block;
  font-size: 19px;
  color: #333;
  background: white;
  border-radius: 50%;
  margin: 0 auto 5px auto;
}

.progressbar li:after {
  content: '';
  width:calc( 100% - 60px );
  height: 2px;
  background: white;
  position: absolute;
  left: calc((-100% + 60px) / 2);
  top: 18px;
}

.progressbar li:first-child:after { 
  content: none;
}
.changeColor:first-child:before {
	background-color:#4da6ff;
	color:#fff;
}
.progressbar-box {
  width:50%;
	transform:translateX(94%);
	text-align:left;
  color:#606266;
}
.progressbar-box div:nth-child(1) {
	font-weight:bold;
	font-size:17px;
}
.progressbar-box div:nth-child(2) {
  color:red;
	font-size:14px;
	margin-top:6px;
}
.progressbar-box div:nth-child(3) {
  margin-top:6px;
	font-size:14px;
}
/* .progressbar li.active:before, .progressbar li.active:after {
  background: #27AE60;
  color: white;
} */

</style>