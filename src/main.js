import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui'; 

import 'element-ui/lib/theme-chalk/index.css';         // element的原主题和（下）定制主题
//import '@/assets/theme/index.css'                     // 在线生成的主题，下载后引入
import '@/assets/element-variables.scss';

import store from './store';
import './style/comm.css';
import eventbus from './eventbus.js';
import './views/svg/start';
import BaiduMap from 'vue-baidu-map';

import Loading from '@/views/install/laoding';  //全局组建
import directives from '@/views/install/directiveGlob';

import i18n from '@/views/vuePlugins/lang.js';

import VueLazyload from 'vue-lazyload';
 
Vue.use(VueLazyload,{
    // preLoad: 1.3,
    // attempt: 2,
    error: require('./assets/loading.gif'), 
    loading: require('./assets/loading.gif'), 
})

Vue.directive('autoFcsss',directives)  //全局插件 
Vue.use(Loading)
Vue.use(ElementUI)
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
  i18n,
  render: h => h(App)
}).$mount('#app');
