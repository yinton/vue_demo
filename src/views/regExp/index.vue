<template>
 <div class="z-padding-h-10px"> 
   <div class="z-textAlign-center z-padding-v-10px">JS正则表达式的探究</div>	
   <div class="z-textAlign-center z-padding-v-5px">正则表达式简洁且功能强大，通常用于匹配字符串</div>
   <div class="z-width-50-percent z-bg-ff8 z-bold z-padding-all-5px">准备工作,先复习下字符串的常用操作</div>
   <div class="z-padding-all-5px z-bold">1、search()方法</div>
   <div class="z-color-b">描述：search方法用于检索字符串中指定的字符串，或者检索与正则表达式相匹配的字符串，该参数可以是需要在stringObject中检索的子串，也可以是需要检索的RegExp对象</div>
   <div class="z-padding-v-10px z-bold">用法实例：找到字符返回其位置，找不到则反回 -1</div>
    <div>
	  	const str = "HTML5 javaScript css JSON";
      console.log(str.search('H'));    	 
    </div>
    <div class="z-padding-all-5px">结果输出了 0 ，即 H 位于该字符串的第 0 的位置</div>
    <div class="z-padding-all-5px z-bold">2、match()方法</div>
       <div class="z-bold">用法实例：若未匹配到则返回null</div>
    <div class="z-color-b">描述：match方法用于检索某个字符串，有的话就返回一个数组，里面第一项即是拿到的值，若未匹配到则返回null</div>
    <div>
	  	const str = "HTML5 javaScript css JSON";
      console.log(str.match('css'));    	 
    </div>    
    <div class="z-padding-all-5px">结果是输出：["css", index: 7, input: "Holl Word", groups: undefined]     第一项即时匹配到的值了</div>
    <div class="z-padding-all-5px z-bold">3、replace()方法</div>
     <div class="z-padding-v-10px z-bold">用法实例：将字符中的某值替换，若找不到要替换的值则不进行替换</div>
    <div class="z-color-b">
    	replace()方法用于替换，第一个参数为要替换的位置，第二个参数为要替换的值
    </div>
    <div>
	  	const str = "HTML5 javaScript css JSON";
      console.log(str.replace('javaScript','js'));     	
    </div>
    <div class="z-padding-v-5px">
    	结果是输出：HTML5 js css JSON  
    </div>
    <div class="z-padding-all-5px z-bold">replace()方法还有高级应用，比如插入表情包，将找到的内容替换为任意标签再放入字符，可用 v-html 解析，大致用法可见笔记</div>
    <div class="z-padding-all-5px z-bold">4、split()方法</div>
    <div class="z-padding-v-10px z-bold">用法实例：split将字符串分割为数组，第二个参数表示分割数组的个数</div>    
    <div class="z-color-b">
    	<div class="z-bold">以空格分割字符</div>
      const str = "HTML5 javaScript css :key: JSON";
      console.log(str.split(" ",3)); 结果为["HTML5", "javaScript", "css"]
      console.log(str.split(" ",4)); 结果为["HTML5", "javaScript", "css", ":key:"]
    </div>
    <div class="z-width-50-percent z-bg-ff8 z-bold z-padding-all-5px z-margin-top-10px">好了，复习完毕，开始介绍正则</div>
    <div class="z-bold z-padding-v-10px">正则表达式的语法有两种，如下：</div>
    <div>第一种 new RegExp(pattern,attributes)</div>
    <div>第二种 /pattern/attributes </div>
    <div class="z-bold z-padding-all-15px">
    	 参数介绍：pattern是一个字符串，指定了正则表达式的模式或其他正则表达式
    	 参数attributes是一个可选的字符串，包含属性 ’g‘，’i‘，’m‘
    </div>
    <div>
    	<div><span class="z-bold">i</span> 执行对大小写不敏感的匹配</div>
    	<div><span class="z-bold">g</span> 执行全局匹配（查找所有匹配而非在找到第一个后停止）</div>
    	<div><span class="z-bold">m</span> 执行多行匹配</div>
    </div>
    <div class="z-padding-all-15px">返回值，一个新的RegExp对象，具有制定的模式和标志</div>
    <div class="z-bold">例子（1）：</div>
    <div>
      <p>const alte = 'Html5';</p> 
      <p>let reg = /html/i; //查找模式</p> 
      <p>console.log(alte.search(reg)); 结果为 0，因为不区分大小写，所匹配在原字符0位置，一来就是；</p>   
      <p>console.log(alte.match(reg)); 结果为 ["Html", index: 0, input: "Html5", groups: undefined]；</p>     
    </div>
    <div class="z-bold z-padding-v-10px">例子（2）：</div>
    <div>
	    <p>const str = "Html5 htMl5 HtMl5 hTMl5 ";</p> 
	    <p>let reg = /html/ig;</p> 
	    <p class="z-padding-v-5px">console.log(str.search(reg)); 注意这里虽然用了全局匹配g但是rearch只会返回一个值，就是第一个位置 0</p> 
	    <p>console.log(str.match(reg)); 结果：["Html", "htMl", "HtMl", "hTMl"]</p> 
	    <p class="z-padding-v-5px">console.log(str.replace(reg,'html')); 结果：html5 html5 html5 html5 </p>     	
    </div>
    <div class="z-bold z-padding-v-10px">例子（3）：</div>
    <div>
      <div>const str = "555aa4213aa9844aa523199328aa7213";</div> 
      <p>let reg = /aa/ig;</p> 
      <p>console.log(str.replace(reg,"")); 结果：555421398445231993287213 a被替换为了空</p> 
    </div>
    <div class="z-bold z-padding-v-10px">例子（4）：过滤字符串中的小写字母</div>
    <div>
    	<p>const str = "aA42123fG475dsjhf486jdg4不耐烦阿瑟东32sad";</p> 
      <p>let reg = /[a-z]/g;</p> 
      <p>console.log(str.replace(reg,"")); 结果为：A42123G4754864不耐烦阿瑟东32； 这里如果匹配模式 加上 i全局匹配，那么大写也会被找到替换，也可以更改 [a-z]为[A-z]意为查找大写和小写</p> 
    </div>
    <div class="z-bold z-padding-v-10px">正则表达式的方括号，用于查找某个范围内的字符：</div>
 </div>
</template>
<script>
export default {
	data(){
		return { 
          
		}
	},
	mounted(){
	//	const str = "HTML5 javaScript css :key: JSON";
		// console.log(str.search('H'));
		// console.log(str.search('Nop'));
		// console.log(title.match('rd')); 
    // console.log(str.replace('javaScript','js'));
    // let xiaoxi = str.replace(/(\:.+?\:)/g, em => { //解析表情包
    //   let alte = '/static/img/1.jpg';    
    //   return `<img src="${alte}" alt="${alte}" style="width: 22px;height: 22px;vertical-align:middle;margin:0 4px;"/>`
    // })  
    // console.log(xiaoxi);   
    // console.log(str.split(" ",4));  
    // const alte = 'Html5';
    // let reg = /html/i; //查找模式
    // console.log(alte.search(reg));  
    // console.log(alte.match(reg));
    // const str = "Html5 htMl5 HtMl5 hTMl5 ";
    // let reg = /html/ig;
    // console.log(str.search(reg));
    // console.log(str.match(reg));
    // console.log(str.replace(reg,'html'));
    // const str = "555aa4213aa9844aa523199328aa7213";
    // let reg = /aa/ig;
    // let res = /aa/i;
    // console.log(str.replace(res,""));
    // const str = "第1章 第2章 第3章 第4章 第5章 第6章 第7章 第8章 第9章 第10章 第11章 第12章 第13章 第14章 第15章 第16章 第17章 第18章 第19章 第20章 第21章 第22章 第23章 第24章 第25章 第26章 第27章 第28章 第29章";
    // let reg = /第[1-2][0-9]章/g;
    // let reg2 = /[1-2][0-9]/g;
    // console.log(str.replace(reg2,"M"));
    // const str = "我最喜欢的课程是javascript，php，node等扽";    
    // let reg = /(javascript|node)/g;
    // console.log(str.replace(reg,""));
    // const str = "tp.jpg+img&jpg img img.jpg tp img+jpg aa.jpg bb";
    // let reg = /img\+jpg/g;  //其实这里 . 是一个元字符，具有特殊含义 代表了查找单个字符需要 \   来转译
    // console.log(str.replace(reg,"O"));
     // const str = "我的偶像但是@2805319139qq.com";
     // let reg = /\w|\./g;
     // let reg2 = /\W/g;
     // let reg3 = /\d/g;
     // let reg4 = /\D/g;
     // console.log(str.replace(reg4,"K"));
     const str = "good god goood gd gogogod";
     let reg = /(go)+d/g;
     console.log(str.match(reg));
	}
}
</script> 