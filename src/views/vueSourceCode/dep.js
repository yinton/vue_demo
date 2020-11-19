
class Dep {
    constructor () {
        console.log('NEWle了 dep 啦啦啦啦12313');
        /* 用来存放Watcher对象的数组 */
        this.subs = [];
    }

    /* 在subs中添加一个Watcher对象 */
    addSub (sub) {
        this.subs.push(sub);
    }

    /* 通知所有Watcher对象更新视图 */
    notify () {
        this.subs.forEach((sub) => {    // sub 因该是 ，添加了的 每一个 watcher 观察者 类
            console.log('sub',sub)
            sub.update();
        })
    }
}

export { Dep }