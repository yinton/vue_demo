// myDirective.js
import Vue from 'vue'

Vue.directive('test', { 
      // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {     //监听了被绑元素插入DOM 时的 inserted 钩子函数接下来，定义了一个将字符串解码为base64编码的函数，然后我们被绑元素调用了base64编码的函数
        // 改变元素颜色及背景色
        el.style.color = 'white';
        el.style.background = 'blue' 
        var Base64 = {
                _keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode:function(e){
                        var t="";
                        var n,r,i,s,o,u,a;
                        var f=0;e=Base64._utf8_encode(e);
                        while(f<e.length){n=e.charCodeAt(f++);
                                r=e.charCodeAt(f++);
                                i=e.charCodeAt(f++);
                                s=n>>2;o=(n&3)<<4|r>>4;
                                u=(r&15)<<2|i>>6;a=i&63;
                                if(isNaN(r)){u=a=64}else if(isNaN(i)){
                                        a=64
                                }
                                t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)
                        }
                        return t
                },
                _utf8_encode:function(e){
                        e=e.replace(/rn/g,"n");
                        var t="";
                        for(var n=0;n<e.length;n++){
                                var r=e.charCodeAt(n);
                                if(r<128){
                                        t+=String.fromCharCode(r)
                                }else if(r>127&&r<2048){
                                        t+=String.fromCharCode(r>>6|192);
                                        t+=String.fromCharCode(r&63|128)
                                }else{
                                        t+=String.fromCharCode(r>>12|224);
                                        t+=String.fromCharCode(r>>6&63|128);
                                        t+=String.fromCharCode(r&63|128)
                                }
                        }
                        return t
                }
                
        }
        // 将 Dom 元素 进行 Base64 后插入
        el.innerHTML = Base64.encode(el.innerHTML);
    }
})