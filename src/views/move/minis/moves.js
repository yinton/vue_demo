
//startMove(oDiv, {width: 400, height: 400})
export default {
	data() {
    return {

    }
	},
	methods:{
	  startMove(obj, json, fnEnd){
	  	console.log(obj.timer);
			clearInterval(obj.timer);
			let selt = this;
			obj.timer=setInterval(function (){
				let bStop=true;		//假设：所有值都已经到了
				
				for(let attr in json){
					let cur=0;
					if(attr=='opacity'){
						cur=Math.round(parseFloat(selt.getStyle(obj, attr))*100);
					}
					else{
						cur=parseInt(selt.getStyle(obj, attr));
					}
					let speed=(json[attr]-cur)/6;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					
					if(cur!=json[attr]) bStop = false;
					
					if(attr=='opacity'){
						obj.style.filter='alpha(opacity:'+(cur+speed)+')';
						obj.style.opacity=(cur+speed)/100;
					}else{
						obj.style[attr]=cur+speed+'px';
					}
				}
				
				if(bStop){
					clearInterval(obj.timer);	
					if(fnEnd)fnEnd();
				}
			}, 30);
		},
     getStyle(obj, name){     //获取css
			if(obj.currentStyle){
				return obj.currentStyle[name];
			}
			else{
				return getComputedStyle(obj, false)[name];
			}
		}
	}
}