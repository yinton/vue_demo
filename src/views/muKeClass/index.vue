<template>
	<div class="z-padding-all-10px z-color-bl">
		<div class="z-bold zl-font">
      实战 \ Vue.js2.5+cube-ui重构饿了么App -- 知识点总结归纳 与即时通讯界面
    </div>
    <div contenteditable class="z-margin-top-20px">这里面的内容是可以编辑的 HTML控制 这是一个div</div>
    <div class="editable z-margin-top-20px">这里面的内容是可以编辑的 css控制 这是一个div</div>
    <div contenteditable class="z-margin-top-20px hei" ref="text" v-html="info" @input="infoInput"></div>  
    <div class="ub-box ub-end">
      <div class="send" @click.stop="send">发送</div>
    </div>  
    <div class="ub-box z-margin-top-20px"> 
      <div v-for="(item,key) in emoji" :key="key" class="z-padding-h-10px" :title="key">
        <img :src="item" alt="" v-if="item" @click="selectEmoji(key)">
      </div>
    </div>
    <div class="z-margin-top-20px">
      <div>发送的内容预览</div>
      <div class="z-margin-v-10px msg" v-for="(item,index) in list" :key="index">
        <div>第{{index + 1}}条内容</div>
        <div v-html="item.name"></div>
      </div> 
    </div>
	</div>
</template>	
<script> 
	export default { 
    data() {
   	  return {
        emoji:{ 
          "::angrya_thumb::": "http://www.17sucai.com/preview/537801/2016-05-16/5-101/images/zz2_thumb.gif",
           "::cry::": "http://www.17sucai.com/preview/537801/2016-05-16/5-101/images/yhh_thumb.gif",
           "::wq::":"http://www.17sucai.com/preview/537801/2016-05-16/5-101/images/wq_thumb.gif",
           "::kth::": "http://www.17sucai.com/preview/537801/2016-05-16/5-101/images/k_thumb.gif",
           "::baba::": "http://www.17sucai.com/preview/537801/2016-05-16/5-101/images/88_thumb.gif",
           "::hh::": "http://www.17sucai.com/preview/537801/2016-05-16/5-101/images/h_thumb.gif"
        },
        info:'', 
        infox:'',
        list:[]
   	  }
    },  
    methods:{
      send(){
        //console.log(this.$refs.text.innerHTML);
        this.list.push({
           name:this.$refs.text.innerHTML
        }); 
         
      }, 
      selectEmoji(key){

        this.infox += key;    //输入的内容的总的值

        this.info = this.infox;  

        this.info = this.info.replace(/(\::.+?\::)/g, em => {  //解析表情包
          let str = null;
          for(let x in this.emoji){
            if(x === em){
              str = this.emoji[x];
            } 
          }      
          return `<img src="${str}" alt="${str}" style="vertical-align:middle;margin:0 2px;"/>`
        }) 
       // console.log(this.info);             

      },
      infoInput(){
        this.infox = this.$refs.text.innerHTML;
       // console.log(this.$refs.text.innerHTML);
      }
    }
	}
</script> 
<style scoped>
 .editable{
   -webkit-user-modify: read-write-plaintext-only;
   user-modify: read-write-plaintext-only;
   max-height: 40px;
   overflow-y: scroll;
   border:1px solid red;
   padding:5px 5px;
   outline-color:red;
   outline-style: dotted
 }
 .hei{
  height:140px;
  border:1px solid #ccc;
  padding:10px;
  color:#ff6600;
  letter-spacing:1px;
 }
 .send{
  padding:4px 15px;
  background-color:#00cc99;
  color:#fff;
  font-size:14px;
 }
 .msg{background-color:#f2f2f2;box-shadow:1px 1px 1px 1px rgba(0,0,0,.5);padding:10px;}
</style>