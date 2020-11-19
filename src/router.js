import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
 
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/bus',
      component: () => import('./views/bus/index.vue')
    },   
    {
      path: '/parts',
      component: () => import('./views/parts/example.vue')
    }, 
    {
      path: '/signal',
      component: () => import('./views/signal/index.vue')
    },  
    {
      path: '/radioBroadcast',
      component: () => import('./views/radioBroadcast/index.vue')
    },  
    {
      path: '/findComponents',
      component: () => import('./views/findComponents/index.vue')
    },  
    {
      path: '/form',
      component: () => import('./views/form/index.vue')
    },   
    {
      path: '/grid',
      component: () => import('./views/gridBox/grid.vue')
    },   
    {
      path: '/proper',
      component: () => import('./views/propers/index.vue')
    },       
    {
      path: '/mechanism',
      component: () => import('./views/jS_mechanism/index.vue') 
    },   
    {
      path: '/examport',
      component: () => import('./views/jS_mechanism/examport.vue') 
    },    
    {
      path: '/transitions',
      component: () => import('./views/transitions/index.vue') 
    },   
    {
      path: '/regExp',
      component: () => import('./views/regExp/index.vue') 
    },  
    {
      path: '/promise',
      component: () => import('./views/promise/index.vue') 
    },    
    {
      path: '/media',
      component: () => import('./views/media/index.vue') 
    },     
    {
      path: '/vuex',
      component: () => import('./views/vuex/index.vue') 
    },   
    {
      path: '/vuexTxt',
      component: () => import('./views/vuex/login.vue') 
    },  
    {
      path: '/routers',
      component: () => import('./views/router/index.vue') 
    },  
    {
      path: '/svgs',
      component: () => import('./views/svg/index.vue') 
    },    
    {
      path: '/sticky',
      component: () => import('./views/sticky/index.vue') 
    },  
    {
      path: '/stickyFooter',
      component: () => import('./views/sticky/stickyFooter.vue') 
    },   
    {
      path: '/cssLayout',
      component: () => import('./views/cssLayout/index.vue') 
    },  
    {
      path: '/animation',
      component: () => import('./views/animation/index.vue') 
    },   
    {
      path: '/muke',
      component: () => import('./views/muKeClass/index.vue') 
    },    
    {
      path: '/elementUi',
      component: () => import('./views/elementUi/index.vue') 
    },    
    {
      path: '/move',
      component: () => import('./views/move/index.vue') 
    },     
    {
      path: '/directive',
      component: () => import('./views/directive/index.vue') 
    },       
    {
      path: '/listeners',
      component: () => import('./views/listeners/index.vue') 
    },     
    {
      path: '/install',
      component: () => import('./views/install/index.vue') 
    },    
    {
      path: '/goodlook',
      component: () => import('./views/goodLook/index.vue') 
    },  
    {
      path: '/echarts', 
      component: () => import('./views/echarts/index.vue') 
    },     
    {
      path: '/verification', 
      component: () => import('./views/verification/index.vue') 
    },   
    {
      path: '/draggable', 
      component: () => import('./views/draggable/index.vue') 
    },       
    {
      path: '/canvas', 
      component: () => import('./views/canvas/index.vue') 
    }, 
    {
      path: '/qiqiao', 
      component: () => import('./views/canvas/qiqiao.vue') 
    },  
    { 
      path: '/arc', 
      component: () => import('./views/canvas/arc.vue') 
    },     
    { 
      path: '/down', 
      component: () => import('./views/canvas/down.vue') 
    },
    {
      path: '/baiduMap',
      component: () => import('./views/baiduMap/index.vue')
    },
    {
      path: '/map1',
      component: () => import('./views/baiduMap/map1.vue')
    },
    {
      path: '/map2',
      component: () => import('./views/baiduMap/map2.vue')
    },
    {
      path: '/map3',
      component: () => import('./views/baiduMap/map3.vue')
    },
    {
      path: '/map4',
      component: () => import('./views/baiduMap/map4.vue')
    },
    {
      path: '/map5',
      component: () => import('./views/baiduMap/map5.vue')
    },
    {
      path: '/map6',
      component: () => import('./views/baiduMap/map6.vue')
    },
    {
      path: '/map7',
      component: () => import('./views/baiduMap/map7.vue')
    },
    {
      path: '/map8',
      component: () => import('./views/baiduMap/map8.vue')
    },
    {
      path: '/map9',
      component: () => import('./views/baiduMap/map9.vue')
    },
    {
      path: '/map10',
      component: () => import('./views/baiduMap/map10.vue')
    },
    {
      path: '/map11',
      component: () => import('./views/baiduMap/map11.vue')
    },
    {
      path: '/map12',
      component: () => import('./views/baiduMap/map12.vue')
    },
    {
      path: '/physicalExperiment',
      component: () => import('./views/canvas/physicalExperiment.vue')
    },
    {
      path: '/mappingDesc',
      component: () => import('./views/canvas/mappingDesc.vue')
    },
    {
      path: '/fiveStar',
      component: () => import('./views/canvas/fiveStar.vue')
    },
    {
      path: '/transformation',
      component: () => import('./views/canvas/transformation.vue')
    },
    {
      path: '/graphicChange',
      component: () => import('./views/canvas/graphicChange.vue')
    },
    {
      path: '/cxtArc',
      component: () => import('./views/canvas/cxtArc.vue')
    },
    {
      path: '/useElement',
      component: () => import('./views/canvas/useElement.vue')
    },
    {
      path: '/baseBorder',
      component: () => import('./views/baseBorder/index.vue')
    },
    {
      path: '/recursion/:id',
      component: () => import('./views/recursion/index.vue'),
      props: true    // props 解耦，组件内可通过 props 属性接受 到 所传的参数
    },
    {
      path: '/operation',
      component: () => import('./views/operation/index.vue')
    },
    {
      path: '/classc',
      component: () => import('./views/classc/index.vue') 
    },
    {
      path: '/vuePlugins',
      component: () => import('./views/vuePlugins/index.vue') 
    },
    {
      path: '/lodash',
      component: () => import('./views/lodash/index.vue') 
    },
    {
      path: '/apexchart',
      component: () => import('./views/apexchart/index.vue') 
    },
    {
      path: '/alert',
      component: () => import('./views/alert/index.vue') 
    },
    {
      path: '/axios',
      component: () => import('./views/axios/index.vue') 
    },
    {
      path: '/float',
      component: () => import('./views/float/index.vue') 
    },
    {
      path: '/sku',
      component: () => import('./views/sku/index.vue') 
    },
    {
      path: '/sourceCode',
      component: () => import('./views/vueSourceCode/index.vue') 
    },
    {
      path: '/arrayBuf',
      component: () => import('./views/arrayBuf/index.vue') 
    },
    {
      path: '/binding',
      component: () => import('./views/binding/index.vue') 
    },
    {
      path: '/canvasDemo',
      component: () => import('./views/canvas-demo/index.vue') 
    }
    // { path: '*', redirect: '/404', hidden: true }  // 即使在浏览器的路由输入框中，输入了错误的路由列表未注册的路由，就会跳转至 404 页面
  ]
})

// 在未登录时 路由始终定向到 登录页面； 
// router.beforeEach((to, from, next) => {
//   const token = Cookies.get('token')
//   console.log('cookie key值为token的值====',token)
//   console.log('to===',to)
//   console.log('from===',from)
//   if (token) { // 如果token不为空字符串或者undefined，说明登录了
//     console.log('有token的----===',token) 
//     if (to.path === '/about') {      // 如果要跳转的页面是 登录页
//         // 如果登录了然后访问login页，不做跳转，从哪来回哪去
//         next(from.path)

//     } else {
//         // 否则顺利跳转
//         next()
//     }
//   } else { // 否则是没登录
//     if (to.path === '/about') {
//         // 如果没登录而且乖乖的到登录页去，轻松放行
//         next()
//     } else {
//         // 如果没登录还想去登录后的页面，打回登录页
//         next('/about')
//     }
//   }
// })