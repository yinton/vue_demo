import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import './style/comm.css';
import eventbus from './eventbus.js';
import './views/svg/start';
import BaiduMap from 'vue-baidu-map';

import Loading from '@/views/install/laoding';  //全局组建
import directives from '@/views/install/directiveGlob';

Vue.directive('autoFcsss',directives);  //全局插件 
Vue.use(Loading);
Vue.use(ElementUI);
//Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'LZwLq7xbc7HbDoeMrrzcCpONKUmGjkYm'
});
Vue.prototype.$bus = eventbus;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
