import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)

export default new Vuex.Store({ 
  state: {
    products:[
      {name:'vuex中的值111',price:200000},
      {name:'vuex中的值222',price:100000},
      {name:'vuex中的值333',price:50000},
    ],
    productTxt:[]
  },
  getters:{ 
    //用于获取state中的数据 获取属性状态 //并且改变state中的数据 ;当然了也可在组件中自己改
    setProduc: (state) =>{    //state 存储的是 state 里的所有数据 下面的state即时所存参数
      console.log('33333333333');
      console.log(state);      
      console.log('44444444444');
      let setProduc = state.products.map(item =>{    //state 存储的是 state 里的所有数据
         return {
           name:'**' + item.name,
           price:item.price / 2,
         }
      })
      return setProduc      
    }
  },  
  mutations: {
    reduce: (state) =>{   //action中的方法传来的参数 //state 存储的是 state 里的所有数据 下面的state即时所存参数
      console.log('222222222');
      console.log(state);      
      console.log('222222222');
       state.products.forEach(item =>{
         item.price -= 1;
       }) 
    },  
    setProducQuery: (state,payload) =>{   //action中的方法传来的参数 
      console.log('00000000000');
      console.log(state);      
      console.log('iiiiiiiiiiii');
       state.products.forEach(item =>{
         item.price -= payload;
       }) 
    }, 
  },
  actions: {
    byActions: (context) =>{ 
      console.log('context1111111111');
      console.log(context);   //各种对象，在里面 commit 对象，用于调用vuex中的其他的方法
      console.log('context1111111111');

      setTimeout(() =>{
         context.commit('reduce');   //与外部调用mutations类似; 现在
      },2000)
    },
    byActionsQuery: (context,payload) =>{
      console.log('context1111111111');
      setTimeout(() =>{
         context.commit('setProducQuery',payload);   //与外部调用mutations类似; 现在
      },2000)
    },
    byActionstest: (context,payload) =>{   //第一个参数是综合的参数，第二个是 所传参数 
      console.log('contexttest1');
      console.log(context);
      console.log(payload);
    },    
    byActionsother: ({ commit },payload) =>{   //只把 commit 引入使用
      console.log(payload);
      commit('reduce');    //可以调用 mutations 中的方法
    },   
  }
})
