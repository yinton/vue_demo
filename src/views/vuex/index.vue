<template>
 	<div>  
		<div class="singa">现在示范下调用vuex里面的值得情况；</div>  
		<div v-for="(item,index) in produc" :key="index">{{item.name}}</div>  
		<div class="z-padding-v-10px z-bg-ff9 z-bold">上面就是当前页面调用到了vuex，store.js中的 state 中的数据,注意是通过computed 返回值拿到的</div>
		<div class="z-padding-v-5px z-bg-80d z-bold z-margin-top-10px">下面是输出本地修改过的数据；注意，这样子操作了以后，原始值未被修改，依旧是在computed中操作</div> 
		<div>
			<div v-for="(item,inde) in setProduc" :key="inde">{{item.name}}价格参数 {{item.price}}</div>
		</div>
		<div class="z-padding-v-5px z-bg-ff9 z-bold z-margin-top-10px">当然了。也可以在vuex中的 getters中改动后，再在此文件中调用改动的数据，注意，此时有两种方法拿到vuex中的getters的值，第一种就是在computed中返回，第二种就是 ...mapGetters 集中引入，自行查看即可 getters 中的改动不会影响源数据，源数据不会做出相应改动</div>	  
		<div>
			<div v-for="(item,inde) in gettersProduc" :key="inde">{{item.name}}价格参数 {{item.price}}</div> 
		</div>	  
		<div class="z-padding-v-5px z-bg-80d z-bold z-margin-top-10px" @click="reducePrice()">下面演示在本地的methods中定义一个函数，用于修改 vuex中的state中的数据，但是不推荐在本地zhe样子操作，注意此时会更改源数据的，其他页面获取到的数据亦是修该后的了<span class="z-color-f">可点击此div</span></div>  
		<div class="z-padding-v-5px z-bg-80d z-bold z-margin-top-10px" @click="changePrice()">下面演示在vuex中自定义的改变其state中的数据的方法；在vuex文件中的 mutations 方法，类似于事件触发，注意此时会更改源数据<span class="z-color-f">可点击此div</span></div>     
		<div class="z-padding-v-5px z-bg-ff9 z-bold z-margin-top-10px">最后再看下vuex中的actions方法</div> 	  
		<div class="ub-box">                                                                                  
			<div class="z-bg-b3b z-padding-v-20px z-width-50-percent" @click="actionsChange()">点击调用vuex中的actions中的方法， this.$store.dispatch('byActions');其实里面是对mutations的方法的添加操作，比如让其2秒后执行</div>
			<div class="z-bg-fd4 z-padding-v-20px z-width-50-percent" @click="actionsQuery(10)">点击亦是调用vuex中的actions中的方法，但是这个可以传参数</div> 
		</div>
		<div class="z-padding-v-10px z-bg-ff9 z-bold z-margin-top-10px" @click="$router.push('/vuexTxt')">点击跳转页面</div>	
		<div class="z-padding-v-10px z-bg-80d z-bold z-margin-top-10px">总结1、，还是需要搞清楚一个问题，就是vuex相当于是一个全局的变量，当我在此文件中改变了vuex中state中原有的值，比如将每组数据中的钱减了一，那么当我跳转到其他页面时，此数据是已经修改了的，当然了修改后联网同步数据库，否则重启项目数据又都重置了</div>
		<div class="z-padding-v-10px z-bg-80d z-bold z-margin-top-10px">总结2、，我们可以添加数据到vuex中，并且进行操作；this.$store.state.productTxt = ['添加数据到vuex111','添加数据到vuex222','添加数据到vuex333']; 比如添加了数据到vuex中的state中的productTxt这个数组，当然了，其中可先定义一个空的productTxt</div>
			<div class="z-padding-v-10px z-bg-80d z-bold z-margin-top-10px">总结3、getter和mutations中的方法可接受的第一个参数为 state中的所有数据，可以直接访问到里面的数据，mutations里面是可以接受两个参数，第一个就是state，存储了源数据，第二个即是需要传的参数；actions也是一样的，只不过第一个参数是一个对象集合，里面有commit，state等等，可以调用mutations里的方法以及获取state中的数据或者调用getter，是一个与 store 实例具有相同方法和属性的 context 对象</div>
			<div class="testActions" @click="actions(1000)">点击测试action的参数，打印其不同的值</div>  
			<div class="testActions" style="background:blue;" @click="actionsother(2000)">点击测试action第一个参数的其他情况</div> 
		<div class="getter">
			<span>vuex 中的 有的变量：resource</span>	
			{{resource}}
			<div class="getter-box">
				<button @click.stop="$router.push('/vuexTxt')">转页面 查看修改状态</button>
			</div>
			<div class="getter-box">
				<button @click.stop="subCommit">触发 commit</button>
			</div>
		</div>
	</div>
</template> 
<script>
	import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed:{		
			produc(){
			   return this.$store.state.products; 
	    	},	
			setProduc(){ //单独文件中的改动 vuex中的数据 ,其他文件不受影响  
				let setProduc = this.$store.state.products.map(item =>{  
					return {
						name:'**' + item.name,
						price:item.price,
						// price:item.price + 10,
					}
				}) 
				return setProduc
			},	
			// ...mapGetters([  //可以同时调用多个此方法，而不是一个一个的写，像上面 需要引入该方法。。也就是 getters 里面的 相关的方法
	    	//      "setProduc"
			// ]),		  	
			gettersProduc(){ 
				return this.$store.getters.setProduc;  //与上面的一样的功能，上面直接拿到该方法
			},		
			...mapState([
			    "resource"  
			]),
			...mapGetters([
			    "setResource"  
			]),  	
		},  
		methods:{
			reducePrice(){ //相当于是更改了源数据了 ，但不是最优方法； 本地的 而且严格模式会报错，不建议
				console.log(12);
				this.$store.state.products.forEach(item =>{  //这里使用forEach 拿到数据后将其减 1 其他组件的引用数据也会改变
					item.price -= 1 ;    
				})   
			},
			changePrice(){  //这是调用vuex中的 严格模式不会报错  
				this.$store.commit('reduce'); // reduce 就是mutation中的事件名了 相当于是调用了 mutation 中的 reduce 方法。。。
			},	
			actionsChange(){  
				this.$store.dispatch('byActions');
			},	
	 	    actionsQuery(amount){  //传参数
				this.$store.dispatch('byActionsQuery',amount); // amount就是传过去的参数了
			},	
			actions(num) {
				this.$store.dispatch('byActionstest',num); 
			},	  	   
			actionsother(num) {
				this.$store.dispatch('byActionsother',num); 
			},
			subCommit() {
				//this.$store.commit('resourceCommit', 100); 
				//this.resourceCommit(100)
				//this.$store.dispatch('byActionsRes', 100);
				this.byActionsRes()
			}, 
		     ...mapMutations([
			   "resourceCommit"
			]),  			
			...mapActions([
			   "byActionsRes"
			]),  		
		},
		mounted(){
			this.$store.state.productTxt = ['添加数据到vuex111','添加数据到vuex222','添加数据到vuex333'];
			let a = 123;

			let arr = [[12],['asdad'],[1231],[[12],[12],[[1267867]]]];
			console.log('steing==', arr.toString());
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
    background: linear-gradient(to bottom, #ece4d9 0%,#e9dfd1 100%);
    border-radius: 10px;
    line-height: 40px;
    cursor: default;   
    letter-spacing: 2px;    
 }
 .testActions { 
    background:red;
		padding:10px;
 }
 .getter {
	 width: 70%;
	 height: 400px;
	 padding: 20px;
	 margin-top: 20px;
	 background: rgba(0,0,0,.1)
 }
 button {
	 width: 200px;
	 height: 40px;
	 background:red;
	 margin-top: 10px;
	 font-size: 16px
 }
</style>