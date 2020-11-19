import { Dep } from './dep'
import { Watcher } from './watcher'

// 会执行多次
function defineReactive (obj, key, val) {

    /* 一个Dep类对象 */
    const dep = new Dep();
    //console.log('其实就是new 多次 -- dep')
    Object.defineProperty(obj, key, {
        enumerable: true,       /* 属性可枚举 */
        configurable: true,     /* 属性可被修改或删除 */
        get: function reactiveGetter () {
            /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */
            /* Dep.target 表示的是watcher 类，因为在watcher内部，初始化时将 this.赋值给了 dep类的属性target,应该是动态添加属性并且赋值吧 */
            console.log('模拟this._data.name调用到之后的触发 --- Dep.target== ',Dep.target)
            dep.addSub(Dep.target);
            // console.log('这里在获取绑定的数据时会触发相应的的拦截函数')
            return val;         /* 实际上会依赖收集，下一小节会讲 */
        },
        set: function reactiveSetter (newVal) {
            if (newVal === val) return;

            /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */
            dep.notify();

            //cb(newVal);
        }
    });
}

// function cb (val) {
//     console.log("视图更新啦～", val);
// }

function observer (value) { 
   // console.log('valueasd',value)
    if (!value || (typeof value !== 'object')) {
        return;
    }
    
    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key]);
    });
}

class VVue {
    /* Vue构造类 */
    constructor(options) {
       // console.log('options',options)
        this._data = options.data;  // data 应该是相当于是每一个实例 里面的 data(){ return{} }
        observer(this._data);

        /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
        new Watcher();
        /* 在这里模拟render的过程，为了触发 其 属性的get函数 */
     //   console.log('render~', this._data.name); // 打印下，就会触发 其 绑定了的事件劫持 get 函数。。 外层打印也是可以的

       // console.log('dep.tagar==',Dep.target)
    }
}

export { VVue }