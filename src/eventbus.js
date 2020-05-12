import Vue from 'vue'
export default new Vue() 

/*

另外一种写法

import Bus from 'vue';
let install = function (Vue) {
  Vue.prototype.$bus = new Bus()
}
export default { install };

main 中引入 ：import vueBus from '@/utils/vueBus';
             Vue.use(vueBus);

*/
