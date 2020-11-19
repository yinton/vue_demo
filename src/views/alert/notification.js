
/*

虽然 alert.vue 包含了 template、script、style 三个标签，并不是一个 JS 对象，那怎么能够给它扩展一个方法 newInstance 呢？事实上，alert.vue 会被 Webpack 的 vue-loader 编译，把 template 编译为 Render 函数，最终就会成为一个 JS 对象，自然可以对它进行扩展。
Alert 组件没有任何 props，这里在 Render Alert 组件时，还是给它加了 props，当然，这里的 props 是空对象 {}，而且即使传了内容，也不起作用。这样做的目的还是为了扩展性，如果要在 Alert 上添加 props 来支持更多特性，是要在这里传入的。不过话说回来，因为能拿到 Alert 实例，用 data 或 props 都是可以的。

const alert = Instance.$children[0];，这里的 alert 就是 Render 的 Alert 组件实例。在 newInstance 里，使用闭包暴露了两个方法 add 和 remove。这里的 add 和 remove 可不是 alert.vue 里的 add 和 remove，它们只是名字一样。

最后要做的，就是调用 notification.js 创建实例，并通过 add 把数据传递过去，这是组件开发的最后一步，也是最终的入口。在 src/component/alert 下创建文件 alert.js：

*/
import Alert from './alert.vue';
import Vue from 'vue';

Alert.newInstance = properties => {
  const props = properties || {};

  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props: props
      });
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  const alert = Instance.$children[0];

  return {   // 这里的 add 和 remove 可不是 alert.vue 里的 add 和 remove，它们只是名字一样。
    add (noticeProps) {
      alert.add(noticeProps);
    },
    remove (name) {
      alert.remove(name);
    }
  }
};

export default Alert;